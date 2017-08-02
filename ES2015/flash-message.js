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


// Exporting constants

export const MAX_USERS = 3;
export const MAX_REPLIES = 3;

// OR

const MAX_USERS = 3;
const MAX_REPLIES = 3;

export {MAX_USERS, MAX_REPLIES};

// Classes can also be exported from modules using the same syntax as functions. Instead
// of two individual functions, we now have 2 instance methods that are part of class

export default class FlashMessage {

    constructor(message){
        this.message = message;
    }

    renderAlert(){
        alert(`${this.message} from alert`);
    }

    renderLog(){
        console.log(`${this.message} from log`);
    }
}

// OR

class FlashMessage {

    constructor(message){
        this.message = message;
    }

    renderAlert(){
        alert(`${this.message} from alert`);
    }

    renderLog(){
        console.log(`${this.message} from log`);
    }
}

export {FlashMessage}; // while import the name of the class needs to be exact 
// the same name we use in the module

