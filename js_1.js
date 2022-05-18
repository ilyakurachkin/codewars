// Завершите функцию, которая принимает два целых числа
//  ( a, b, где a < b) и верните массив всех целых чисел между входными параметрами, включая их.
"use strict";
function between(a, b) {
    let between = [];
    for (let i = a; i <= b; i++) between.push(i);
   
    return between;
  }