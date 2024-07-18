//28 june 3
// Returning Earliest Date:
// Create a function that takes multiple date objects and returns the earliest date.
// Explain how the rest operator gathers the date objects and how to use Math.min with
// Date.getTime to find the earliest date.


// function EarliestDate(...Data){
//     newArray=[].concat(...Data);
//     // return newArray;
//     // return newArray.join();
//     return newArray.flat();
// }

// const date1 = new Date('2024-01-01');
// const date2 = new Date('2023-01-01');
// const date3 = new Date('2025-01-01');
// const earliestDate = EarliestDate(date1, date2, date3);

/*
Unique Elements from Multiple Arrays:
Implement a function that takes multiple arrays and returns an array of their unique
elements. Explain how the rest operator collects the arrays and how to use a Set to filter
unique elements.
*/

// function singleArray(...Data){
//     newArray=[].concat(...Data);
//     // return newArray;
//     // return newArray.join();
//     return newArray.flat();
// }

// console.log(singleArray([1,2,3], [4,5, [6]], [7,8,9]));


/*
Combining Multiple Rest Parameters:
Create a function that takes multiple rest parameters and demonstrates how they can be used
together. Explain the rules and limitations of using multiple rest parameters.
*/

// const sum = (...numbers)=>{
//     let add = 0;
//     for (let number of numbers) {
//         add= add + number;
//     }
//     return add;
// }
// console.log(sum(2,2));


/*
Using Rest with Default Parameters:
Write a function that uses default parameters along with the rest operator. Explain how
default parameters are applied before the rest operator collects the remaining arguments.
*/

/*
Object Destructuring with Rest:
Implement a function that accepts an object and destructures it, using the rest operator to
gather the remaining properties. Explain how object destructuring works with the rest
operator to separate specific properties from the rest.
*/

//######################################################################################################################

// 8july

//Panding
//9 Find all documents where the user has the skill "Java" but not "Python".
// const query= Data.filter(data=>data.skills=="Java" && data.skills!=="Python");
// console.log(query);
// const query= Data.find(data=>data.skills=="Java" || data.skills!="Python");
// console.log(query);

// const Data = require("../JSON Files/userdata.json");
// // console.log(Data);

// //Retrieve all documents where the user's last name is "Sharma" and the role is "customer".
// const query= Data.filter(data=>data.skills=="Java" && data.skills!=="Python");
// console.log(query);
//######################################################################################################################

//1 june


// const Data = require("../JSON Files/userdata.json");
    // console.log(Data);


const myArray= [1,2,3,4,5,6,7,8,9];

const newArray = myArray.filter(evenNumber=>evenNumber.myArray%2===0);
console.log(newArray);


