const newArray = arrayFromRange(-1,4);
console.log(newArray);

function arrayFromRange(min,max) {
    let newArray = [];
    for(i=min;i<=max;i++)
    newArray.push(i);
    return newArray;
}