let item = document.querySelector(".carousel");
let x = 0;
let newLength = 0;
let allSlides = document.querySelectorAll(".carousel div");
function next() {
  if (newLength === allSlides.length - 1) {
    newLength = 0;
    console.log("first slide");
  } else {
    newLength++;
  }
  x = -newLength * 100;
  move(x);
}
function prev() {
  if (newLength === 0) {
    newLength = allSlides.length - 1;
    console.log("last slide");
  } else {
    newLength--;
  }
  x = -newLength * 100;
  move(x);
}
function move(position) {
  item.style.transform = `translateX(${position}%)`;
}
