// User se 3 input lena hai, unka sum nikalna hai. Agar sum > 80 hai to ek function call karna hai,
// jisme 2 input lena hai aur unka division result return karna hai. Agar result integer hai to us
// integer ka reverse return karna hai.

let n1=20, n2=40, n3=50;
let sum = n1+n2+n3;

const division = (a1, a2)=>{
  return a1/a2;

}



if(sum>80){
  console.log(division(4,2));
}