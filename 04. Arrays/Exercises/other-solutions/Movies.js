const movies = [
	{title : 'a', year : 2018, rating : 4.5},
	{title : 'b', year : 2017, rating : 4.7},
	{title : 'c', year : 2018, rating : 3},
	{title : 'd', year : 2019, rating : 4.6},
];

let newArray = [];

for(key of movies){
	if(key.year===2018)
		newArray.push(key)

		newArray.sort(function (firstArg, secondArg) {
   		if (firstArg.rating > secondArg.rating) return -1;
    	else if (firstArg.rating < secondArg.rating) return 1;
    	else return 0;
	});
}
console.log(newArray)