function solequa(n) {

console.time("hedge");
  if(n % 4 > 1) {
    return [];
  }
  
  // x^2 - 4y^2 = n
  // (x - 2y)(x + 2y) = n;
  // x - 2y = d1
  // x + 2y = d2
  // 2x = d1 + d2
  // x = (d1 + d2) / 2
  // -4y = d1 - d2
  // y = (d2 - d1) / 4
  
  let x, y, maxY = n / 4, advY = 1;
  
  const solutions = findDividers(n).map(([d1, d2]) => {
    x = (d1 + d2) / 2;
    y = (d2 - d1) / 4;
    if(Number.isInteger(x) && Number.isInteger(y)) {
      return [x, y];
    }
  });
  
  return solutions.sort((s1, s2) => s2[0] - s1[0]).filter(s => !!s);
}

function findDividers(n) {
  const ds = [[1, n]];
  const sqrtn = Math.sqrt(n);
  for(var i = 2; i <= sqrtn; i++) {
    if(n % i === 0) {
      ds.push([i, n / i]);
    }
  }

  console.timeEnd("hedge");
  return ds;
}