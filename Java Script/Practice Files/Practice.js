// Return Value: map aur filter dono new arrays return karte hain, jabki find ek single element return karta hai.
// Functionality: map transforms array ke har element ko, filter specific elements ko select karta hai, aur find pehla matching element ko retrieve karta hai.
// Use Case: map transformations ke liye use hota hai, filter selection ke liye, aur find ek specific element ko retrieve karne ke liye.


const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]