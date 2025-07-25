// a functions is a block of code designed to perform a particular task
//  functions payfee(payment) --> pay fee is a functions
//  fuctopm os a keyword
function greet() {
    console.log("Hello, my name is Ashu");
    console.log("i am learning javascript fuctions.");
    // block end here
}

// function call 0> write name of fuction (greet) with parentheses()
greet();

// gunction with parameters

function greetWithName(name){
    //name is a parameter
    console.log("Hello, my name is " + name);
}
greetWithName("Ashu");



// fuctions with multiple parameters
function greetWithFullName(firstName, lastName){
    console.log("hello, my full name is " + firstName + " " + lastName);
    console.log(`Hello, my full name is ${firstName} ${lastName}`);
}

// fuction with return value
function addNumbers(a, b){
    return a+b;
}

let x=addNumbers(10, 20);
console.log(x)



// sub fucntion
function subNumbers(a, b){
    return a-b;
}

let result = subNumbers(10, 20);
console.log("The sub is : " + result);

