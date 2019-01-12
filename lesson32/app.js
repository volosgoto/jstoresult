// PROMISES
let drink = 1;

function shoot({}) {
  console.log('Вы сделали выстрел...');
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.1 ? resolve({}) : reject('Вы промахнулись')
    }, 100);
  });

  return promise;

}

function win() {
  console.log('Вы победили!!!');
  (drink == 1) ? buyBeer(): giveMoney();
}

function buyBeer() {
  console.log('Вам купили пиво');
}

function giveMoney() {
  console.log('Вам дали деньги');
}

function loose() {
  console.log('Вы програли');
}


shoot({}) // Promise
  .then(() => {
    console.log('Вы попали в цель!');
  })
  .then(win)
  .catch(loose);