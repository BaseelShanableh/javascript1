'use strict';

function arrayExceptLast(arr){
    arr.pop();
    console.log(arr);
    return arr;
}

let arr = [1,2,3,4,5,6];
arrayExceptLast(arr);

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/