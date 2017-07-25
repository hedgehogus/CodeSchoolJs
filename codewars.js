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

//Create a function that returns the sum of the two lowest positive numbers 
//given an array of minimum 4 integers. No floats or empty arrays will be passed.

// For example, when an array is passed like [19,5,42,2,77], the output should be 7.
// [10,343445353,3453445,3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {  
  var [ a, b ] = numbers.sort((a, b) => a - b)
  return a + b
}

function sumTwoSmallestNumbers(numbers){  
  numbers = numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
};

// You live in the city of Cartesia where all roads are laid out in a perfect grid. 
// You arrived ten minutes too early to an appointment, so you decided to take the 
// opportunity to go for a short walk. The city provides its citizens with a Walk 
// Generating App on their phones -- everytime you press the button it sends you an
// array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
// You know it takes you one minute to traverse one city block, so create a function that 
// will return true if the walk the app gives you will take you exactly ten minutes 
// (you don't want to be early or late!) and will, of course, return you to your starting point.
// Return false otherwise.

function isValidWalk(walk) {
console.log(walk);
  for (var y = 0; y < 5; y ++){    
        var a1 = oposite[walk.splice(0,1)];
        var index = walk.indexOf(a1);
        console.log(index);
        if (index > -1) {
            walk.splice(index,1);
        } else {
          return false;
        }    
  }
  return walk.length === 0 ? true : false;
}

var oposite = {
    n: 's',
    s: 'n',
    w: 'e',
    e: 'w'
}


// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

function titleCase(title, minorWords) {
  let exc = typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(" ") : [];
  let arr = title.toLowerCase().split(" ");
  
  arr[0] = capital(arr[0]);
    
  for (let i = 1, x = arr.length; i < x; i ++){
    console.log(exc.indexOf(arr[i]));
    if(exc.indexOf(arr[i]) < 0){
        arr[i] = capital(arr[i]);
    }
  
  }
  return arr.join(" ");
}
function capital(word){  
  let arr = word.split("");   
  if(typeof arr[0] === "undefined"){return};
  arr[0] = arr[0].toUpperCase();
  return arr.join("");
}

// Given a list of integers and a single sum value, return the first two values 
// (parse from the left please) in order of appearance that add up to form the sum.

var sum_pairs=function(ints, s){
   
    let min = ints.length;
    let output;

    for (let i = 0, x = ints.length; i < x ; i ++){
        for (let j = i + 1; j < x; j++){        
            if ((ints[i]+ints[j] === s) && (j-i < min)) {
               output = [ints[i], ints[j]]; 
               min = j-i;
               console.log(output);
            }
        }      
    }    
    
    return output;
}

var sum_pairs=function(ints, s){
   
    for ( let i = 1, x = ints.length; i < x; i ++){
      for ( let j = 0, y = x - i; j < y; j ++){
          if ( ints[j]+ ints[j+i] === s){
            return [ints[j], ints[j+i]];
          }
      }    
    } 
}

var sum_pairs = function (array, s) {
    var a, i,
        hash = Object.create(null);

    for (i = 0; i < array.length; i++) {
        a = array[i];
        if (hash[s - a]) {
            return [s - a, a];
        }
        if (!hash[a]) {
            hash[a] = true;
        }
    }
};

// Build a pile of Cubes
// The parameter of the function findNb (find_nb, find-nb, findNb) will be an integer m and you have to return 
// the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.

function findNb(m) {
    let rem = m;
    let n = 0;
    while (rem > 0){
      n ++;
      rem = rem - n*n*n;
    }
    return rem === 0 ? n : -1;
}



// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? 
// We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider 
// things like undefined, null, NaN, negative numbers, strings and so on.

// Here is a list of functions, we need:

// Math.round()
// Math.ceil()
// Math.floor()

// 1

Math.round = function(number) {
  return number%1 < 0.5 ? Math.floor(number) : Math.ceil(number)  ; 
};

Math.ceil = function(number) {
  return number%1>0 ? number - number%1 + 1 : number; 
};

Math.floor = function(number) {
  return number - number%1;
};

// 2

Math.round = function(number) {
  return (number - parseInt(number) >= 0.5) ? parseInt(number) + 1 : parseInt(number) ;
};

Math.ceil = function(number) {
  return (parseInt(number) === number) ? number : parseInt(number) + 1;
};

Math.floor = function(number) {
  return parseInt(number);
};


//How many ways can you make the sum of a number?

function sum(num) {
  let a = {sum: 0};
  partition(num, num,"", a)
  return a.sum;
}

function partition(n, max,pref,  a) {
        if (n == 0) {  
        a.sum ++;        
            return;
        }
  
        for (let i = Math.min(max, n); i >= 1; i--) {
            partition(n-i, i, pref + " " + i, a);
        }
    }
    
