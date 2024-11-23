// function greetings(greet) {
//     console.log(greet + " Morning");
//     console.log(greet + " Noon");
//     console.log(greet + " After Noon");
//     console.log(greet + " Evenning");
//     console.log(greet + " Night");   
// }

// greetings("Good");

// function sum(a, b, c = 1) {
//     return a+b+c;
// }

// console.log("The summation of a, b & c is " + sum(2,3));



// Arrow Function

console.log("Key differences between Arrow function and normal function are : ");
let diff = {
    arrow1 : " : We can use it like a variable",
    normal1 : " : We can't it like arrow1",
}

for (const key in diff) {
    let element = diff[key];
    console.log(key, element);
}

console.log("\n");
console.log("Example : ");
const func1 = (x) => {
    console.log("I'm an arrow function", x);
}

func1(54)


const func2 = (y)=>
{
    console.log("this is for just practice and the number is : ", y);
}

func2(77);