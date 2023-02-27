//Insertion Sort

const insertionSort=(arr)=>{
    for(let i=1;i<arr.length;i++){
      let currVal=arr[i];
      let j;
      for(j=i-1;j>=0 && arr[j] > currVal;j--){
        arr[j+1]=arr[j];
      }
      arr[j+1]=currVal
    }
    return arr;
}

console.log(insertionSort([4,5,3,8,6,7,1,0,-1,34,-34])) 

7,6,10,11,8 cur=6
6 7 10 11 8   cur=8
6 7 10 11 11
6 7 8 10 11
