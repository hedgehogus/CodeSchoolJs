
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