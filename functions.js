//functions

function hello() {
  console.log("Hello world!");
}

hello();
// hello();
// hello();

function hi(name, age) {
  console.log(`İsim: ${name} yas: ${age}`);
}
hi("arif ışık", 40);

function ageCalculate(bhirtYear) {
  return 2022 - bhirtYear;
}
console.log(ageCalculate(1997));
let ageTony = ageCalculate(1978);
console.log(ageTony);

function driverLicence(bhirtYear, name) {
  let age = ageCalculate(bhirtYear);
  let licence = 18 - age;
  if (licence > 0) {
    console.log(
      `Dear ${name} you can take a driver licence after ${licence} years.`
    );
  } else {
    console.log(`Dear ${name} you can take a driver licence`);
  }
}
driverLicence(2008, "Tunahan");
