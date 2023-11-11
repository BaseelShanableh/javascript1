'use strict';

var newArr = [];

// using for loop

// function evenNumberEvenIndex(arr){
//     newArr = []; // reset for other calls
//     // starting from i = 1; since 0 is neutral
//     for( let i = 1 ; i < arr.length ; i++){
//         if( arr[i] % 2 == 0 && i % 2 == 0)
//             newArr.push(arr[i]);
//     }
//     console.log(newArr);
//     return newArr;
// }

// using while loop

function evenNumberEvenIndex(arr){
    newArr = []; // reset for other calls
    let i = 1 // starting from 1 ; since 0 is neutral

    while( i < arr.length){
        if(arr[i] % 2 == 0 && i % 2 == 0)
            newArr.push(arr[i]);
        i++;
    }
    console.log(newArr);
    return newArr;
}

let nums = [5,2,2,1,8,66,55,77,34,9,55,1];
let nums2 = [1,2,3,11,44,23,92,82,13,30,55,3]; 
evenNumberEvenIndex(nums);
evenNumberEvenIndex(nums2);

/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/