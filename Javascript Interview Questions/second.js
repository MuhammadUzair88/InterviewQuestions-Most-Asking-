
//Find combination

const combination=(arr1,arr2)=>{
 let comarr=[];
 

 for(let i=0;i<arr1.length;i++){
    comarr.push(arr1[i]);
 }
 for(let i=0;i<arr2.length;i++){
    comarr.push(arr2[i]);
 }
return comarr

}
arr1=[1,2,3,4,5];
arr2=[8,9,0];
console.log(combination(arr1,arr2))

//simpler way
const combination2 = (arr1, arr2) => arr1.concat(arr2);