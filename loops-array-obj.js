//using loops on arrays and objects

let cities =["newyork","bremen","london","Istanbul","Mersin"];
for(let i=0;i<cities.length;i++){
    console.log(cities[i]);
}

// for-in method
for(let i in cities){
    console.log(`index: ${i} value: ${cities[i]}`);
    /* 
    for `` symbol: (for windows systems) altgr + , 
    */
}