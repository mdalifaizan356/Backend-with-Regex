// User se 3 input lena hai, inka sum nikalna hai. Agar sum 0 hota hai to ek function call karna
// hai aur check karna hai ki wo perfect square hai ya nahi. Agar perfect square hai to uska square
// root nikalna hai aur result return karna hai.

let n1=0, n2=0, n3=0
let sum =n1+n2+n3;
console.log(sum);

const perfectSquare=(sum)=>{
    let sqrt = Math.sqrt(sum);
    return (sqrt % 1 === 0);
  }


if(sum===0){
  if(perfectSquare(sum=true)){
    console.log(Math.sqrt(sum));

  };
}