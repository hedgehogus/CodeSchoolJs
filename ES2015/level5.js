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

let sponsorWidget = new SponsorWidget(name, description, url);
sponsorWidget.render();

