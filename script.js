'use strict';

let title;
let screens;
let screenPrice;
let adaptive;

let service1;
let service2;
let fullPrice = 0;
let servicePercentPrice = 0;
let allServicePrices = 0;
let discount = 0;

const isNumber = function(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}


const asking = function() {
  title = prompt('Как называется ваш проект?', "Калькулятор верстки");
  screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные");
  screenPrice = +prompt("Сколько будет стоить данная работа?");
 
  while (!isNumber(screenPrice)) {
    screenPrice = +prompt("Сколько будет стоить данная работа?");
  }

  adaptive = confirm('Нужен ли адаптив на сайте?');
}

const getAllServicePrices = function() {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
    service1 = prompt("Какая дополнительная услуга нужна?");
    sum += +prompt("Сколько это будет стоить?");
    console.log("sum " + typeof sum);
    while(!isNumber(sum)) {
      sum += +prompt("Сколько это будет стоить?");
      console.log("sum " + typeof sum);
    }
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



// let variable = prompt("enter your message");
// console.log(typeof variable);
// const getParam = function(variable) {
//   let result = '';
//   if (parseInt(variable)) {
//     alert("It is not a string")
//   } else if (typeof variable === 'string') {
//     console.log(variable.trim());
//     if (variable.length > 30) {
//       console.log(variable.length);
//       result = variable.substr(0,30) + "...";
//       console.log(result);
//     }
//   }
// }

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
