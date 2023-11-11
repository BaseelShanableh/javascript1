'use strict';

function addToEnd(arr,number){
    arr.push(number);
    console.log(arr);
    return arr;
}

let arr = [1,2,3,4,5,6];
addToEnd(arr,55);

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/