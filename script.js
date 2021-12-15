'use strict';

const DomElement = function(selector, height, width, bg, fontSize, text) {
  this.selector = selector;
  this.height = height
  this.width = width
  this.bg = bg 
  this.fontSize = fontSize
  this.text = text
}
DomElement.prototype.createElem = function() {
  let elem  = document.createElement('div')
  let firstLetter = this.selector[0]
  if (firstLetter === '.') {
    elem.className = this.selector.substring(1);

  } else if(firstLetter === '#') {
    elem.setAttribute('id', this.selector.substring(1));
  
  }
  elem.style.cssText = 'height:' + this.height + ';' +
  'width:' + this.width + ';' +
  'background:' + this.bg + ';' +
  'font-size:' + this.fontSize + ';';

  elem.textContent = this.text;
  document.body.append(elem);
}

const domElement = new DomElement('#elem', '100px', '37%', 'green', '25px', 'Элемент класса');
console.log(domElement);
domElement.createElem();


domElement.selector = '.new-elem';
domElement.height = '50px';
domElement.width = '150px';
domElement.bg = 'red';

domElement.createElem();