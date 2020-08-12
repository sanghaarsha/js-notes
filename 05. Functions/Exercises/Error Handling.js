// Earlier we wrote a program to count number
// of occurences of a given element present in an array

const numbers = [1, 2, 3, 4, 5];

const count = countOccurrences(numbers, 1);
console.log(count);

// Here we are assumping the passed arguments is an array
// What happens if we pass a different type of data?
// It will chow error in console

function countOccurrences(array, searchElement) {
    return array.reduce((a, b) => {
        const counter = searchElement === b ? 1 : 0;
        return a + counter;
    }, 0);
}

// Now lets modify the function ad add error handlimg

try {
    const moreNumbers = [1, 2, 3, 4, 5, 2, 2];
    const counter = countOccurrences(null, 2);
    console.log(counter);
} catch (e) {
    console.error(e.message);
}

function countOccurrences(array, searchElement) {
    if (!Array.isArray(array)) {
        throw new Error("Please pass an array.");
    }
    return array.reduce((a, b) => {
        const counter = searchElement === b ? 1 : 0;
        return a + counter;
    }, 0);
}
