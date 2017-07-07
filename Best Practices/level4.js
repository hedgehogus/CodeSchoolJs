////////////////////////
// NAMESPACING BASICS //
////////////////////////

// Nesting namespases provide further organization and protection, as well
// as help keep variable names intuitive

var HOFMASTER = {
    list: ["Jar Treen", "Maximo Rarter", "Pol Grtist"],
    hof: document.getElementById("hof"),
    fragment: document.createDocumentFragment(),
    element: undefined,
    displayHOF: function(){
        for (var i = 0, x = list.length; i<x; i++){
            this.element = document.createElement("li");
            this.element.appendChild(document.createTextNode(this.list[i]));
            this.fragment.appendChild(this.element);
        }
        this.hof.appendChild(this.fragment);
    },
    BIOGRAPHIES: {
        "Jar Treen": "some text on Jar",
        "Maximo Rarter": "some text on maximo",
        "Pol Grist": "some text on pol",
        lists: "some useful list of biography data",
        unfoldBio: function (member){
            // adds text from this[member] to some element
        }
    }
};

HOFMASTER.BIOGRAPHIES.unfoldBio(HOFMASTER.list[1]);



////////////////////////
// ANONYMOUS CLOSURES //
////////////////////////

var ARMORY = (function(){

    var weaponList = [/*list*/];
    var armorList = [/*list*/];

    var removeWeapon = function(/*...*/){};
    var replaceWeapon = function(/*...*/){};
    var removeArmor = function(/*...*/){};
    var replaceArmor = function(/*...*/){};

    return {
        makeWeaponRequest : function(/*...*/){/*calls on invisible removeWeapon*/},
        makeArmorRequest : function(/*...*/){},
    };

})();



///////////////////
// GLOBAL IMPORT //
///////////////////

var wartime = true;
var ARMORY = (function(war){
    // now functions parameter creates a modifiable value for use in the module
    // while the global value stays protected if necessary

    var weaponList = [/*list*/];
    var armorList = [/*list*/];

    var removeWeapon = function(/*...*/){};
    var replaceWeapon = function(/*...*/){};
    var removeArmor = function(/*...*/){};
    var replaceArmor = function(/*...*/){};

    return {
        makeWeaponRequest : function(/*...*/){/*calls on invisible removeWeapon*/
            if (war){
                // let civilians have weaponry
            }
        },
        makeArmorRequest : function(/*...*/){},
    };

})(wartime);



//////////////////
// Augmentation //
//////////////////

// new js file

ARMORY = function(oldNs){
    // since our namespace is global, we'll import it as a local,
    // in order to make some modofications to a temporary object

    var oilBarrels = 1000;
    var catapults = ["Stonerlinger", "rockRain", "The giants arm"];

    oldNS.assignCatapult = function ( regiment){
        // hooks up a regiment with a sweet catapult
        // and some oil barrels
    }

    return oldNs;

}(ARMORY);// We pass in the old module to our modifiing



