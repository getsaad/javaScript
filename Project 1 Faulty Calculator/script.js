let rndm = Math.random();
console.log(rndm);

let a = prompt("Enter first number : ");
let b = prompt("Enter operator : ");
let c = prompt("Enter Second number : ");

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}


if ( rndm > 0.1) {
    console.log(alert(`The result is : ${eval(`${a} ${b} ${c}`)}`));
}

else {
    b = obj[b]
    console.log(alert(`The faulty result is : ${eval(`${a} ${b} ${c}`)}`));
}