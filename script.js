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
  

  const game = () => {
    
    let number = prompt("Угадай число от 1 до 100");
    console.log( typeof number);
    if (number === null ) {
      alert("game over сыграем")
    }

    if (isNumber(number)) {
      let userNumber = +number;
      if (userNumber > numberAsk) {
        alert('Загаданное число меньше')
        
        game();
      } else if (userNumber < numberAsk) {
        alert('Загаданное число больше');
        game();
      } else if (userNumber === numberAsk) {
        alert('Вы угадали число ' + numberAsk);
      
      }
    } else {
      alert('Введите число')
      game();
    }

  }

  game();
}

start();