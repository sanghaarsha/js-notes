const numbers = arrayFromRange(-1, 5);

console.log(numbers);

function arrayFromRange(min, max) {
    let output = [];
    for (i = min; i <= max; i++) {
        output.push(i);
    }
    return output;
}
