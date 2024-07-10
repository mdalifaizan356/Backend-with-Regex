// Executing Multiple Callback Functions:
// Implement a function that accepts multiple callback functions and executes them in sequence.
// Explain how the rest operator gathers the callback functions and how to iterate over them to
// execute each one.

function calculator(a, b, c , ...callBackfxn){
    array.forEach(callBackfxn => {
        console.log(callBackfxn);
        });
}

const add = (a, b, c=0)=> {
    return a + b + c;
}
const sub = (a, b,c=0)=> {
    return a - b -c;
}

const product = (a, b, c=1)=> {
    return a * b *c;
}

const div = (a, b, c=0)=> {
    return a / b;
}
let num1=7;
let num2=6;
let num3;
console.log("Addition is: ",calculator(num1, num2, num3, add, sub, product, div));
// console.log("Subtraction is: ",calculator(num1, num2, num3, sub));
// console.log("Multiplication is: ",calculator(num1, num2, num3, product));
// console.log("Division is: ",calculator(num1, num2, num3, div));