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