// Objects Literals

let data;
let user = {
    userName: "tunahantatli-33u",
    firstName : "tunahan",
    lastName : "tatli",
    age : 25,
    job : "full stack developer",
    school : "clarusway",
    hobbies : ["coddin","fishing","driving car"],
    address :{
        city: "Mersin",
        country: "Turkiye",
        phone: +905442559987
    }
}
data = user;
data = user.address;
data = user.hobbies;
data = user.hobbies.length;
data = user.address.city;
//try all data = 
console.log(data);
console.log(typeof user)