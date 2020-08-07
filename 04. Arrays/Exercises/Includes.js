const numbers = [1, 2, 3, 4, 5];
console.log(includes(numbers, -5));

// Use Case : console.log(numbers.includes(1));
// Writing a function that works like includes:

function includes(array, searchElement) {
    for (let element of array)
        if (element === searchElement) {
            return true;
        }
    return false;
}
