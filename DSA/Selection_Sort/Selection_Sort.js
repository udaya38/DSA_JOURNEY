//Selection Sort

const selectionSort=(arr)=>{
    for(let i=0;i<arr.length;i++){
      let min=i
      for(let j=i+1;j<arr.length;j++){
        if(arr[min] > arr[j]){
          min=j;
        }
      }
      if(min !== i){
        [arr[i],arr[min]]=[arr[min],arr[i]]
      }
    }
    return arr;
}

console.log(selectionSort([4,5,3,3,6,7,1,0,-1,34,-34]))