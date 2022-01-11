//Bubble Sort
const sortArray=(arr)=>{
  let count=0;
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]>arr[j]){
        [arr[i],arr[j]]=[arr[j],arr[i]]
      }
      count++;
    }
  }
  return [arr,count];
}

console.log(sortArray([1,2,3,4,6,5]));

//-------------------------------------------------------------
//Optimised bubble sortArray

const sortArrayOptimised=(arr)=>{
  let count=0;
  for(let i=arr.length;i>0;i--){
   let noSwap=true;
    for(let j=0;j<i-1;j++){
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
        noSwap=false;
      }
      count++;
    }
    if(noSwap) break;
  }
  return [arr,count];
}

console.log(sortArrayOptimised([1,2,3,4,6,5]))