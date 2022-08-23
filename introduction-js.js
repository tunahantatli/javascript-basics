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