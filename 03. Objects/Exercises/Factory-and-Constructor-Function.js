//Using Factory Function

function address(street,city,zipcode){
	return {
		street: street,
		city: city,
		zipcode :zipcode
	};
}


let newAddress = address('Gunjagaun','Baglung',1356);
console.log(newAddress);


//Using Constructor function

function address(street,city,zipcode){
	this.street = street;
	this.city = city;
	this.zipcode = zipcode;
}


let myAddress = new address('Madi','Chitwan',1909);
console.log(myAddress);