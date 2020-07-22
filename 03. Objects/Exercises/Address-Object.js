// Create address object

// Which as :
// street
// city
// zipcode

// Create a function:
// showAddress(address)
// Takes address object and shows it's all values


const address = {
	street : 'Begnas street',
	city : 'Lalitpur',
	zipcode : 110200
};

function showAddress(address){
	for(let key in address){
		console.log(key, address[key]);
	}
}

showAddress(address);