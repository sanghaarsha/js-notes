console.log("By using a third variable.");

let a=2;
let b=3;
let c;

console.log('a= ' + a);
console.log('b= ' + b+'\n');

c=a;
a=b;
b=c;

console.log('a= ' + a);
console.log('b= ' + b+'\n');

//Another way

console.log("Without using third variable.");

let x=3;
let y=2;

console.log('x= ' + x);
console.log('y= ' + y+'\n');

x=x-y;
y=y+x;
x=y-x;

console.log('x= ' + x);
console.log('y= ' + y+'\n');
