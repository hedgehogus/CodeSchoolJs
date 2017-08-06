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
