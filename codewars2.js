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