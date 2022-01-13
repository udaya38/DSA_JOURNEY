//Quick Sort
function pivot(arr, start=0,end=arr.length-1){
   let swapIndex=start;
   for(let i=start+1;i<=end;i++){
     if(arr[start] > arr[i]){
       swapIndex++;
       [arr[swapIndex],arr[i]]=[arr[i],arr[swapIndex]];
     }
   }
   [arr[start],arr[swapIndex]]=[arr[swapIndex],arr[start]];
   return swapIndex;
}

function quickSort(arr,left=0,right=arr.length-1){
  if(left < right){
    let pivotIndex=pivot(arr,left,right);
    quickSort(arr,left,pivotIndex-1);
    quickSort(arr,pivotIndex+1,right);
  }
  return arr;
}

console.log(quickSort([3,6,2,8,1,4]))