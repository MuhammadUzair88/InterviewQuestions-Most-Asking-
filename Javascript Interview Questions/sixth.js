


function filtermales(arr){

    let obj=[];

    for(let i=0;i<arr.length;i++){
      if(arr[i].gender==='male'){
        obj.push(arr[i]);
      }
    }
    return obj;
}

arr=[
 {
    gender:"male",
    name:"Uzair"
 },
 {
 gender:"female",
    name:"Hafsa"
 },
 {gender:"male",
    name:"hushuiw"
 }
]
console.log(filtermales(arr))