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
let discount = 0;



const getAllServicePrices = function(service1, service2) {
  return service1 + service2;

};

function getFullPrice(servicePrice1, servicePrice2, screenPrice) {
 return servicePrice1 + servicePrice2 + screenPrice;

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



getTitle(title)
fullPrice = getFullPrice(servicePrice1, servicePrice2, screenPrice);
allServicePrices = getAllServicePrices(servicePrice1,servicePrice2);
servicePercentPrice = getServicePercentPrices(fullPrice);
discount = getRollbackMessage(fullPrice);
console.log("Сумма доп услуг " + allServicePrices);
console.log('Полный прайс ' + fullPrice)
console.log("Сумма с учетом отката " + servicePercentPrice);
console.log(screens.split(','));

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
