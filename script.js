'use strict';

let title = document.getElementsByTagName("h1")[0];
let startBtn = document.getElementsByClassName("handler_btn")[0];
const buttonPlus = document.querySelector('.screen-btn');
let percentItems = document.querySelectorAll(".other-items.percent");
let numberItems = document.querySelectorAll(".other-items.number");
let range = document.querySelector(".rollback input");
let rangeValue = document.querySelector('.rollback .range-value');
let totalInputs = document.getElementsByClassName("total-input");

let totalInputTotal = document.getElementsByClassName("total-input")[0];
let totalInputTotalCount = document.getElementsByClassName("total-input")[1];
let totalInputFullCountOther = document.getElementsByClassName("total-input")[2];
let totalInputFullCount = document.getElementsByClassName("total-input")[3];
let totalInputCountRollback = document.getElementsByClassName("total-input")[4];

let screens = document.querySelectorAll(".screen");
const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  servicePricesPercent: 0 ,
  servicePricesNumber: 0 ,
  adaptive: true,
  rollback: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  fullPrice: 0,
  discount: 0,
  countScreens: 0,
  
  init: function() {
    appData.change();
    appData.addTitle()
    
    startBtn.addEventListener('click', appData.change)
    buttonPlus.addEventListener('click', appData.changePlus);
    range.addEventListener('input', appData.getServicePercentPrices)
  },
  getServicePercentPrices: function() {
    rangeValue.textContent = `${range.value} %` 
  },

  addTitle: function() {
    document.title = title.textContent
  },
  isError: false,
  change: function() {
    // let screens = document.querySelectorAll(".screen");
        screens.forEach(function(screen) {
            let select = screen.querySelectorAll('select');
            let input = screen.querySelectorAll('input');
            appData.isError = false;
            const twoArray = [...select, ...input];
            twoArray.forEach(item => {
              if (item.value === '') {
                appData.isError = true;
                  
              }
            })
            if (!appData.isError) {
              appData.start();
            }
        })
  },
  changePlus: function() {
    // let screens = document.querySelectorAll(".screen");
   
    screens.forEach(function(screen) {
        let select = screen.querySelectorAll('select');
        let input = screen.querySelectorAll('input');
        appData.isError = false;
        const twoArray = [...select, ...input];
        twoArray.forEach(item => {
          console.log(item.value)
          if (item.value === '') {
            appData.isError = true;
              
          }
        })
        if (!appData.isError) {
          appData.addScreenBlock();
        }
      })
  },
  addScreenBlock: function() {
    let screens = document.querySelectorAll(".screen");
      const cloneScreen = screens[0].cloneNode(true);
      screens[screens.length - 1].after(cloneScreen);
      console.log(screens);
  },
  addScreens: function() {
    // appData.screens = []; 
    let screens = document.querySelectorAll(".main-controls__item.screen");
    console.log(screens);
        screens.forEach(function(screen, index) {
            
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            appData.countScreens += +input.value;
            const selectName = select.options[select.selectedIndex].textContent;
            
            appData.screens.push({
                id: index,
                name: selectName, 
                price: +select.value * +input.value})

        })

  },
  addServices: function() {
    percentItems.forEach(function(item){
        const check = item.querySelector('input[type=checkbox]');
        const label =  item.querySelector('label');
        const input =  item.querySelector('input[type=text]');

        if (check.checked) {
            appData.servicesPercent[label.textContent] = +input.value;
        }
        
    })

    numberItems.forEach(function(item){
        const check = item.querySelector('input[type=checkbox]');
        const label =  item.querySelector('label');
        const input =  item.querySelector('input[type=text]');

        if (check.checked) {
            appData.servicesNumber[label.textContent] = +input.value;
        }
        
    })
  
  },
  addPrices : function() {
    appData.screenPrice = 0;
    console.log(appData.screens);
    for (let screen of appData.screens) {
        appData.screenPrice += +screen.price;
    }

    for (let key in appData.servicesNumber) {
        appData.servicePricesNumber += appData.servicesNumber[key];
    }

    for (let key in appData.servicesPercent) {
        appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
    }
    appData.fullPrice = appData.servicePricesNumber + appData.servicePricesPercent + +appData.screenPrice;

    appData.rollback = appData.fullPrice - (appData.fullPrice * range.value/100)


  },
  showResult: function() {
    
    totalInputTotal.value = appData.screenPrice
    console.log(totalInputTotal.value);
    totalInputFullCountOther.value = appData.servicePricesNumber + appData.servicePricesNumber
    totalInputFullCount.value = appData.fullPrice
    totalInputCountRollback.value = appData.rollback
    totalInputTotalCount.value = appData.countScreens 
    
  },
  getTitle : function(string) {
    let pos = string.indexOf(string.trim().charAt(0));
    appData.title = string.substr(0, pos - 1) + string.charAt(pos).toUpperCase() + string.substr(pos+1).toLowerCase();
    
  },
  start : function() {
  
    appData.addScreens();
    appData.addServices();
    appData.addPrices();
    console.log(appData);
    appData.showResult()
  },

}

appData.init();
