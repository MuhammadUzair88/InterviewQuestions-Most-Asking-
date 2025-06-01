// Write a javascript function that returns a passed string with letters in alphabetical order.


const Sorting=(str)=>{
  
 let arr=str.split('')
  let sorted=arr.sort();

  return sorted.join('')

}

console.log(Sorting("banana"))