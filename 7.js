module.exports.run = () => {
console.log(sieveOfEratosthenes(1000000)[10001 - 1]);

function sieveOfEratosthenes(n){
  let nums = [];
  for (let i = 0; i < n; i++){
    if (i >= 2){
      nums.push(i);
    } else {
      nums.push(undefined);
    }

  }

  let div = 2;
  while (div < n / 2){
    for (let i = div * 2; i < nums.length; i += div){
      nums[i] = undefined;
    }

    div++;
    while (div < n / 2 && nums[div] == undefined){
      div++;
    }
  }

  let primList = [];
  for (let i = 0; i < nums.length; i++){
    if (nums[i] != undefined){
      primList.push(nums[i]);
    }
  }
  return primList;
}





}























// End
