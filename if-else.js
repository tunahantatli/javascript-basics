//if-else 

const firstName = "Nathasha";
const surName = "Romanov";
const userName = "romanovNat";
const age = 29;
const isAvanger = true;
const job = "Agent";
const school= "university";

if (userName == "romanovNat"){
    console.log("Hello "+firstName);
}else{
    console.log("User not found!")
}
if(age === 29){
    console.log("your age: 29")
}

if(isAvanger){
    console.log("you are "+job+" at Shield");
}else{
    console.log("wich school?")
}

if(age>=18){
    if(school== "university"){
        console.log("you can take driver licence.")
    }
    else{
        console.log("insufficient education level");
    }
}else{
    console.log("you are younger than 18!");
}

//undefined
let id= 2355444;
if(typeof id != "undefined"){
    console.log("id: "+id);
}else{
    console.log("No id!")
}
