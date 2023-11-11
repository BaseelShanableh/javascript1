'use strict';

var array2 = [5,9,-7,3.5];
array2.push(3); // [5,9,-7,3.5,3] adds as last element since push works as a stack, last in first out (LIFO)
array2.shift(); // [9,-7,3.5,3] removes first element in the array, works as queue, first in first out (FIFO)
array2.pop(); // [9,-7,3.5] removes last element in the array since pop works as a stack, last in first out (LIFO)
array2.unshift(33); //[33,9,-7,3.5], adds an element(s) at the beginning of an array
console.log(array2);


/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
