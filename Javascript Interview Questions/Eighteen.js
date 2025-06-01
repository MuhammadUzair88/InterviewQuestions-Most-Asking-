// 24. Write a JavaScript function that reverse a number.


function Reverse(num){
      
    let numtostr=num.toString();
    let strtoarr=numtostr.split('');

    let arr=[];
    for(let i=strtoarr.length-1;i>=0;i--){
    arr.push(strtoarr[i]);
    }
    return arr.join('')
  
}

console.log(Reverse(12345))