//using loops on arrays and objects

let cities =["newyork","bremen","london","Istanbul","Mersin"];
/*for(let i=0;i<cities.length;i++){
    console.log(cities[i]);
}*/

// for-in method
// for(let i in cities){
//     console.log(`index: ${i} value: ${cities[i]}`);
//     /* 
//     for `` symbol: (for windows systems) altgr + , 
//     */
// }

//for each methods
cities.forEach(function(item){
    console.log(item);
})

let users=[
    {firstName:"dominic", lastName:"toronto"},
    {firstName:"ryan", lastName:"raynolds"},
    {firstName:"steve", lastName:"Carell"},
    {firstName:"hugh", lastName:"jackman"},
    {firstName:"Robert", lastName:"Downey"}
]

 for(let i=0; i<users.length; i++){
     console.log(users[i].firstName);
     console.log(users[i].lastName);
 }
 users.forEach(function(item){
     console.log(item);
 })

for(let k in users){
    console.log(`index: ${k} value: ${users[k].firstName}`);
}

//map: returns an array

let data = users.map(function(item){
    return item.firstName+" "+item.lastName
});
console.log(data);

data.forEach(function(r){
    console.log(r);
})

let numbers = [5,6,9,8,7,3,4,1,2];
let num = numbers.map(function(f){
    return f*f;
})
console.log(num)