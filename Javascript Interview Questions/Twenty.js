// Write a Javascript function that accepts a string as a parameter and conversts the first
// letter of each word of the string in upper case.

function Uppercase(str){

    let arrstr=str.split(' ');
//      let arr=[];
//     for(let i=0;i<arrstr.length;i++){
//         for(let j=0;j<arrstr[i].length;j++){
//             if(j===0){
//                 arr.push(arrstr[i][j].toUpperCase());
//             }
//             else{
//                 arr.push(arrstr[i][j]);
//             }
//         }

//     }
// return arr.join('')


//Second way

const upperstr=arrstr.map((item)=>(item.charAt(0).toUpperCase()+item.slice(1)))

return upperstr.join('')

}

console.log(Uppercase("hello world from uzair"))