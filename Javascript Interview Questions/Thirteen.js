//Build a simple isPrime() function to check if a number is prime


let Number=12;

let isPrime=false;

if(Number<=1){
    isPrime=false;
}

for(let i=2;i<Number;i++){

    if(!(Number%i)===0){
     isPrime=true;
    }
    else{
     isPrime=false;
    }
}
console.log(isPrime);