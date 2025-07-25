/* javascript is a dynamic type language which means you don't have 
to mention data type you just need to write let and any value.



*/
// stering
let name = "Ashu panchal";
console.log(name);
// let is the keywoed for variable decleration



// number
let age =26;                                          
console.log(age);
console.log("my age is " + age);
console.log("my age is " , age);



// float
let height = 5.9;
console.log(height);



// boolean
let isMarried = false;
console.log(isMarried);



// is js case senstive?
let a = 10;
let A = 20;
console.log(a, A);  //10 20
// js is a case senstive language



//  undefined
let x;
console.log(x);



// null
let y = null;
console.log(y);






// object data type
// let objectName = {key: value, key2: value2}

let person ={
    "name": "Ashu",
    "age": 26,
    "number": "12423xy",
    "address" : {
        "city" : "Delhi",
        "pincode" : 110001
    }
}
console.log(person);


let address ={
    "key": "string value",                                  //value is string
    "key": 1234,                                            //vaue is number
    "homeAddress": {"city": "panipat"},                     //value is object
    "officeAddress": {"city": "delhi"},                     //value is boject
}
console.log(address);
console.log(address.homeAddress.city);
// print city of officeAddress
console.log("my office city is " + address.officeAddress.city);






// Array

let myFriends =["Ashu panchal", "aleesha", "deepak", "pooja"];
console.log(myFriends);
console.log(myFriends [0]);
console.log(myFriends [2]);
console.log("my best friend is " + myFriends [1] + " & " + myFriends[3]);         // string concatenation
console.log(`my best frends are  ${myFriends[1]} and ${myFriends[3]}`);





// Date data type

let currentDate= new Date();
console.log(currentDate);
let myDOB =new Date("2005-07-15");                              // year-month-day format of Date
console.log(myDOB);          
console.log("dob year" + myDOB.getFullYear());                  //get year from date
console.log("dob month " + (myDOB.getMonth() + 1));             // added 1 because month is 0 indexed in js
console.log("dob day " + myDOB.getDay())                        // get dau frp, date


console.log("my expression" + 1 + 1);                           // here complier is taking it whole as string
console.log("my expression " + (1 + 1));                        // here firstly compiler add than concatinate





// Functions

 