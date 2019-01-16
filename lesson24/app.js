// Интерполяция
let name ='Sara';
// console.log(`Привет ${name}`);


// let и const
function makeArray() {
  var items = [];
  for (var i = 0; i < 10;  i++) {
    var item = function () {
      console.log(i);
    };
    items.push(item);
  }
  return items;
}

// var i создается одна и на весь цикл
// let i создается на каждой итерации цикла

// let arr = makeArray();
// arr[1]();
// arr[3]();
// arr[7]();


// Стрелочные ф-ции
//1. У стрелочных ф-йий отсуствует свой контекст вызова. Она берет контекст у своего родителя
//2. Анономные
//3. Нельзя использовать рекурсивно

// let fun = () => {  // Func tion expression
//   console.log(this);
// };
// fun(); // контекст вызова Window

// let obj = {
//   number : 5,

//   sayNumber : function () {
//     let say = () => {
//       console.log(this);   // контекст sayNumber;
//     };
//     say();
//   }
// };

// obj.sayNumber();


// Классы
// class Rectangle {
//   constructor(height, width = 20){
//     this.width = width;
//     this.height = height;
//   }

//   calcArea() {
//     return this.width * this.height;
//   }
// }

// let square = new Rectangle(10);
//  console.log(square.calcArea());


 // Spred operator. Оператор разворачиват массив

let video = ['video', 'youtube'];
let blogs= ['blogs', 'Lj'];
let internet = [...video, ...blogs, 'vk', 'twitter'];
console.log(internet);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(a + b + c);
}

let numbers = [2,5,7];
log(...numbers);