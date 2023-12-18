const header = document.querySelector("header");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");
// Toggle mobile menu on hamburger button click
hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));
// Close mobile menu on close button click
closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());



var slides = document.querySelectorAll('.slidepg');
var btns = document.querySelectorAll('.radiobtn');
let currentSlide = 1;

var manualNav = function(manual){
  slides.forEach((slidepg) => {  
  slidepg.classList.remove('active');

  btns.forEach((radiobtn) => {
        radiobtn.classList.remove('active');
  });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((radiobtn, i) => {
    radiobtn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

var repeat = function(activeClass){
  let active = document.getElementsByClassName('active');
  let i = 1;

  var repeater = () => {
    setTimeout(function(){
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active');
      });
      
      slides[i].classList.add('active');
      btns[i].classList.add('active');
      i++;

      if(slides.length == i){
        i=0;
      }
      if(i >= slides.length){
        return;
      }
      repeater();
    
    }, 1000);
  }
  repeater();
}
repeat();