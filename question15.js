'use strict';

function removeFromArray(arr,number){
    let index;
    for(let j = 0; j < arr.length; j++){
        if(number == arr[j])
            index = arr[j]-1;
    }
    arr.splice(index, 1);
    console.log(arr);
    return arr;
}

let arr = [1,2,3,4,5,6];
removeFromArray(arr,2);

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/