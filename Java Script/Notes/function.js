function myfunc(...nums){
    for (const n of nums){
        console.log(n);
    }
    for (const n in nums){
        console.log(nums[n]);
    }
}
myfunc(1,2,3,4,5,6,7,8,9);


//mutable and immutable

//mutable (Parivartaniye): changes not in original
//immutable (Aparivartaniye): changes in original



