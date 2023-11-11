'use strict';

function aveArray(arr){
    let sum = 0;
    for(let r = 0; r < arr.length; r++){
        sum+= arr[r];
    }
    console.log(sum/arr.length);
    return sum/arr.length;
}

let nums= [1,2,3,8,9];
let nums2= [1,2,3,8,9,77];

aveArray(nums);
aveArray(nums2);

/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/