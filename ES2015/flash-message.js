export  function alertMessage (message){
    alert(message);
}

export  function logMessage (message){
    console.log(message);
}

// the EXPORT keyword exposes this function to the module system

// the DEFAULT type export is the simplest way to export a function

// OR

function alertMessage (message){
    alert(message);
}

function logMessage (message){
    console.log(message);
}

export {alertMessage, logMessage};