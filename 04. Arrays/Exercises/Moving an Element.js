const numbers = [1, 2, 3, 4, 5];
const output = move(numbers, 0, 2);
console.log(output);

function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error("Invalid Offset");
        return;
    }
    const output = [...array];
    const removed = output.splice(index, 1)[0];
    output.splice(position, 0, removed);
    return output;
}
