const numbers = [1, 2, 3, 4, 5];
const output = except(numbers, [1,3,5]);
console.log(output);

function except(array, exclude) {
    let newArray = [];
    for (element of array) {
        if (!exclude.includes(element)) {
            newArray.push(element);
        }
    }
    return newArray;
}
