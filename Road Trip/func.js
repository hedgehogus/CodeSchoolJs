var diff = function (a,b){
    return a*a - b*b;
}

// map

var numbers = [15,4,3,9,8,6,10,1];

var result = numbers.map(function (arrayCell){return arrayCell*2; });

console.log("map results: " + result); 

// returning functions and immediate invocations

var parkRides = [["Birch Bumpers", 40],
                 ["pines Plunge", 55],
                 ["Cedar Coaster", 20],
                 ["Ferris wheel of Firs", 90]];

var fastPassQueue = ["Cedar Coaster", "pines Plunge", "Birch Bumpers",  "Ferris wheel of Firs"];

var wantsRide = "Cedar Coaster";

function buildTicket(allRides, passRides, pick) {
    if (passRides[0] == pick){
        var pass = passRides.shift();
        return function () { alert("Quick! You've got a Fast Pass to " + pass + "!");};
    } else {
        for (var i = 0; i < allRides.length; i++){
            if (allRides[i][0] == pick) {
                return function (){
                    alert("A ticket is printing for " + pick + "!\n" + " Your wait time is about " + allRides[i][1] + " minutes.");
                }
            }
        }
    }
}

// invoking function:

var ticket = buildTicket(parkRides, fastPassQueue, wantsRide);
ticket();
// or 
buildTicket(parkRides, fastPassQueue, wantsRide)();
