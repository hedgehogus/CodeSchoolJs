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


/////////////
// MODULES //
//  PART 1 //
/////////////