'use strict';

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  allServicePrices: 0 ,
  adaptive: true,
  servicePercentPrice: 0,
  services: {},
  fullPrice: 0,
  discount: 0,
  asking : function() {
    do {
        appData.title = prompt('Как называется ваш проект?');
    } while (!this.isString(appData.title));

    for (let i = 0 ; i< 2; i++) {
        let name = '';
        do {
            name = prompt('Какие типы экранов нужно разработать?');
        } while (!this.isString(name));

        let price = 0;  
        do {
            price = prompt('Сколько будет стоить?');
        } while (!appData.isNumber(price));
        appData.screens.push({id: i, name: name, price: price})

    }
   
    
    for (let i =0; i< 2; i++) {
        let name = prompt("Какая доп услуга?")
        let price = 0;
        do {
            price = prompt('Сколько будет стоить?')
        } while (!appData.isNumber(price));
        appData.services[name] = +price;
      }
    
    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
  },
  addPrices : function() {
    for (let screen of appData.screens) {
        appData.screenPrice += +screen.price;
    }

    for (let key in appData.services) {
        appData.allServicePrices += appData.services[key];
    }
  },

  getFullPrice : function() {
    appData.fullPrice = appData.allServicePrices + +appData.screenPrice;
  },
  getTitle : function(string) {
    let pos = string.indexOf(string.trim().charAt(0));
    appData.title = string.substr(0, pos - 1) + string.charAt(pos).toUpperCase() + string.substr(pos+1).toLowerCase();
    
  },
  getServicePercentPrices : function() {
    appData.servicePercentPrice = appData.fullPrice - ((appData.fullPrice*10)/100);
  },
  getRollbackMessage : function(){
    if (appData.fullPrice >= 0) {
      if (appData.fullPrice >= 30000) {
        appData.discount = 10;
        console.log('Скидка 10%');
      } else if (appData.fullPrice >= 15000 && appData.fullPrice < 30000) {
        appData.discount = 5;
        console.log('скидка 5%');
      } else if (appData.fullPrice < 15000) {
        appData.discount = 0;
        console.log('Скидка не предусмотрена');
      }
    
    } else {
      console.log('Чтото пошло не так!');
    }
  },
  isNumber : function(num) {
    let numberRes = !isNaN(parseFloat(num)) && isFinite(num);
  
    return numberRes
  },
    isString : function (str) {
       let stringRes = isNaN(str);
        return stringRes
    },
  start : function() {
    this.asking();
    this.addPrices();
    this.getTitle(appData.title);
    this.getFullPrice();
    this.getServicePercentPrices();
    this.getRollbackMessage();
    this.logger();
  },
  logger : function() {
    console.log("Сумма доп услуг " + appData.allServicePrices);
    console.log('Полный прайс ' + appData.fullPrice);
    console.log("Сумма с учетом отката " + appData.servicePercentPrice);

  }
}

appData.start();


