let input = document.querySelector("#text");
let setColorButton = document.querySelector("#btn");
let square = document.querySelector("#square");
let circleBtn = document.querySelector("#e_btn");
let colorValue = '';
let range = document.querySelector("#range");
let circle = document.querySelector("#circle");

input.addEventListener('input', function(){
      colorValue = input.value;
      return colorValue;
})

setColorButton.addEventListener('click', function() {
    square.style.backgroundColor = `${colorValue}`
})

circleBtn.style.display = 'none';

range.addEventListener('input', function(){
    circle.style.width = `${range.value}%`;
    circle.style.height = `${range.value}%`;
    
})