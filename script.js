'use strict';

const getNumber = (max) => {
  let n = Math.floor(Math.random() * Math.floor(max));
  return n
}

const isNumber = (num) => {
  return !isNaN(parseFloat(num)) && isFinite(num);
}


const start = () => {

  let numberAsk = getNumber(100);
  let k = 10;

  const game = () => {
    
    let number = prompt("Угадай число от 1 до 100");
    console.log( typeof number);
    if (number === null ) {
      alert("game over ")
      return
    }
    if (k === 0) {
      if(confirm('Попытка кончились не угадал еще?')){
        start()
      } else {
        alert('Пока')
        return;
      }
      
    }

    if (isNumber(number)) {
      let userNumber = +number;
      if (userNumber > numberAsk) {
        alert('Загаданное число меньше')
        k--;
        game();
      } else if (userNumber < numberAsk) {
        alert('Загаданное число больше');
        k--;
        game();
      } else {
        k--;
        if (confirm('Вы угадали число ' + numberAsk + ' и осталось еще ' + k +' попыток. Еще?')) {
          start();
        } else {
            alert('Пока')
            return
        }
      }
    } else {
      start();
    }

  }

  game();
}

start();