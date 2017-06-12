function XO(str) {
    var balance = 0;
    for ( var i =0; i < str.length; i++){
      if (str.toLowerCase().charAt(i) == "o"){
          balance++;
      } else if (str.toLowerCase().charAt(i) == "x"){
          balance --;
      }
    }
    if (balance == 0) {
        return true;
    } else {
        return false;
    }
}


String.prototype.toJadenCase = function () {
 var output = this.charAt(0).toUpperCase();
  for(var i = 1; i < this.length; i++){
    if (this.charAt(i-1) == " "){
        output += this.charAt(i).toUpperCase();
    }else {
        output += this.charAt(i);
    }      
  }
  return output;
};

//12.06.17
//  create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
  return l.filter( function filt(value){return typeof value === "number"});
}

// Simple, given a string of words, return the length of the shortest word(s)

function findShort(s){
  var arr = s.split(" ");
  var output = arr.shift().length;
  while (arr.length != 0){
      var a = arr.shift().length;
      if (output > a){
          output = a;
      }
  }
  return output;
}

//Given an array, find the int that appears an odd number of times.

function findOdd(a) {    
    for (var i = 0; i <a.length; i++ ){
        var current = a[i];      
        var result = 0;
        for (var y =0; y<a.length; y++){
          result = (current === a[y] ? result+1 : result); 
        }
        console.log(current + " -- " + result);
        if (result % 2 == 1 || result == 1){
            return current;
        }
    }
}