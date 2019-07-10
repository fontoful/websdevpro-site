const leftArrow = document.querySelector("#left-arrow");

const activeDisplay = document.querySelectorAll(".display");

const rightArrow = document.querySelector("#right-arrow");

// functions
const slideRight = () => {
  //   get current display item
  const currentActive = document.querySelector(".active");

  //   remove active class
  currentActive.classList.remove("active");

  if (currentActive.nextElementSibling) {
    currentActive.nextElementSibling.classList.add("active");
  } else {
    activeDisplay[0].classList.add("active");
  }
};

const slideLeft = () => {
  // get current class with active
  const currentActive = document.querySelector(".active");
  // remove active class
  currentActive.classList.remove("active");

  if (currentActive.previousElementSibling) {
    currentActive.previousElementSibling.classList.add("active");
  } else {
    activeDisplay[activeDisplay.length - 1].classList.add("active");
  }
};
// event listener

rightArrow.addEventListener("click", slideRight);

leftArrow.addEventListener("click", slideLeft);

// make it slid every 3 seconds
setInterval(() => {
  slideRight();
}, 3000);
