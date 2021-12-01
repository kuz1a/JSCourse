'use strict';

let title;
let screens;
let screenPrice;
let allServicePrices;
let adaptive;
let servicePercentPrice;
let service1;
let service2;
let fullPrice = 0;


let discount = 0;

const isNumber = function(num) {
  let numberRes = !isNaN(parseFloat(num)) && isFinite(num);

  return numberRes
}


const asking = function() {
  title = prompt('Как называется ваш проект?', "Калькулятор верстки");
  screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные");
  do {
    screenPrice = +prompt("Сколько будет стоить данная работа?");
  } while (!isNumber(screenPrice));


  adaptive = confirm('Нужен ли адаптив на сайте?');
}

const getAllServicePrices = function() {
  let sum = 0;
  let res = 0;
  for (let i =0; i< 2; i++) {
      service1 = prompt("Какая доп услуга?")
      do {
        res = prompt('Сколько будет стоить?')
      } while (!isNumber(res));
      sum += +res;
    }
  
  return sum;
};

function getFullPrice() {
 return allServicePrices + screenPrice;

}

const getTitle = function(string) {
  var pos = string.indexOf(string.trim().charAt(0));
  console.log((string.substr(0, pos - 1) + string.charAt(pos).toUpperCase() + string.substr(pos+1).toLowerCase()));
  
}

const getServicePercentPrices = function(fullPrice) {
  return fullPrice - ((fullPrice*10)/100);
}


const getRollbackMessage = function(fullPrice){
  if (fullPrice >= 0) {
    if (fullPrice >= 30000) {
      console.log('Скидка 10%');
    } else if (fullPrice >= 15000 && fullPrice < 30000) {
      console.log('скидка 5%');
    } else if (fullPrice < 15000) {
      console.log('Скидка не предусмотрена');
    }
  
  } else {
    console.log('Чтото пошло не так!');
  }
}

asking();

getTitle(title)
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices(fullPrice);
discount = getRollbackMessage(fullPrice);

console.log("Сумма доп услуг " + allServicePrices);

console.log('Полный прайс ' + fullPrice);
console.log("Сумма с учетом отката " + servicePercentPrice);
console.log(screens.split(','));

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
