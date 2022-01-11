

// console.log(JSON.stringify(primeFactor(345873), null, 2));

let allFactors = [];
for (let i = 1; i <= 200; i++){
  allFactors = allFactors.concat(primeFactor(i));
}
allFactors.sort((a, b) => {
  if (a.factor == b.factor){
    return b.multiplicity - a.multiplicity;
  } else {
    return a.factor - b.factor;
  }
});

let currentFactor = 0;
let toMult = [];
for (let i = 0; i < allFactors.length; i++){
  if (allFactors[i].factor != currentFactor){
    currentFactor = allFactors[i].factor;
    toMult.push(Math.pow(allFactors[i].factor, allFactors[i].multiplicity));
  }
}

let out = 1;
for (let i = 0; i < toMult.length; i++){
  out *= toMult[i];
}
console.log(out);


function primeFactor(n){
  let factors = [];
  while(n != 1){ //get all of the factors
    let i = 2;
    while(n % i != 0){
      i++;
      if (i > n){
        console.log("Error, cannot find factor of " + n);
      }
    }
    factors.push(i);
    n /= i;
  }
  let out = [];
  for (let i = 0; i < factors.length; i++){
    if (out[factors[i]] == undefined){
      out[factors[i]] = {
        factor: factors[i],
        multiplicity: 1
      };
    } else {
      out[factors[i]].multiplicity++;
    }
  }
  out.sort((a, b) => {
    return (a.factor - b.factor);
  });
  let toReturn = [];
  let i = 0;
  while(out[i] != undefined){
    toReturn.push(out[i]);
    i++;
  }
  return toReturn;
}

































// End
