'use strict';

let books = document.querySelectorAll(".book");
let lists = document.querySelectorAll('ul')
let elems = lists[0].querySelectorAll('li');
let elemsFive = lists[5].querySelectorAll('li');
let elemsSix = lists[2].querySelectorAll('li');
let title = document.querySelectorAll('h2 a');
let adv = document.querySelector(".adv");
let body = document.querySelector('body');

books[0].before(books[1]);
books[0].after(books[4]);
books[2].before(books[3]);
books[2].before(books[5]);

body.style.backgroundImage = "url(/image/you-dont-know-js.jpg)";

title[4].textContent = "Книга 3. this и Прототипы Объектов";

adv.remove();

elems[3].after(elems[2]);
elems[2].before(elems[6]);
elems[6].after(elems[8]);
elems[8].after(elems[4]);
elems[9].after(elems[2]);


elemsFive[1].after(elemsFive[9]);
elemsFive[9].after(elemsFive[3]);
elemsFive[3].after(elemsFive[4]);
elemsFive[2].after(elemsFive[6]);
elemsFive[6].after(elemsFive[7])

elemsSix[8].insertAdjacentHTML('beforeend', "<li>Глава 8: За пределами ES6</li>")
