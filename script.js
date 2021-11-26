'use strict';

let title = '',
    screens = "Простые, Сложные, Интерактивные",
    screenPrice = 120,
    rollback = 50,
    fullPrice = 1000,
    adaptive = true;


let num = 266219;
let sum = 1;
let multThree = 0;
let arrayNum = num.toString().split('');
console.log(arrayNum);
for (let i = 0; i < arrayNum.length; i++) {
  sum *= arrayNum[i];

}
multThree = sum ** 3;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " рублей/ долларов/гривен/юани \n Стоимость разработки сайта " + fullPrice + " рублей/ долларов/гривен/юани");
console.log(screens.toLowerCase().split(","));
console.log("Процент отката " + (fullPrice*(rollback/100)));

console.log("Перемножение " + sum);
console.log("Степень " + multThree);
console.log("Первые две цифры числа это " + multThree.toString().slice(0,2) );