
function buildCoveTicketMaker( transport) {
    return function (name ) {
        alert("Here is your transportation ticket : " + transport + " .\n" +
        "welcome to the cold closures csve, " + name + "!");
    }
}
