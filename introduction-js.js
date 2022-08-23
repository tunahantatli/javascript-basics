alert("Wellcome to site!")
//variables
//Primitive Types
//a- String

let firstName = "Ricardo";
console.log(typeof firstName)

//b- number
let age = 25;
console.log(typeof age)

//c- boolean

let use_credi= false;
console.log (typeof use_credi)

//d -undefined
let phone;
console.log(typeof phone)


//Reference Types : Objects

//a- Array
let list = ["mick", "sebastian", "max", "lando","carlos"];
console.log(typeof list)

//b- Object Literals
let adress = {
    street: "yapinti",
    city: "Mut",
    provience:"Mersin",
    country:"Turkiye"
}
console.log(typeof adress)

//c-function
var calculate = function(){
    return 0;
}
console.log(typeof calculate)
//
//
//



//operators
let data;
const a=20;
const b=10;
const c= 5;
let d=3;
//arithmetic operators
data = a+b;
data = a*b;
data = a-b;
data = a/b;
data = d++;//or
data = ++d;
data = d--;//or
data = --d;
data = a%b;

console.log(data);
console.log(typeof data)

//assignment operators
data = a;
data +=a; //data = data + a;
data -=a; //data = data - a;
data *=a; //data = data * a;
data /=a; //data = data / a;
data %=a; // data = data %a;

//comparison operators
data = a==b; // boolean result true or false
data = b==c;
data = 5==="5";// if use === compares data types as well
data = a!=b; // a not equal b, result is true
data = a<b;
data = a>b;
data = 5>= 5;
data = a<=b;

//logical operators
//&& and
data = (a>c) && (a>b)
// || (or)
data = (b>a) || (b>c)
// ! (not)
data = !(a>b)//result false
data = !(a<b)//result true

//
//
//

//date object
let time = new Date();
let birthday = new Date(1997,5,24)


//set methods
time.setDate(25)
time.setFullYear(1997)
time.setMinutes(17)

//Get methods
console.log(time.getMonth());
console.log(time.getDate());
console.log(time.getFullYear());
console.log(time.getDay());
console.log(time.getHours());
console.log(time.getMinutes());
console.log(time.getSeconds());
console.log(time.getMilliseconds());


//console.log(time.getFullYear()-birthday.getFullYear())

console.log(time);
console.log(typeof time);

//numbers
let data1;

// data1 = Number("5");
// data1 = parseInt("5");
// data1 = parseFloat("5.5");

// data1 = parseInt("5c"); // it's ok. no problem
// data1 = parseInt("c5"); // not a number 
// //use isNaN
// data1 = isNaN("c5"); // true
// data1 = isNaN("5"); // false

data1 = Math.PI;
data1 = Math.round(3.5);
data1 = Math.ceil(3.2); //up
data1 = Math.floor(8.4); //down
data1 = Math.pow(3,2); // 3^2=9
data1 = Math.sqrt(81); //sqrt 
data1 = Math.abs(-50);
data1 = Math.min(1,3,5,6,9,87,99,856,354,9997);
data1 = Math.max(1,3,5,6,9,87,99,856,354,9997);
data1 = Math.floor(Math.random()*100+1);


console.log(data1);
console.log(typeof data1);