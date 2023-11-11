'use strict';

function repeatChar(arr,char){
    let counter = 0;
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] == char)
            counter+= 1;
    }
    console.log(counter);
    return counter;
}

let string= "alex mercer madrasa rashed2 emad hala";
repeatChar(string,"a");
repeatChar(string,"z");

/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/