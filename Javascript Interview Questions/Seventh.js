//Given an array of strings, return a new array where all strings are in uppercase

function Uppercase(arr){

    let newarr=[];
   for(let i=0;i<arr.length;i++){
newarr.push(arr[i].toUpperCase())
   }
   return newarr
}
arr=["uzair","paras","areeba"]
console.log(Uppercase(arr))