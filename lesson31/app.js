// AJAX

let inputRub = document.getElementById('rub');
let inputUsd = document.getElementById('usd');

// let btn = document.querySelector('button');


inputRub.addEventListener('input', () => {
  let request = new XMLHttpRequest();
  request.open('GET', 'current.json');
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.send();

  // status
  // statusText
  // responseText
  // response
  // readyState

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status == 200) {
      let data = JSON.parse(request.response);
      inputUsd.value = inputRub.value / data.usd;
      console.log(inputUsd.value);
    } else {
      inputUsd.value = "Что-то пошло не так";
    }
  });
});