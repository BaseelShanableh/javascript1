'use strict';

var array = [0,5,7,9];
// goal => [1,3,4,6,8,9,10]
array.shift();
array.shift();
array.shift();
array.push(10);
array.unshift(1,3,4,6,8);

console.log(array);

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/