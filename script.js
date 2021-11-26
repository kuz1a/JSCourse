'use strict';

let title = '',
    screens = "Простые, Сложные, Интерактивные",
    screenPrice = 120,
    rollback = 50,
    fullPrice = 1000,
    adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " рублей/ долларов/гривен/юани \n Стоимость разработки сайта " + fullPrice + " рублей/ долларов/гривен/юани");
console.log(screens.toLowerCase().split(","));
console.log("Процент отката " + (fullPrice*(rollback/100)));