//array
let names = ["ali","veli", "selma","ayşe","eda","harun","selime","selim"];
console.log(names);
console.log(typeof names);

let years =[1990,1998,1955,1944,1997,1995,1968,1987];
console.log(years);
console.log(typeof years);

let mix= [ "selma",1990,null, undefined,["programming","jazz","play guitar","footbol"]];
console.log(mix);
console.log(typeof mix);

//get array item
console.log(names[7]);

//set array item
names[0]="tunahan";
names[8]="tony";
names[names.length]="mustapha";
console.log(names);

//add item

names.push("inci");//add last index
console.log(names);

names.unshift("kemal");//add first index
console.log(names);

//remove items
years.pop();//remove last index
console.log(years);

years.shift();//remove first index
console.log(years);


//indexOf
let index = names.indexOf("selim");
console.log("index: "+index);

//reverse
mix.reverse();
console.log(mix);


years.sort();
console.log(years);

names.sort();
console.log(names);

//concat

let data = names.concat(years);
console.log(data);

//splice

//names.splice(2,1,"adriana");
names.splice(2,0,"adriana");
console.log(names);