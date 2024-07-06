// User se 4 input lena hai, inka product nikalna hai. Agar product > 1000 hai to ek function call
// karna hai, jisme product aur ek user input ko divide karna hai aur result return karna hai. Agar
// result fraction hai to uska ceiling value return karna hai.

// let n1=10, n2=20, n3=30, n4=40;
// let product = n1*n2*n3*n4;
// console.log(product);

// const division=(product, num)=>{
//   return (product/num);
// }

// if(product>1000){
//   console.log(division(product, 3));
// }



// User se 3 input lena hai, inka average nikalna hai. Agar average < 25 hai to ek function call
// karna hai aur check karna hai ki wo prime number hai ya nahi. Agar prime hai to uska factorial
// return karna hai.

let n1=5, n2=5, n3=5;
let avg = (n1+n2+n3)/3;

const PrimeNumber = (avg)=>{
  let flag=0;
  if (avg == 0 || avg == 1){
    flag = 1;
  }

  for(let i=2; i<=avg/2; i++){
    if (avg % i == 0) {
      flag = 1;
      break;
    }
  }
  console.log(flag);
}

if(avg<25){
  console.log(PrimeNumber(avg));
}












