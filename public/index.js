"use strict";
let sliderImages = document.querySelectorAll(".myslides"),
  arrowLeft = document.querySelector(".btn--left"),
  arrowRight = document.querySelector(".btn--right"),
  dots = document.querySelectorAll(".dot"),
  counter = -1;
const reset = function () {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
};
const resetDot = function () {
  for (let i = 0; i < dots.length; i++) {
    dots[i].style.backgroundColor = "white";
  }
};
const slideLeft = function () {
  reset();
  sliderImages[counter - 1].style.display = "block";
  resetDot();
  dots[counter - 1].style.backgroundColor = "#087f5b";
  counter--;
};
const slideRight = function () {
  reset();
  sliderImages[counter + 1].style.display = "block";
  resetDot();
  dots[counter + 1].style.backgroundColor = "#087f5b";
  counter++;
};
const automateSlide = function () {
  reset();
  if (counter === sliderImages.length - 1) {
    counter = -1;
  }
  sliderImages[counter + 1].style.display = "block";
  resetDot();
  dots[counter + 1].style.backgroundColor = "#087f5b";
  counter++;
};
// Adding event listener to the buttons
arrowLeft.addEventListener("click", function () {
  if (counter === 0) {
    counter = sliderImages.length;
  }
  slideLeft();
});
arrowRight.addEventListener("click", function () {
  if (counter === sliderImages.length - 1) {
    counter = -1;
  }
  slideRight();
});
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {
    reset();
    sliderImages[i].style.display = "block";
    resetDot();
    dots[i].style.backgroundColor = "#087f5b";
    counter = i;
  });
}
setInterval(automateSlide, 3000);
