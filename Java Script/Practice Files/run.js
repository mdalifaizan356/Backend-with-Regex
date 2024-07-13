// Concatenating and Flattening Arrays:
// Write a function that takes multiple arrays as arguments and returns a single flattened
// array. Explain how the rest operator collects the arrays and how to use Array.prototype.flat
// to flatten the result.

function singleArray(...Data){
    newArray=[].concat(...Data);
    return newArray;
    // return newArray.join();
}

console.log(singleArray([1,2,3], [4,5,6], [7,8,9]));