const numbers = [1, 2, 3, 4, 5, 2, 3, 7];

const maxNumber = getMax(numbers);

console.log(maxNumber);

function getMax(array) {
    if (array.length === 0) return undefined;

    let max = 0;
    for (element of array) {
        if (element > max) {
            max = element;
        }
    }
    return max;
}
