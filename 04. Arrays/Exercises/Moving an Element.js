const numArray = [1, 2, 3, 4, 5];

const output = move(numArray, 1, 1);

console.log(output);

function move(array, index, offset) {
    const position = index + offset;

    if (position >= array.length || position < 0) {
        console.error("Invalid Offset");
        return;
    }

    // Lets first copy the array so not to modify original array
    const newArray = [...array];

    // Now , as part of moving an array
    // First, we need to remove it from the array
    // Then, place it at the offset postion

    // Lets use Splice method to remove the array
    const removedElement = newArray.splice(index, 1);
    // Storing the removed element so that we can add it back later

    // using splice method to add removedElement
    newArray.splice(position, 0, removedElement[0]);

    // desired moving position = index + offset
    // 0 = no items to remove again
    // removedElement[0] = first element of the removedElement array
    // added to index + offset position in the array

    return newArray;
}