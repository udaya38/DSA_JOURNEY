//Radix Sort

function getdigit(num,i){
  return Math.floor(Math.abs(num) / Math.pow(10,i)) % 10;
}

function getDigitCount(num){
  if(num===0) return 1;
  return Math.floor(Math.log10(num))+1;
}
function getMaximumDigitcount(nums){
  let maxdigit=0;
  for(let i=0; i<nums.length;i++){
    maxdigit=Math.max(maxdigit,getDigitCount(nums[i]))
  }
  return maxdigit;
}

function quickSort(nums){
  let maxNumCount=getMaximumDigitcount(nums);
  for(let k=0;k<maxNumCount;k++){
    let arr=Array.from({length:10},()=>[]);
    for(let i=0;i<nums.length;i++){
      let getDig=getdigit(nums[i],k);
      arr[getDig].push(nums[i]);
    }
    nums=[].concat(...arr)
  }
  return nums;
}

console.log(quickSort([646,334,6,6,7,356,7,67,1,2]))