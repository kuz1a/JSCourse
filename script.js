'use strict';

let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложеные, Интерактивные");
let screenPrice = +prompt("Сколько будет стоить данная работа?", "12000");
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt("Какая дополнительная услуга1 нужна?");
let servicePrice1 = +prompt("Сколько будет стоить " + service1);
let service2 = prompt('Какая дополнительная услуга2 нужна?');
let servicePrice2 = +prompt("Сколько будет стоить " + service2);
let fullPrice = 0;
let servicePercentPrice = 0;
let allServicePrices = 0;

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


const getAllServicePrices = function(service1, service2) {
  allServicePrices = service1 + service2;
  console.log(allServicePrices);
};

function getFullPrice(servicePrice1, servicePrice2, screenPrice) {

  fullPrice = servicePrice1 + servicePrice2 + screenPrice;
  console.log(fullPrice);
}

const getTitle = function(string) {
  return console.log(string.split('').string[0].toUpperCase());
  
}

const getServicePercentPrices = function() {
  servicePercentPrice = fullPrice - ((fullPrice*10)/100);
  console.log(servicePercentPrice);
}

getAllServicePrices(servicePrice1,servicePrice2)

getFullPrice(servicePrice1, servicePrice2, screenPrice);


getTitle(title)
getServicePercentPrices();