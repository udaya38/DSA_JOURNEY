//Bubble Sort
function bubbleSort(arr){
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i-1;j++){
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
      }
    }
  }
  return arr;
}


console.log(bubbleSort([6,4,7,1,3,5]))

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
