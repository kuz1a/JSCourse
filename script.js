'use strict';
let num = 266219;
let sum = 1;
let multThree = 0;
let arrayNum = num.toString().split('');

for (let i = 0; i < arrayNum.length; i++) {
  sum *= arrayNum[i];

}

// multThree = sum ** 3;
// console.log("Перемножение " + sum);
// console.log("Степень " + multThree);
// console.log("Первые две цифры числа это " + multThree.toString().slice(0,2) );


// let title = prompt('Как называется ваш проект?');
// let screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложеные, Интерактивные");
let screenPrice = +prompt("Сколько будет стоить данная работа?", "12000");
// let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt("Какая дополнительная услуга1 нужна?");
let servicePrice1 = +prompt("Сколько будет стоить " + service1);
let service2 = prompt('Какая дополнительная услуга2 нужна?');
let servicePrice2 = +prompt("Сколько будет стоить " + service2);
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = fullPrice - ((fullPrice*10)/100);

if (fullPrice >= 0) {
  if (fullPrice >= 30000) {
    console.log('Скидка 10%');
  } else if (fullPrice >= 15000 && fullPrice < 30000) {
    console.log('скидка 5%');
  } else if (fullPrice < 15000) {
    console.log('Скидка не предусмотрена');
  }
  console.log('Full price ' + Math.ceil(fullPrice));
  console.log('Чистая прибыль ' + servicePercentPrice);
} else {
  console.log('Чтото пошло не так!');
}




