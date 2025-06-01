//length of object


function lengthOfObject(obj) {

    let count=0;

    for(let keys in obj){
        if(obj.hasOwnProperty(keys)) {
            count++;
        }
        return count;
    }
}