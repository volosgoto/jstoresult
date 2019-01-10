// ES6 


// let, const
/*
 1. Переменные созданные при помощи let и const, видны в блоке кода ограниченным {}, т.е. имеют область видимости.
 2. Когда браузер читает код, то переменные создаются, когда до них доходит очередь, в отличии от var, которая создаюется изначально.
 3. При использовании let, const в цикле, для каждой итерации создается своя переменная!!!
*/
// function makeArray(){
//   var items = [];
//     for (let i = 0; i < 10; i++) { // let or var
//       var item = function() {
//        console.log(i);
//       };
//       items.push(item);
//     }
//     return items;
// }
// var arr = makeArray();
// arr[1](); // var 10 let 1
// arr[4](); // var 10 let 4 
// arr[7](); // var 10 let 7


// ---------------------------------------------------------------------------------------
// Интерполяция  `${variable}`
// let name = 'John';
// let age =  30;
// let email = 'mail@mail.com';
// console.log(`Зашел пользователь: ${name}, возраст: ${age}, email: `);


// ---------------------------------------------------------------------------------------
// Стрелочные ф-ции.
/* 
  1. Стрелочные ф-ции анонимны. Но их можно присвоить в переменную.
  2. Не сможем управлять обработчиками событий, т.к. нет названия, но можно использовать в качестве call-back.
  3. Не сможем запускать эту ф-цию внутри себя (рекурсивно)
  4. Стелочные ф-ции не имеют своего контекста вызова. Если внутри стрелочной ф-ции вызвать this, то он берет this у своего родителя!!!
*/

// let fun = () => {
//   console.log(this);
// };
// fun(); // Контекст Window

// let obj = {
//   number: 5,
//   sayHello : function () {
//     console.log(this + ' sayHello ' + 'Hello');
//     let say = ()=>{  // Родителем стрелочной ф-ции является sayHello(). У sayHello() контекст Object obj, следовательно контекст у стрелочной ф-ции тоже Object obj.
//       console.log(this + ' say ');
//     };
//     say();
//   }
// };
// obj.sayHello();

// let btn = document.querySelector('button');
// btn.addEventListener('click', function () {
//   let show =() =>{
//     console.log(this);
//   };
//   show();
// });


// ---------------------------------------------------------------------------
// Параметры по умолчанию

// function calcOrDouble(number, basis = 2) {
//   // basis = basis  || 2;
//   console.log(basis * number);
// }
// calcOrDouble(3, 4); // 12
// calcOrDouble(3); // 6
// calcOrDouble(5); // 10


// --------------------------------------------------------------------------
// Классы
// class Rectangle{
//   constructor(height, width = 20){
//     this.height = height;
//     this.width = width;
//   }
//   calcArea(){
//     return this.height * this.width;
//   }
// }
// let square = new Rectangle(10,10); // 100
// square = new Rectangle(10); // 200
// console.log(square.calcArea());
//----------------------------------------------------------------------


// Спред оператор
/* 
 ... - Оператор разворота, разворачвает массив и превращиет его в набор данных.
*/
// let video = ['youtube', 'vimeo', 'coub'];
// let blogs = ['wordpress', 'lifejournal', 'blogger'];
// let internet = [video, blogs, 'vk', 'fb', 'twitter'];
// internet = [...video, ...blogs, 'vk', 'fb', 'twitter']; //  единый массив

// function myLog(a, b, c){
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// let num = [2, 3, 4];
// myLog(num); // ошибка
// myLog(...num); // аботает с оператором ...

 

  
  

