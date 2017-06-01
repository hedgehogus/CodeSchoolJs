
function buildCoveTicketMakerFirst( transport) {
    return function (name ) {
        alert("Here is your transportation ticket : " + transport + " .\n" +
        "welcome to the cold closures cave, " + name + "!");
    }
}

function buildCoveTicketMakerSecond( transport) {
    var passengerNumber = 0;
    return function (name ) {
        passengerNumber++;
        alert("Here is your transportation ticket : " + transport + " .\n" +
        "welcome to the cold closures cave, " + name + "!\n" +
        "Your are passenger #" + passengerNumber + "." );
    }
}

var getSubmarineTicket = buildCoveTicketMakerSecond("Submarine");
getSubmarineTicket;

// dangers at the moment of closure ( not correct number)
function assignTorpedo( name, passengerArray){
    var torpedoAssignment;
    for (var i = 0; i < passengerArray.length; i++){
        if (passengerArray[i] == name) {
            torpedoAssignment = function(){
                alert("Ahoy, " + name + "!\n" + "Man your post at Torpedo #" + (i+1) + "!");
            }
        }
    }
    return torpedoAssignment;
}

var subPassengers = ["Luke", "Leia", "Han", "Chewie", "Yoda", "R2D2" ];
var giveAssignment = assignTorpedo("Chewie", subPassengers);
//giveAssignment();

// one of correct ways

function makeTorpedoAssigner(passengerArray){
    return function (name) {
        for (var i = 0; i< passengerArray.length; i++){
            if(passengerArray[i] == name){
                alert("Ahoy, " + name + "!\n" + "Man your post at Torpedo #" + (i+1) + "!");
            }
        }
    }
}

var getTorpedoFor = makeTorpedoAssigner(subPassengers);
getTorpedoFor("Chewie");



