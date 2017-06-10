
function sumOfSquares0( a, b) {
    var x = add(a*a, b*b);
    return x;

    function add (c, d) {
        var a = c+d;
        return a;
    }
}

function sumOfSquares (a,b){
    var x = undefined;
    function add (c, d) {
        var a = c+d;
        return a;
    }
    x = add(a*a, b*b);
    return x;
}

// answer = 8
function getMysteryNumber0() {
    function chooseMystery(){
        return 12;
    }
    return chooseMystery();
    function chooseMystery(){
        return 8;
    }
}

// anwwer = 12
function getMysteryNumber() {
    var chooseMystery = function(){
        return 12;
    }
    return chooseMystery();
    var chooseMystery = function(){
        return 8;
    }
}
console.log(getMysteryNumber());


function capacityStatus(numPassengers, capacity) {
    if (numPassengers == capacity) {
        noSeats();
    } else {
        setsAvail();
    }

    function noSeats() {
        alert("No seats left!");
        return false;
    }

    function setsAvail(){
        alert("There are " + (capacity - numPassengers) + "seats left!");
        return true;
    }
}