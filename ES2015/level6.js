//////////////
// PROMISES //
//////////////

// its very important to understand how to work with js single thread model.
// otherwise we might accidentally freeze the entire app, to the detriment of user experience

// once the browser blocks a script, it stops running other scripts, rendering elements,
// and responsing to user events like keyboard and mouse interactions

let results = getPollResultsFromServer("Sass vs. LESS");
ui.renderSidebar(results); // page freezes until a value is returned from this function

// In order to avoid blocking the main thread of execution, we write non-blocking code like this:

getPollResultsFromServer("Sass vs. LESS", function (results){
    ui.renderSidebar(results);
});

// In continustion-passing style (CPS) async programming, we tell a function how to continue
// execution by passing callbacks. It can grow to complicated nested code

getPollResultsFromServer("Sass vs. LESS", function (error,results){
    if (error){/* .. handle error */}
    //
    ui.renderSidebar(results, function(error){
        if (error){/* .. handle error */}
        //
        sendNotificationToServer(pollName, results, function(error,response){
            if (error){/* .. handle error */}
            //
            doSomethingElseNonBlocking(response, function(error){
                if (error){/* .. handle error */}
                //
            });
        });
    });
});

// a PROMISE is a new abstraction that allows us to write async code in an easier way

getPollResultsFromServer("Sass vs. LESS")
    .then(ui.renderSidebar)
    .then(sendNotificationToServer)
    .then(doSomethingElseNonBlocking)
    .catch(function(error){
        console.log("error: ", error);
    }); // still non-blocking, but not using nested callbacks anymore

// the promise constructor function takes an anonymous function
// with 2 callback arguments known as handlers

function getPollResultsFromServer(pollName){
    return new Promise(function(resolve, reject){ // handlers are responsible for either resolving or rejecting the promise
        //...
        resolve(someValue);

        //...
        reject(someValue);
    })
}

// creating a new promise autimatically sets it to the pending state. then, it can do 1 of 2
// things: become fullfilled (when resolve) or rejected

// a promise represents a future value, such as the eventual result of an asynchronous operation

let fetchingResults = getPollResultsFromServer("Sass vs. LESS"); 
// no longer need to pass a callback function as argument


// let's wrap the XMLHttpRequest object API within a promise.
// Calling the resolve() handler moves the Promise to a fulfilled state

function getPollResultsFromServer(pollName){
    return new Promise(function(resolve,reject){
        let url = `/result/${pollName}`;
        let request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = function(){
            if(request.status>= 200 && request.status < 400){
                resolve(JSON.parse(request.response));
            }
        };
        //...
        request.send();
    })
}

// we can use then() method to read results from the promise once it's resolved.
// this method takes a function that will only be invoked once the Promise is resolved

let fetchingResults = getPollResultsFromServer("Sass vs. LESS");
fetchingResults.then(function(results){
    ui.renderSidebar(results)
})

// we are currently using a temporary variable to store our Promise object, but it's not
// really necessary. Lets replace it with chaining function calls

getPollResultsFromServer("Sass vs. LESS")
    .then(function(results){
        ui.renderSidebar(results);
    });


// we can also chain multiple calls to then() - the return value from 1 call 
// is passed as argument to the next

getPollResultsFromServer("Sass vs. LESS")
    .then(function(results){
        return results.filter((result) => result.city === "Orlando");
    })
    .then(function(resultFromOrlando){
        ui.renderSidebar(resultFromOrlando);
    });

// we can call the reject() handler for unsuccesful status codes and also when the onerror event
// is trigered onour request object. Both move the promise to a reject state.

function getPollResultsFromServer(pollName){
    return new Promise(function(resolve,reject){
        let url = `/result/${pollName}`;
        let request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = function(){
            if(request.status>= 200 && request.status < 400){
                resolve(JSON.parse(request.response));
            } else {
                reject( new Error(request.status));
            }
        };
        request.onerror = function(){
            reject(new Error("Error fetching Results"));
        }
        //...
        request.send();
    })
}

// Once an error occurs, execution moves immediately to the catch() function. None of the 
// remaining then() functions are invoked

getPollResultsFromServer("Sass vs. LESS")
    .then(function(results){
        return results.filter((result) => result.city === "Orlando");
    })
    .then(function(resultFromOrlando){
        ui.renderSidebar(resultFromOrlando);
    })
    .catch(function(error){
        console.log("error: ". error);
    });

// we can make our code more succinct by passing function arguments to then, 
// instead of using anonymous functions

function filterResults(results){
    return results.filter((result) => result.city === "Orlando");
}

let ui = {
    renderSidebar(filteredResults){/*...*/}
};

getPollResultsFromServer("Sass vs. LESS")
    .then(filterResults)
    .then(ui.renderSidebar)
    .catch(function(error){
        console.log("error: ". error);
    });