var diff = function (a,b){
    return a*a - b*b;
}

// map

var numbers = [15,4,3,9,8,6,10,1];

var result = numbers.map(function (arrayCell){return arrayCell*2; });

console.log("map results: " + result); 