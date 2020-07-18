const array = ['hello', 'hi','bye' ,'', NaN, 0, false];
console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for (let object of array) {
        if (object) 
        // If the object is not boolean JS engine will change it to Truthy or Falsy
        // If changed to Truthy count will be incremented.
        // No need to pass many test conditions
            count++;
    }
    return count;
}