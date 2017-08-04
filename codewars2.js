
//Simple fraction to mixed number converter

// first solution

function mixedFraction(s){
  let arr = s.split("/");
  if (arr[1] == 0){
    throw new IllegalArgumentException("ZeroDivisionError");
  }
  let int = parseInt(arr[0]/arr[1]);
  let rem = arr[0]-int*arr[1];
  let div = arr[1];
  if (int !== 0 ){
   rem = Math.abs( arr[0]-int*arr[1]);
   div = Math.abs( arr[1]);
  } else if ( div < 0 ) {
    rem = -rem;
    div = -div;
  }

   for (let i = 2; i <= Math.abs(rem); i++){
      let repeat = true;
      while (repeat){
      let a1 = rem/i;
      let a2 = div/i;
      console.log(rem + '/' + div);
      if (Number.isInteger(a1) && Number.isInteger(a2)){
        rem = a1;
        div = a2;
      } else {        
        repeat = false;
      }
      }
  }
 
  return (int === 0 ? rem === 0 ? 0 :"" : rem === 0 ? int : int + " " ) + (rem === 0 ? "" : rem + "/" + div);
}

// correct solution 

function mixedFraction(s){
  let [rem,div] = s.split("/");
  if (div == 0){
    throw new IllegalArgumentException("ZeroDivisionError");
  }
  let int = parseInt(rem/div);
  rem =div < 0 ? -(rem-int*div):rem-int*div;  
  
  let a = gcd(rem,div);
  rem = rem/a;
  div = Math.abs(div/a);
  
  if(int < 0) {
    rem = Math.abs(rem);
  }
 
  return (int === 0 ? rem === 0 ? 0 :"" : rem === 0 ? int : int + " " ) + (rem === 0 ? "" : rem + "/" + div);
}

function gcd(a,b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {var temp = a; a = b; b = temp;}
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}