'use strict';

// let user = {
//   name: 'John',
//   age: 30,
//   status : 'admin'
// }


// // console.log(user["age"]);
// console.log(user.age);

// let arr = [
//   'plum,png',
//   'apple.jpeg',
//   'orange.gif'
// ];

// console.log(arr[1]);



let options = {
  width : 1024,
  height: 768,
  name : 'test'
};

console.log(options.name, options['height']);

options.status = 'Admin';
options.colors = {
  border : 'black',
  bg : 'green'
}

// delete options.status;

// console.log(options.status);

// console.log(options.colors.border);
// console.log(options);

// for (let key in options) {
//   console.log(`key: ${key}, value ${options[key]}`);
// }

console.log(Object.keys(options).length);
