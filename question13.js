'use strict';

function sumArray(arr){
    let sum = 0;
    for(let j = 0; j < arr.length ; j++){
        sum+= arr[j];
    }
    console.log(sum);
    return sum;
}

let arr = [1,2,3,4,5,6];
sumArray(arr);

/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/