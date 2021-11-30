'use strict';

let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные");
let screenPrice = +prompt("Сколько будет стоить данная работа?", "12000");
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt("Какая дополнительная услуга1 нужна?");
let servicePrice1 = +prompt("Сколько будет стоить " + service1);
let service2 = prompt('Какая дополнительная услуга2 нужна?');
let servicePrice2 = +prompt("Сколько будет стоить " + service2);
let fullPrice = 0;
let servicePercentPrice = 0;
let allServicePrices = 0;




const getAllServicePrices = function(service1, service2) {
  allServicePrices = service1 + service2;
  console.log("Сумма доп услуг " + allServicePrices);
};

function getFullPrice(servicePrice1, servicePrice2, screenPrice) {

  fullPrice = servicePrice1 + servicePrice2 + screenPrice;
  console.log("Сумма с учетом всех доп услуг" + fullPrice);
}

const getTitle = function(string) {
  var pos = string.indexOf(string.trim().charAt(0));
  console.log((string.substr(0, pos - 1) + string.charAt(pos).toUpperCase() + string.substr(pos+1)));
  
}

const getServicePercentPrices = function() {
  servicePercentPrice = fullPrice - ((fullPrice*10)/100);
  console.log("Сумма с учетом отката " + servicePercentPrice);
}


const getRollbackMessage = function(){
  if (fullPrice >= 0) {
    if (fullPrice >= 30000) {
      alert('Скидка 10%');
    } else if (fullPrice >= 15000 && fullPrice < 30000) {
      alert('скидка 5%');
    } else if (fullPrice < 15000) {
      alert('Скидка не предусмотрена');
    }
  
  } else {
    alert('Чтото пошло не так!');
  }
}
getAllServicePrices(servicePrice1,servicePrice2)
getFullPrice(servicePrice1, servicePrice2, screenPrice);
getServicePercentPrices();
getRollbackMessage(fullPrice);
getTitle(title)

console.log(screens.split(','));

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
