//Create an array of numbers and double each value using .map()

function Double(arr){

    let newarr=[];
arr.map((item)=>{
    newarr.push(item*2);
})
return newarr;
}

arr=[1,2,3,4,5,6]

console.log(Double(arr))