///////////////
// USING LET //
///////////////

function loadProfiles(userName){
    if (userName.length > 3){
        let loadingMessage = "This might take a while...";
        _displaySpinner(loadingMessage);
    } else {
        let flashMessage = "loading Profiles";
        _displayFlash(flashMessage);
    }
}

// the let keyword defines new variables scoped to the nearest block, not function

////////////////////////////
// USING LET IN FOR LOOPS //
////////////////////////////

function loadProfiles(userName){
    //...

    for(let i in userName){
        execute(function(){
            console.log("fetched for" ,userName[i]);
        })
    }
}

function execute(action){
    action();
}

loadProfiles(["fir", "hedgehog", "hoglet"]);

// variables declared with let can be reassigned but cannot be redeclared within the same scope

let flashMessage = "hello";
flashMessage = "goodbye";

//redeclaring is not allowed
// let flashMessage = "goodbye";
