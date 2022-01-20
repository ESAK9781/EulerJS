
module.exports.run = () => {
let sum = 0;
let squareSum = 0;

for (let i = 1; i <= 100; i++){
  sum += i;
  squareSum += i * i;
}

sum *= sum;
console.log(sum - squareSum);



}
























// End
