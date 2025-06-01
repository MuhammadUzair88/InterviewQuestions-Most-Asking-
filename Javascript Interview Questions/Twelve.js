//Write a function that checks if all elements in an array are numbers

let arr=[12,45,67,89]

isNumber=true;

for(let i=0;i<arr.length;i++){

    if(!typeof arr[i]==="number"){
       isNumber=false;
    }

   

}
 console.log(isNumber ? "Arrays Contains Numbers" : "nops");
