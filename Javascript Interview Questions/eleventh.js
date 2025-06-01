//Write a function that takes a nested array (one level deep) and returns a flattened version.


function flattened(arr){

    let newarr=[];
    for(let i=0;i<arr.length;i++){
      if(Array.isArray(arr[i])){
       for(let j=0;j<arr[i].length;j++){
        newarr.push(arr[i][j])
       }
      }
      else{
        newarr.push(arr[i]);
      }
    }
 
    return newarr;

}

arr=[1, 2, [3, 4], 5]
console.log(flattened(arr))