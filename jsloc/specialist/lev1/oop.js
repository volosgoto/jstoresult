"use strict";

//функця конструктор
// принято начинать с большой буквы
// function Rectangle(w, h) {
//     this.width = w;
//     this.height = h;
//     this.color = 'white';
//
//     // this.area = function () {
//     // return this.width * this.height;
//     // }
//
// }
//
//
// // Прототип объета
// // Rectangle.prototype.toString = function () {
// //     return 'Я промоугольник';
// // }
//
//     Rectangle.prototype.area = function () {
//         return this.width * this.height;
//     }
//
//
// // Создание объекта
// let rec1 = new Rectangle(3, 2);
//
//
// // Вызов контсруктора
// let rec2 = new rec1.constructor(200, 400);
//alert(rec2.constructor);


// alert (rec1.toString());
// alert (rec2.toString());
// alert(rec1.area());


// Вызов конструктора
// alert(rec2.constructor);  // new Rectangle()
// let str = 10;
// alert(str.constructor);


// Проверка на тип
// rec2 instanceof Array
// alert(rec2 instanceof Array)
// alert(rec2 instanceof Object)
//////////////////////////////////////////////////////////////////


// Наследование
// Вызови объект Rectangle в контексте текущего объекта (объекта Square)
//
// function Square(side) {
//     Rectangle.call(this, side, side);
// }
// Square.prototype = Rectangle.prototype;
//
// let sq = new Square(10);
// // alert (sq.width);  // 10
// alert (sq.area()); // 100



///////////////// В ES6 ///////////////////
class Rectangle {
    constructor(w, h) {
        this.width = w
        this.height = h,
            this.color = 'white'
    }
    area() {
        return this.height * this.width;
    }
    toString() {
        return 'Я прямоугольник';
    }
}

class Square extends Rectangle {
    constructor(side) {
        // Вызов конструктора родмтельского класса
        super(side, side);
    }
    toString() {
        return 'Я квадрат';
        // return super.toString();
    }
}

class Circle {
    constructor() {
        this.radius = 10;
    }
}


let rec1 = new Rectangle(2, 10);
let sq1 = new Square(10);
let cr = new Circle;

// alert(sq1.area());
// alert(sq1.toString());
alert(cr.radius);
