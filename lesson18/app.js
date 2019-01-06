// let btn = document.getElementsByTagName('button');
let btn = document.querySelectorAll('button');
let wrapper = document.querySelector('.wrapper');
let link = document.querySelector('a');

// console.log(btn);

// btn[0].onclick = function() {
//   alert('Hello');
// };

// btn[0].addEventListener('click', () => {
//   alert('Add addEventListener');
// });

// btn[0].addEventListener('click', myClick);

// function myClick() {
//   alert('More Add addEventListener');
// }


// btn[0].addEventListener('mouseenter', (event) => {
//   console.log(event);
//   console.log('Вы навели на кнопку.' + 'Произошло событие: ' + event.type + ' на элементе ' + event.target);
//   let target = event.target;
//   target.style.display = 'none';
// });

// btn[0].addEventListener('click', (event) => {
//   console.log('Вы навели на кнопку.' + 'Произошло событие: ' + event.type + ' на элементе ' + event.target);
// });

// wrapper.addEventListener('click', (event) => {
//   console.log('Wrapper');
// });

// link.addEventListener('click', (e) => {
//   e.preventDefault();
// });

btn.forEach((item) => {
  item.addEventListener('mouseleave', () => {
    console.log('mouseleave');
  });
});