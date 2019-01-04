let par = document.getElementById('test'),
    btn = document.getElementsByTagName('button'),
    p = document.getElementsByClassName('testPar'),
    allP = document.querySelectorAll('.testPar'),
    firstP = document.querySelector('.testPar'), // only first element
    circle = document.querySelectorAll('#circle'), // only first element
    heart = document.querySelectorAll('heart'), // only first element
    // box = document.querySelectorAll('#box'); // Nodelist
    box = document.getElementById('box'); // 
    
    box.style.backgroundColor = 'blue';
    btn[1].style.backgroundColor = 'green';
    btn[1].style.borderRadius = '50%';

    p[0].style.color = 'red';
    p[1].style.color = 'yellow';
    p[2].style.color = 'green';

    // for (let i=0; i < p.length; i++) {
    //   p[i].style.backgroundColor = 'gray';
    // }

    // allP.forEach((elem, i) => {
    //   elem.style.backgroundColor = 'green';
    // });

// console.log(p);

// let pArray = Array.from(p);
// console.log(pArray);

// pArray.forEach((elem)=>{
//   elem.style.backgroundColor = 'black';
// });

// Array().forEach.call(p, (elem)=>{
//     elem.style.backgroundColor = 'blue';
// });

// for (let elem in p) {
//   p[elem].style.backgroundColor = 'yellow';
// }

// for (let elem of p) {
//   elem.style.backgroundColor = 'blue';
// }


/// CREATE ELEMENT


let div = document.createElement('div');
let text = document.createTextNode('Text node text');

// div.classList.add('black'); // добавлен класс

// document.body.appendChild(div);

// par = document.getElementById('wrapper');
// par.appendChild(div);

// document.body.insertBefore(div, par); // вствить в нвчало
// document.body.removeChild(div); // удалить
// document.body.replaceChild(div, btn); // заменить

// console.log(par); 

// div.innerText = 'HEllo';
// div.innerHtml = '<h1>HEllo world</h1>';
div.textContent = 'World';