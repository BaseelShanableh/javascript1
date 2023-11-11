'use strict';

var newArr = [];

// function powerElementIndex(arr){
//     newArr = []; // to reset for other calls
//     for(let i = 0 ; i < arr.length ; i++){
//         newArr.push(Math.pow(arr[i],i));
//     }
//     console.log(newArr);
//     return newArr;
// }

function powerElementIndex(arr){
    newArr = []; // to reset for other calls
    let i = 0;
    while( i < arr.length){
        newArr.push(Math.pow(arr[i],i));
        i++;
    }
    console.log(newArr);
    return newArr;
}

let nums = [44, 5, 4, 3, 2, 10];
let nums1 = [30, 8, 2, 4, 5, 10];

powerElementIndex(nums);
powerElementIndex(nums1);

/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/