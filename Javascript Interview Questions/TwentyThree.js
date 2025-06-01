

//write a javascript program to find the most frequent item of an array.
function frequent(arr){

    let obj={};

    for (let i = 0; i < arr.length; i++) {
       let char=arr[i];
       if(obj[char]>0){
        obj[char]=obj[char]+1
       }
       else{
        obj[char]=1
       }
    }
  let Max=0;
  let mostfre;
   for(let keys in obj){
    if(obj[keys]>Max){
      Max=obj[keys]
      mostfre=keys;
    }
   }
return `${mostfre}:${Max}`
}

let arr = [3, "a", "b", "a", 3, "a", 2, 3, 3, 3];
console.log(frequent(arr))