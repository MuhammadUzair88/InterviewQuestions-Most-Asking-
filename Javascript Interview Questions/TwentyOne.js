// Write a javascript function to get the first element of an array. Passing a parameter 'n' will
// return the first 'n' elements of the array.


function ReturnArr(arr,n){
   let arr1=[];
  if(n===undefined){
    for(let i=0;i<arr.length;i++){
arr1.push(arr[i])
    }
}
else{
    for(let i=0;i<n && i<arr.length;i++){
        arr1.push(arr[i])
    }
}

return arr1


}

console.log(ReturnArr([1,2,3,4,5]))