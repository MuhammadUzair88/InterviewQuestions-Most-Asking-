//Write a javascript function to get the number of occurrences of each letter in specified
// string.

function numofOcc(str) {
    let obj = {};
    let arr = str.split('');

    for (let i = 0; i < arr.length; i++) {
       let char=arr[i];
       if(obj[char]>0){
        obj[char]=obj[char]+1
       }
       else{
        obj[char]=1
       }
    }

    return obj;
}

console.log(numofOcc("hello"));
