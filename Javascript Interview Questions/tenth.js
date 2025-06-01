//Convert an array of strings into a single comma-seperated string

function Seperated(arr){

    let str='';
    
     str=arr.join(",")
    
    return str;
}

arr=["Uzair", "Paras", "Areeba"]
console.log(Seperated(arr))