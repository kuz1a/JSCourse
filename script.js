'use strict';
let num = 266219;
let sum = 1;
let multThree = 0;
let arrayNum = num.toString().split('');

for (let i = 0; i < arrayNum.length; i++) {
  sum *= arrayNum[i];

}

multThree = sum ** 3;
console.log("Перемножение " + sum);
console.log("Степень " + multThree);
console.log("Первые две цифры числа это " + multThree.toString().slice(0,2) );
