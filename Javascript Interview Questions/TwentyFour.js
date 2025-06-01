//write a javascript program to shuffle an array.

let arr=[1,2,3,4,5,6]
for(let i=0;i<arr.length;i++){
    let randomIndex=Math.floor(Math.random()*arr.length)

    let temp=arr[i];
    arr[i]=arr[randomIndex];
    arr[randomIndex]=temp;

}
console.log(arr);