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

// Convert number to reversed array of digits

function digitize(n) {
  var arr = [];
  while (n/10 > 0){
  var a = n%10;  
  arr.push(a);   
  n = (n-n%10)/10;
  }  
  return arr;
}

function digitize(n) {
  return String(n).split('').map(Number).reverse()
}

//Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic 
// characters and numeric digits that occur more than once in the input string. The input
// string can be assumed to contain only alphanumeric characters, including digits, uppercase 
// and lowercase alphabets.

function duplicateCount(text){
  var arr = text.toLowerCase().split("");
  var output = 0;
  while (arr.length > 0){
  var current = arr.shift();
  if (current){
  var isChecked = false;
    for ( var i =0; i < arr.length; i ++) {
      if (current == arr[i]){
        if (!isChecked) {
          output++;
          isChecked = true;
        }
        arr[i] = undefined;
      }
    }
  }
  }
  return output;
}

function duplicateCount(text){
  var lower = text.toLowerCase();
  var count = 0;
  var used = [];
  
  lower.split('').forEach(function(letter) {
    if (!used.includes(letter) && (lower.split(letter).length - 1) > 1) {
      count++;
      used.push(letter);
    }
  });
  
  return count;
}

function duplicateCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

function list(names){
  var output = "";
  for (var i = 0; i < names.length; i ++){   
    if (i < (names.length - 2)){
      output = output + names[i]["name"] + ", ";      
    } else if (i == names.length - 2){
      output = output + names[i]["name"] + " & ";      
    } else {
      output = output + names[i]["name"] ;   
    }
  }
  return output;
}

// You need to return a string that displays a diamond shape on the screen using asterisk ("*") characters. 

function diamond(n){
  var diam = null;
  if (n%2 == 1){
    diam = "";
    var limit = parseInt(n/2 + 1);   
    for( var i = 1; i <= limit; i ++){
        for (var y = 0; y < limit - i; y ++){
          diam = diam + " ";
        }
        for (var y = 0; y < (i)*2-1; y++){
          diam = diam + "*";
        }
      diam = diam + "\n";    
    };
    console.log(limit + "\n")
    for( var i = limit- 1; i > 0; i --){
        for (var y = 0; y < limit - i; y ++){
          diam = diam + " ";
        }
        for (var y = 0; y < (i)*2-1; y++){
          diam = diam + "*";
        }
      diam = diam + "\n";    
    }
   
  
  }
  console.log(diam);
  return diam;
}

//The input is a string str of digits. Cut the string into chunks 
// (a chunk here is a substring of the initial string) of size sz 
// (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits
// is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position.
// Put together these modified chunks and return the result as a string.

function revrot(str, sz) {
    var arr = [];
    if (sz < 1){
      return "";
    } else if (sz == 1){
      return str;
    }
    while (str.length >= sz){
        arr.push(str.substring(0,sz));
        str = str.substring(sz);        
    }
    for (var i = 0; i < arr.length; i ++) {
      var temp = arr[i].split('');
      var sum = 0;
      for (var y = 0; y < temp.length; y ++){
          sum +=temp[y]*temp[y]*temp[y];          
      }
      
      if (sum % 2 == 1){         
          var a = temp.shift();          
          temp.push(a);          
      } else {
          console.log(temp);
          temp = temp.reverse();
          console.log(temp);
      }
      arr[i] = temp.join("");

    }
    console.log(arr);
    
    return arr.join("");
}