let limit = 5;

function checkMultiple(limit){
    let totalSum = 0;
    for (i=1;i<=limit;i++){
        if (i%3 == 0 || i%5 == 0) {
            totalSum = totalSum + i;
        }
    }
    return totalSum;
} 

console.log(checkMultiple(limit));