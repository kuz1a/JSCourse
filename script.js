'use strict';
let lang = prompt('введите en или ru');

if (lang === 'en') {
  console.log('if \n Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
} else if (lang === 'ru') {
  console.log('if \n Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
}

switch (lang) {
  case 'en':
    console.log(' switch \n Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
    break
  case 'ru': 
    console.log('switch \n Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
    break
}
const array = new Map([
  ['en', 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'],
  ['ru', 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье']
]) 

console.log(array.get(lang));


let namePerson = 'Игорь';
let result = namePerson == 'Артем' ? 'директор' 
  : (namePerson == 'Александр') ? 'преподаватель'
  : 'студент'
  
console.log(result);





