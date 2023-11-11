'use strict';

var newArr = [];

function oddArray(arr){
    for(let k = 0 ; k < arr.length ; k++){
        if(arr[k] % 2 == 1)
            newArr.push(arr[k]);
    }
    console.log(newArr);
    return newArr;
}

let arr = [1,2,3,4,5,6,7,8,9,10];
oddArray(arr);

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/