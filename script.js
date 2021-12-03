'use strict';


// const appData = {
//   title: '',
//   screens: '',
//   screenPrice: 0,
//   allServicePrices: 0 ,
//   adaptive: true,
//   servicePercentPrice: 0,
//   service1: '',
//   service2: '',
//   fullPrice: 0,
//   discount: 0,
//   asking : function() {
//     let screenPriceRes;
//     appData.title = prompt('Как называется ваш проект?', "Калькулятор верстки");
//     appData.screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные");
//     do {
//       appData.screenPrice = prompt("Сколько будет стоить данная работа?");
//     } while (!appData.isNumber(appData.screenPrice));
  
  
//     appData.adaptive = confirm('Нужен ли адаптив на сайте?');
//   },
//   getAllServicePrices : function() {
//     let sum = 0;
//     let res = 0;
//     for (let i =0; i< 2; i++) {
//         appData.service1 = prompt("Какая доп услуга?")
//         do {
//           res = prompt('Сколько будет стоить?')
//         } while (!appData.isNumber(res));
//         sum += +res;
//       }
    
//     return sum;
//   },
//   getFullPrice : function() {
//    return appData.allServicePrices + +appData.screenPrice;
//   },
//   getTitle : function(string) {
//     let pos = string.indexOf(string.trim().charAt(0));
//     console.log((string.substr(0, pos - 1) + string.charAt(pos).toUpperCase() + string.substr(pos+1).toLowerCase()));
    
//   },
//   getServicePercentPrices : function() {
//     return appData.fullPrice - ((appData.fullPrice*10)/100);
//   },
//   getRollbackMessage : function(){
//     if (appData.fullPrice >= 0) {
//       if (appData.fullPrice >= 30000) {
//         console.log('Скидка 10%');
//       } else if (appData.fullPrice >= 15000 && appData.fullPrice < 30000) {
//         console.log('скидка 5%');
//       } else if (appData.fullPrice < 15000) {
//         console.log('Скидка не предусмотрена');
//       }
    
//     } else {
//       console.log('Чтото пошло не так!');
//     }
//   },
//   isNumber : function(num) {
//     let numberRes = !isNaN(parseFloat(num)) && isFinite(num);
  
//     return numberRes
//   },
//   start : function() {
//     this.asking();
//     appData.title = this.getTitle(appData.title);
//     appData.allServicePrices = this.getAllServicePrices();
//     appData.fullPrice = this.getFullPrice();
//     appData.servicePercentPrice = this.getServicePercentPrices();
//     appData.discount = this.getRollbackMessage();
//     this.logger();
//   },
//   logger : function() {
//     console.log(appData.fullPrice);
//     console.log("Сумма доп услуг " + appData.allServicePrices);
//     console.log('Полный прайс ' + appData.fullPrice);
//     console.log("Сумма с учетом отката " + appData.servicePercentPrice);
//     for (let key in appData) {
//       console.log("key:" + key + " " + appData[key]);
//     }
//   }
// }

// appData.start();


const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const day = document.getElementById('days'); 
const todayDay = new Date();
console.log(todayDay.getDay());

const days = () => {
    week.forEach((dayItem, index) => {
        let newdiv = document.createElement('div'); 
        if (index === todayDay.getDay()-1) { 
            console.log(todayDay.getDay());
            newdiv.classList.add('bold-day');
            newdiv.textContent = week[index];
        }
        if (dayItem == 'Суббота' || dayItem == 'Воскресенье') {
            newdiv.classList.add('weekend-italic');
            newdiv.textContent = week[index];
        } else {
            newdiv.textContent = week[index];
        }
        day.appendChild(newdiv);

    });
};
days();