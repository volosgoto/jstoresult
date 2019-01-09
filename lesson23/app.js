// Context

// Функция внутри функции контект вызова Window
// Режиме 'use strict' контекст вызова функции не Window, а undefined

// // 1) просто вызов ф-ции;
// function showThis(a, b){
//   console.log('showThis: ', this);
//   function sum() {
//     console.log('sum: ', this);
//     // return this.a + this.b;
//     return a + b;
//   }
//   console.log( sum () );
// }
// showThis(2,4);


// 2) Метод объекта - this = текущий объект
// let obj = {
//   a: 20,
//   b: 15,
//   sum: function () {
//     console.log(this);
//     function shout() {
//       console.log(this);
//     }
//     shout(); // Потерян контекст, вызвана не как метод объекта, а просто как функция. Значит ее вызывает Window!!!
//   }
// };
// console.log(obj.sum());


// 3) Конструктор (new) - this = Новый объект
// class User {
//   constructor(name, id){
//     this.name = name;
//     this.id = id;
//     this.human = true;
//   }
//   hello () {
//     console.log('Hello ' + this.name);
//   }
//   exit(){
//     return 'Exit: ' + this.name + ' ушел ';
//   }
// }
// let ivan = new User('Ivan', 20); // this = ivan
// let sam = new User('Sam', 20); // this = sam


// 4) Ручное присванивание this любой функции. Указание конкретного контекста - call(), apply(), bind()
// let user = {
//   name : 'John'
// };

// function sayName(surname){
//   console.log(this);
//   console.log(this.name + ' ' + surname);
// }
// // sayName(); // Window
// console.log(sayName.call(user, 'Smith')); // Параметры в виде строки
// console.log(sayName.apply(user, ['Snow'])); // Параметры в виде массива

// Function.call();
// Function.apply();
// Function.bind();



// 5) bind создает новую ф-цию связанную с определенным контекстом
// function count(number){  // Если вызвать  count(3), то будет контекст Window
//   return this * number;
// }
// let double = count.bind(2);
// console.log(double(3));
// console.log(double(5));


// 6) Контекст вызова при обращении к DOM
let btn = document.querySelector('button');
btn.addEventListener('click', function () {
  console.log(this);  //Срабатывает контект элемента
  this.style.backgroundColor = 'green';

  function showThis(){
    console.log(this);
  };
  showThis();  // Контекст Window;
});



