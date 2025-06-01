//  Create a function that reverse each word of a given sentence. E.g., Mai hun
// manas → sanam nuh iam

function Reverse(str) {
    splitedstr=str.split(' ');
     let arr=[];
    for(let i=splitedstr.length-1;i>=0;i--){
     for(let j=splitedstr[i].length-1;j>=0;j--){
        arr.push(splitedstr[i][j])
     }
    }
    return arr.join('')

}
let str = "Uzair is cool";
console.log(Reverse(str)); 



