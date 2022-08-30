//Scope

// 1-Global Scope
//global scope
var data1 = 5;
let data2 = 10;
const data3 = 17;

// 2-Function Scope
function func() {
  var data1 = 30;
  let data2 = 40;
  const data3 = 57;

  console.log(data1, data2, data3);
}
func();

// global scope
console.log(data1, data2, data3);

// 3-Block Scope

if (true) {
  var a = 10;
  let b = 15;
  const c = 27;
}
console.log(a);
console.log(b);
console.log(c);
/*
result from here;
the variables we create with 
"let" or "const" structures remanin in the block!
*/
