'use strict';

let arr = [10, 0, 20, 31];
let max = Math.max.apply(Math, arr);

//console.log(max);

let str = 'abcdef';


// console.log([...str]); // array

function reverse(str) {
  // let rev = str.split('').reverse().join('');
  let rev = [...str].reverse().join('');

  return rev;
};

console.log(reverse(str));