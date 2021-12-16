'use strict';

class First {
  constructor(){
   
  }
  hello() {
   console.log('Привет я метод родителя');
 }
}
class Second extends First {
  constructor(){
    super()
  }
  hello() {
    super.hello();
    console.log('А я наследуемый метод');
    //Метод Феймана
    console.log('Научились делать человека который считает сумму за будующую выполненую работу');
    console.log('научились заимстововать разные действия от одного человека к другому');
    console.log('Создание копии другого человека ровно с тем с чем владеет первый человек');
    console.log('научились называть человека и давать ему определенные действия');
  }
}



const first = new First();
const second = new Second();

first.hello();
second.hello();



// const second = new Second();

// second.hello();


// const Person1 = function(name, age) {
//   this.name = name;
//   this.age = age;

// }
// Person1.prototype.sayHello = function() {
//   console.log(`Привет меня зовут ${this.name}`);
// }

// const person1 = new Person1('Vlad', 123) 
// person1.sayHello();
// console.log(person1);

// class Person {
//   constructor(name, age) {
//     this.name = name;
//   this.age = age
//   Person.incrementCount()
//   }

//   static count = 0
//   static getCount() {
//     return Person.count
//   }
//   static incrementCount(){
//     Person.count++
//   }

//   sayHello() {
//     console.log(`привет меня зовут ${this.name}`);
//   }
  
// }
// class FrontEndDev extends Person {
//   constructor(name, age, skills = []){
//     super(name, age)
//     this._skills = skills

//   }
//   test() {
//     super.sayHello()
//   } 
//   get skills() {
//     return this._skills
//   }
//   set skills(str){
//     console.log(str);
//     this.skills.push(str)
//   }

// }
// const dev = new FrontEndDev('Vlad', '23')
// console.log( dev);
// dev.skills = 'Черт'
// dev.sayHello();
// dev.test();