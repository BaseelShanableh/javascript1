'use strict';

var newArr = [];

// using for loop

// function evenIndexOddLength(arr){
//     newArr = []; // to empty the string for other calls
//     // starting for 1 since 0 is neutral
//     for(let i = 1 ; i < arr.length ; i++){
//         if(arr[i].length % 2 == 1 && i % 2 == 0)
//             newArr.push(arr[i]);
//     }
//     console.log(newArr);
//     return newArr;
// }

// using while loop

function evenIndexOddLength(arr){
    newArr = []; // to empty the string for other calls
    let i  = 1;
    while(i < arr.length){
        if(arr[i].length % 2 == 1 && i % 2 == 0)
            newArr.push(arr[i]);
        i++;
    }
    console.log(newArr);
    return newArr;
}

let strings = ["alex","mercer","madrasa","rashed2","emad","hala"];
let strings2 = ["odd11", "odd22","odd33","oddd","odd4","odd55"];

evenIndexOddLength(strings);
evenIndexOddLength(strings2);

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/