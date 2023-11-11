'use strict';

function minInArray(arr){
    let min = arr[0];
    for(let k = 1; k < arr.length; k++){
        if(min > arr[k])
            min = arr[k];
    }
    console.log(min);
    return min;
}

let arr = [12,44,5,77,88,97,1,2,3,4,5,6];
minInArray(arr);

/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/