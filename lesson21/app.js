// let timerId = setTimeout(satHello, 2000);
// clearTimeout(timerId);

// // setInterval();
// // clearInterval();


// function satHello() {
//   alert('Hello world');
// }


// let timerId = setTimeout(function log() {
//   console.log('Hello');
//   setTimeout(log, 2000);
// }, 2000);


// let btn = document.querySelector('.w3-button');
// let elem = document.querySelector('.box');
// elem.style.color = 'blue';
// console.log(btn);
// console.log(elem);


function myMove() {
  var elem = document.getElementById("myAnimation");
  var pos = 0;
  var id = setInterval(frame, 10);

  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}