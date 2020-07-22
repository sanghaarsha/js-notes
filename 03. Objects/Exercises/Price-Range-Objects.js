let priceRanges = [
	{label : '$', tip : 'Inexpensive', minPrice : 1, maxPrice : 10},
	{label : '$$', tip : 'Mid-range', minPrice : 11, maxPrice : 25},
	{label : '$$$', tip : 'Expensive', minPrice : 26, maxPrice : 80}
];

console.log(priceRanges[0].label,priceRanges[0].tip,priceRanges[0].minPrice,priceRanges[0].maxPrice);
console.log(priceRanges[1].label,priceRanges[1].tip,priceRanges[1].minPrice,priceRanges[1].maxPrice);
console.log(priceRanges[2].label,priceRanges[2].tip,priceRanges[2].minPrice,priceRanges[2].maxPrice);