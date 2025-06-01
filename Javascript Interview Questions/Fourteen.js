//Create a function that removes duplicate values from an array


let arr=[1,3,2,4,5,6,7,9,6,4]

let newArr=[];
for(let i=0;i<arr.length;i++){

    if(!newArr.includes(arr[i])){
        newArr.push(arr[i]);
    }
    
    
}
console.log(newArr)


//SOrting in ascending order


for(let i=0;i<arr.length;i++){
    for(let j=i;j<arr.length;j++){

        if(arr[i]>arr[j+1]){
            let temp = arr[i];
            arr[i] = arr[j + 1];
            arr[j + 1] = temp;

        }
        
    }
}
console.log(arr)
