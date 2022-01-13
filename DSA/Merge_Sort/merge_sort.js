//Merge Sort
function merge(arr1,arr2){
  let arrNew=[];
  let i=0;
  let j=0;
  while(i < arr1.length && j < arr2.length){
    if(arr1[i] > arr2[j]){
      arrNew.push(arr2[j]);
      j++;
    }
    else if(arr1[i] === arr2[j]){
      arrNew.push(arr1[i]);
      i++;
      j++;
      
    }
    else{
      arrNew.push(arr1[i]);
      i++;
    }
  }

   while(i < arr1.length){
     arrNew.push(arr1[i]);
     i++;
   }

   while(j < arr2.length){
     arrNew.push(arr2[j]);
     j++;
   }

   return arrNew;
}

function mergeSort(arr){
  
  if(arr.length <=1){
    return arr;
  }
  let mid=Math.floor(arr.length/2);
  let left=mergeSort(arr.slice(0,mid));
  let right=mergeSort(arr.slice(mid));
  return merge(left,right);


}

console.log(mergeSort([45,456,565,1,2,3,4,5,6,6,7,]))

                                                                                [9,8,4,2,1] - return [1,2,4,8,9]
												    [9,8,4]left - return[4,8,9]                    [2,1]right - return[1,2]
												[9,8]left [4]right -return[4,8,9]            [2]left  [1]right  -return [1,2]
										[9]left  [8]right -return [8,9]

//---------------------------------------------------------------------------------
//Binary Search using recursive
function binarySearch(arr,check){
    if(arr.length === 1){
      return arr[0]===check ?  arr[0] : 0;
    }
    let mid=Math.floor(arr.length/2);
    if(arr[mid] === check){
      return arr[mid]===check ? check : 0;
    }
    else if(check > arr[mid] ){
      return binarySearch(arr.slice(mid,arr.length),check);
    }
    else{
      return binarySearch(arr.slice(0,mid),check);
    }
    
}

//console.log(binarySearch([1,2,3,4,5,6,7,7,8,9,10,12,13,14],3))

