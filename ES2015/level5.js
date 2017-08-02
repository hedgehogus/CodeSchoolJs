
/////////////
// CLASSES //
/////////////

// a common approach to encapsulation in JS is using a constructor function

function SponsorWidget(name, description, url){
    this.name = name;
    this.description = description;
    this.url = url;
}

SponsorWidget.prototype.render = function(){
    //...
};

// invoking the SponsorWidget function looks like this:

let sponsorWidget = new SponsorWidget(name, description, url);
sponsorWidget.render();

// using the nee class syntax
/*

class SponsorWidget {

    constructor(name, description, url){
        this.name = name;
    this.description = description;
    this.url = url;
    }

    render(){
        let link = this._buildLink(this.url);
        //...
    }

    // prefixing a method with an underscore is a convention for indicating 
    // that it should not be invoked from the public API

    _buildLink(url){
        //...
    }
}

// the SponsorWidget function still use it just like before


sponsorWidget = new SponsorWidget(name, description, url);
sponsorWidget.render();

// we can use class inheritance to reduce code repetition. 
// Child classes inherit and specialize behavior defined in parent classes

class Widget {

    constructor(){
        this.baseCSS = "site-widget";
    }

    parse(value){
        //...
    }
}

class SponsorWidget extends Widget{

    constructor(name, description, url){
        super(); // runs parent's setup code

        //...
    }

    parse(){
        let parsedName = super.parse(this.name);

        return `Sponsor: ${parsedName}`;
    }

    render(){
        let parsedName = this.parse();
        let css = this._buildCSS(this.baseCSS);

        // ...
    }
}
*/


/////////////
// MODULES //
//  PART 1 //
///////////// 

//(flash-message.js)

import {alertMessage, logMessage} from './flash-message';
// import ownname from './flash-message' // if default function, can use every name

alertMessage("hello");
logMessage("hello");

 import *  as flash from './flash-message';
// functions become object "flash" properties

flash.alertMessage("hello alert");
flash.logMessage("hello log")


/////////////
// MODULES //
//  PART 2 //
///////////// 

// placing constants on their own module allows them to be reused across other
// modules and hides implementation details( a.k.a. encapsulation )


// to import constants we can use the exact same syntax for importing functions

import {MAX_USERS, MAX_REPLIES} from './flash-message'

function loadProfiles(userNames){
    
    if(userNames.length > MAX_USERS){
        //...
    }

    if(someElement > MAX_REPLIES){
        //...
    }
}

// imported classes are assigned to a variable using import and can then be used to create new instances

import FlashMessage from './flash-message';

let flash = new FlashMessage("hello");
flash.renderAlert();
flash.renderLog();

//names must match
import {FlashMessage} from './flash-message';
// the same code
let flash = new FlashMessage("hello");
flash.renderAlert();
flash.renderLog();