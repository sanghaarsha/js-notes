const numbers =  filter(-1,5) ;
console.log(numbers);

function filter (min,max){
    let filteredArray = []
    for(i=min;i<=max;i++){
        filteredArray.push(i);
    }
    return filteredArray;
}