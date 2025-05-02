//Arithmatic Operator: +, -, *, /

let a = 3;
let b = 5;

console.log("a + b = ", a+b);
console.log("a - b = ", a-b);
console.log("a * b = ", a*b);
console.log("a / b = ", a/b);

//Modulus --> %

console.log("a % b = ", a%b);

//Exponentiation --> **

console.log("a ** b = ", a**b);

//Unary Operator
//Increment --> ++

a++;
console.log("a = ", a);

//Decrement --> --

a--;
console.log("a = ", a);
console.log();



//Assignment Operators: =, +=, -=, *=, /=, %=, **= 

let x = 5;
let y = 6;

console.log(x += 5);
console.log(x -= 5);
console.log(x *= 5);
console.log(x /= 5);
console.log(x %= 5);
console.log(y **= 5);
console.log();



//Comparison Operator: ==, !=, ===(Equal to & Datatype), !==(Not equal to & Datatype)

let c = 5;
let d = 2;
let e = "5"; //String

console.log("5 == 2", c == d); //Return in Boolean
console.log("5 == 5", c == e); //true
console.log("5 != 2", c != d); 
console.log("5 === 5", c === e); //false
console.log("5 !== 2", c !== d); 


//Logical Operator: &&, ||, !(Logical Not) --> Return in Bool

let f = 6;
let g = 5;

let cond1 = f>g; //true
let cond2 = f==6; //true

console.log(cond1 && cond2);
console.log(cond1 || cond2);

//Logical Not --> Give Oppsite Result
console.log(!cond1);
console.log();








