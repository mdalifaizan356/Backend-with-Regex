/*
Q1.
User se 5 input lena hai, inka maximum nikalna hai. Agar maximum > 90 hota hai to ek function
call karna hai, jisme maximum aur ek user input ko subtract karna hai aur result return karna
hai. Agar result positive hai to us value ka cube return karna hai.  agar result -ve hai to fir
uska sqaure nikalna hai aur agar result 0 ata hai to fir apko console log karna hai: "aur nahi
ho raha hai merese".

Q2.
User se 3 input lena hai, inka average nikalna hai. Agar average > 40 hai to ek function call 
karna hai, jisme 2 input lena hai aur unka product return karna hai. Agar product negative hai
to absolute value return karna ha  aur uske baad uska reverse nikalna. agar product positive hai
to fir check karna hai ki product prime number hai ya nahi hai.

*/

//Solution 1
    // var num1=5, num2=10, num3=6, num4=7, num5=110;
    // var maxValue = Math.max(num1, num2, num3, num4, num5);
    // console.log(maxValue);

    // const miningValue=(maxValue, num1)=>{
    //     let result= maxValue - num1;
    //     if(result>0){
    //         return result*result;
    //     }
    //     else if(result<0){
    //         return result*result*result;
    //     }
    //     else{
    //         return ("Or nahi ho rha mere se");
    //     }
    // };

    // if(maxValue>90){
    //     console.log(miningValue(maxValue, num1));
    // }

//solution 2
    var num1=60, num2=30, num3=90;
    var avgValue =(num1+num2+num3)/3;
    console.log(avgValue);

    const miningValue=(num1, num2)=>{
        let product = num1*num2;
        if(product<0){
            return (Math.abs(product))
        }
        else{
            console.log("Isse aage mujhse nuhi ho pa rha")

        }
    };

    if(avgValue>40){
        console.log(miningValue(num1, num2));
    }


//Note: Sir givin time pr 2nd qeustion ka output nahi nikal paya he. me isko 6 baje k baad karne ki koshish jari rakhunga.
