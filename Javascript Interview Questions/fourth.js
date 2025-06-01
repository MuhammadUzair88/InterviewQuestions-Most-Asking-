
// function FilterString(arr){

//     let newarr=[];
//     for(let i=0;i<arr.length;i++){
//         if(typeof arr[i]==="string"){
//             newarr.push(arr[i]);
//         }
//     }
//    return newarr;

// }

// arr=["Uzair",1,3,4,"Ahmed"]
// console.log(FilterString(arr))


//Simpler way

function FilterString(arr){

    let newarr=[];

   newarr.push(arr.filter((item)=>typeof item === "string"));
   return newarr

}

arr=["Uzair",1,3,4,"Ahmed"]
console.log(FilterString(arr))