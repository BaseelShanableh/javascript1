'use strict';

// using for loop

// function shorterInArray(arr){
//     let shortest = arr[0];
//     for(let k = 1 ; k < arr.length ; k++){
//         if(shortest > arr[k])
//             shortest = arr[k];
//     }
//     console.log(shortest);
//     return shortest;
// }

// using while loop

function shorterInArray(arr){
    let shortest = arr[0];
    let i = 1;
    while(i < arr.length){
        if(shortest > arr[i])
            shortest = arr[i];
        i++;
    }
    console.log(shortest);
    return shortest;
}

let strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
let strings2 = ["baseel","ahmad","ali"];

shorterInArray(strings);
shorterInArray(strings2);

/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/