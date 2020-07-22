//Constructor function

function address(street,city,zipcode){
	this.street = street;
	this.city = city;
	this.zipcode = zipcode;
}


let address1 = new address('a','b','c');
let address2 = new address('a','b','c');
let address3 = address1;


console.log(areEqual(address1,address2));
console.log(areSame(address1,address2));
console.log(areSame(address1,address3));


function areEqual(address1,address2){
	return address1.street === address2.street && address1.city === address2.city && address1.zipcode === address2.zipcode;
}

function areSame(address1,address2){
	if (address1 === address2) {
		return 'same';
	}
	else return 'not same';
}

