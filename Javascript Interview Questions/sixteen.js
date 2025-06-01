// In an array of numbers and strings, only add those numbers which are not strings.

let arr =["uzair",1,4,5,"hafsa"]

let sum=0;
for(let i=0;i<arr.length;i++){
    
    if(typeof arr[i] !== 'string'){
 sum=sum+arr[i];
    }

    
}
console.log(sum)