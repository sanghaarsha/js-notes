const numArray = [1, 2, 3, 4, 5, 1];

const result = count(numArray, 1);

console.log(result);

function count(array, checkNumber) {
    return array.reduce((accumulator, current) => {
        const count = (current === checkNumber) ? 1 : 0;
        return accumulator + count;
    }, 0);
}
