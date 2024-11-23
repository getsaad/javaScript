console.log("Loops concept is starting from here!");

// for loops

for (let i = 0; i < 5; i++) {
    console.log(i);;
    
}

let obj = {
    name : "Saad Ibn Bayazid",
    role : "Programmer",

}

for (const key in obj) {
    const element = obj[key];
    console.log(key, element);

}


for (const element of "Saad Ibn Bayazid") {
    console.log(element);
}


let i = 0;
// while(i < 5){
//     console.log(i);
//     i++;
// }

i = 100;
do{
    console.log(i);
    i++;
}while(i<5);

