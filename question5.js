'use strict';

function lastOfArray(arr){
    let last = arr.length - 1;
    console.log(arr[last]);
    return arr[last];
}

let ar = [1,2,3,4,5,6,7,8,9];
let ar1 = [1,2,3,4,5,6,7,8];
let ar2 = [1,2,3,4,5,6,7];

lastOfArray(ar);
lastOfArray(ar1);
lastOfArray(ar2);

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
