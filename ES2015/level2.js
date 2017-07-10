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