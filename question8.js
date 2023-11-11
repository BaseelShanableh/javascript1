'use strict';

function middleOfArray(arr){
    if(arr.length % 2 == 1){
        console.log(arr[Math.floor(arr.length/2)]);
        return arr[Math.floor(arr.length/2)];
    }
    console.log(arr[arr.length/2] + ' and ' + arr[(arr.length/2)-1]);
}

middleOfArray([1,4,5]);
middleOfArray(["t","u","g","x"]);

/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/