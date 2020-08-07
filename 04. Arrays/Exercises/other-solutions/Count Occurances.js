const numArray = [1, 2, 3, 4, 5, 1, 1];

const count = countOccurances(numArray, 1);

function countOccurances(array, elementToSearch) {
    let count = 0;
    for (element of array) if (element === elementToSearch) count++;
    return count;
}

console.log(count);
