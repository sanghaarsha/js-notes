// create a function called sum()
// that takes varying number of arguments
// and returns their sum

// using arguments object

function firstWay() {
    let total = 0;
    for (elmnt of arguments) total += elmnt;
    return total;
}

console.log(firstWay(1, 2, 3, 4, 5));

// using rest operator
// also if argument is passed as array of numbers

function sum(...args) {
    //  args value is set to = [[1,2,3,4]] (array of an array)
    // so copying value from index 0 of args which is an array
    // and resetting to array of numbers we need to add.

    if (args.length === 1 && Array.isArray(args[0])) args = [...args[0]];

    // if not passed an array it skips above 'if' block
    return args.reduce(
        (previousValue, currentValue) => previousValue + currentValue
    );
}

console.log(sum([1, 2, 3, 4]));

console.log(sum(1, 2));
