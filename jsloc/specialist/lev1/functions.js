// alert('hello');
"use strict";

// Function declaration хойстица
// function foo1() { alert ('hello')}
// // Function expression не хойстица
// var foo2 = function() { alert ('hello')};
//
//
// function  sayHello(name='Guest') {
//     name = name || 'Guest';
//     alert('Say Hello' + ' ' + name);
// }
//
// function areaOfDisk(r = 3){
//    return Math.PI * Math.pow(r, 2);
// }
//
// function areaOfRing(outer, inner){
//     // var res =  areaOfDisk(outer) - areaOfDisk(inner);
//     // return res;
//     return areaOfDisk(outer) - areaOfDisk(inner);
// }
//
// function power(number, power) {
//     for(var i = power; i > 1; i--){
//          number *= number;
//     }
//     return number;
// }
//
// let x = 5;
// alert(x );
//
//
// // alert(power(4, 2));
// // alert(areaOfRing(5, 3));
//
// function foo(a, b) {
//
// }
//
// let obj = {};
// let arr = [2,4,5];
// let min = Math.min.apply(Math, arr);
// alert(min);
//
// //foo.call(obj, 20, 30);
// foo.apply(obj, [20,30]);

//
// function sayHi() {
//     alert( "Привет" );
// }
// document.write( sayHi ); // выведет код функции


//
// function sayHi() {
//     alert( "Привет" );
// }
// var func = sayHi;
// alert (func === sayHi);

// sayHi = null;
// sayHi();


//
// function sayHi() {
//    return "Привет";
// }
// var func = sayHi;

// sayHi.call(sayHi, function () {
//     return (2+3);
// });


// Оператор групирования
// (2+2, 5+5); // Из круглых скобок возвращается всегда последнее значение

// (function () {})() // Рзбирает ф-цию и запускает

// (function () {})
// ()

// var s = 100;