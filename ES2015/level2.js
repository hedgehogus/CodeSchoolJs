///////////////////////
// FUNCTION DEFAULTS //
///////////////////////

function loadProfiles(userNames){
    let names = typeof userNames !== 'undefined' ? userNames : [];
    let namesLength = names.length;
    // ...
}

// this function with new feature - DEFAULT PARAMETERS

function loadProfiles(userNames = []){    // assign empty array when no argument is passed when loadProfile is called
    let namesLength = userNames.length;
    // ...
}

setPageThread("new version out soon", {
    popular:true,
    expires: 10000,
    activeClass: "is-page-Thread"
});

function setPageThread(name, options = {}){
    let popular = options.popular;
    let expires = options.expires;
    let activeClass = options.activeClass;
    // ... 
}

function setPageThread(name, {popular, expires, activeClass} = {}){
    console.log(name + " " + popular + " " + expires + " " + activeClass);
    // ... 
}

/////////////////
// REST PARAMS //
/////////////////

// used in function definition

function displayTags(targetElement){
    let str = "";
    for(let i in arguments){
        let tag = arguments[i];
        str += tag + " ";
    }
    console.log(targetElement);
    console.log(str);
}

displayTags("fff", "ddd", "aaa");
displayTags();

//the new rest parameters syntax allows us to represent an indefinite number of arguments
// as an array. this way, changes to function signature are less likely to break code

function displayTags(targetElement, ...tags){
    let str = "";
    for(let i in tags){
        let tag = tags[i];
        str += tag + " ";
    }
    console.log(targetElement);
    console.log(str);
}

displayTags("target","fff", "ddd", "aaa");
displayTags("target");

/////////////////////
// SPREAD OPERATOR //
/////////////////////

// used in function invocation

// getRequest("/fgfg/fgfg/fgfg", function(data){
//    let tags = data.tags;
//    displayTags(...tags);
// });

let arr = ["first", "second", "something", "third"];
displayTags(...arr);
displayTags("target", ...arr);

/////////////////////
// ARROW FUNCTIONS //
/////////////////////

function TagComponent (target, urlPath){
    this.targetElement = target;
    this.urlPath = urlPath;
}

TagComponent.prototype.render = function(){
    getRequest(this.urlPath, function(data){
        //...
    });
}

