//divisible by 3 => Fizz
//divisible by 5 => Buzz
//divisible by both => FizzBuzz
//divisible by none => Display the number
//NaN => display 'Not a Number'

function fizzBuzz(num){
	if(num%3 === 0 && num%5 === 0)
		return 'FizzBuzz';
	else if (num%3 === 0)
		return 'Fizz';
	else if (num%5 === 0)
		return 'Buzz';
	else
		return num; 
}


let num= 'hello';


if (typeof num !== 'number' ) {
	console.log ('\nNot a Number');
}
	
else{
	output = fizzBuzz(num);
	console.log('\n'+output);
}
