//Check if an object is empty (has no keys)
function isEmptyObject(obj) {
    let isEmpty = true;

    for (let key in obj) {
        isEmpty = false;
        break;
    }

    return isEmpty;
}
