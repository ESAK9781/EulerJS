

let sum = 1000;

for (let a = 1; a < sum; a++){
  for (let b = 1; a + b < sum; b++){
    let c = sum - (a + b);
    if (a * a + b * b == c * c){
      console.log(a * b * c);
    }
  }
}






























































// End
