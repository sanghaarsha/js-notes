let iterations = 10;  // Enter the value you want 
let startNumber = 1;  // It will make code start to check from specified number

function numberCheck(number) {
    if (number % 2 === 0)
        return 'even'
    else
        return 'odd'
}

for (let i = iterations; i > 0; i--) {
    console.log(startNumber, numberCheck(startNumber));
    startNumber++;
}