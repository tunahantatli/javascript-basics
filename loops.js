//Loops

//while loop

let i=0;
/*
while(i<10){ //infinity loop
    console.log(i)
}
*/
while(i<10){
    console.log(i);
    i++;// i = i+ 1; , i+= 1;
}

let n = 15;
while(n>0){
    console.log(n);
    n--;
}
// break 
let k = 0;
while(k<10){
    console.log(k);
    if (k==6){
        break
    }
    k++;
}

//do while loop
let j = 0;
do{
    console.log(j);
    j++;
}while(i<10);

// for loop

for (let m=0; m<10; m++){
    console.log(m);
}
for(let t = 0; t<10; t++){
    if(t==3){
        console.log("the chosen number: "+t);
        continue
    }
    console.log(t);
}

let sum=0;
for( let z=1; z<10; i++){
    sum+=i;
}
console.log(sum);

let dot=1;
for(let x=1; x<10; x++){
    dot*=x;
}
console.log(dot);