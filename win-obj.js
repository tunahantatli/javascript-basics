//window object

console.log(window)


//alert method
/*
alert("wellcome");
*/

//promt method

var data = prompt("enter your name")

//confirm method 
data2 = confirm("Are sure exit?")

if(data2){
    console.log("Exit done")
}else{
    console.log("exit not done")
}
console.log(data2)


//location

//data3= window.location;
data3= window.location.href;
data3= window.location.hostname;

console.log(data3)