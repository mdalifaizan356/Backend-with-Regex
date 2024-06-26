// User se 4 input lena hai, inka sum nikalna hai. Agar sum > 100 hota hai to ek function call
// karna hai, jisme 3 input lena hai aur unka average return karna hai. Agar returned average > 50
// hai to ek aur function call karke factorial nikalna hai aur check karna hai wo prime number hai
// ya nahi.

// var sum = (() => {
//     let num1=5, num2=10, num3=80, num4=40;
//     return num1+num2+num3+num4;
//   })();                                                   //IIFE

//   if(sum>100){
//     var avgVal = (arg1,arg2,arg3) => {
//         return arg1+arg2+arg3/3;
//       };
//     // console.log(avgVal(5,5,5));
//     if(avgVal(5,5,5)<50){
//         const factorial = (avgValue) => {
//             if (avgValue === 0 || avgValue === 1) {
//             return 1;
//             }
//             return avgValue * factorial(avgValue - 1);
//         }
//         console.log(factorial(avgVal));
//     }
//   }


var sum = (() => {
  let num1=5, num2=10, num3=80, num4=40;
  return num1+num2+num3+num4;
})();                                                   //IIFE

function avg(n1,n2,n3){
  return n1+n2+n3/3;
};

const factorial = (avgValue) => {
              if (avgValue === 0 || avgValue === 1) {
              return 1;
              }
              return avgValue * factorial(avgValue - 1);
          }
          console.log(factorial(avgVal));

if(sum>100){
  let avgVal=avg(50, 60, 70);
  if(avgVal>50){
    let factVal=factorial(avgVal);
  }
}