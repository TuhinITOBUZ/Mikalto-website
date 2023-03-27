const slides = document.querySelectorAll(".slide");
let counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 150}%`;
});

const goPreviousSlide = () => {
  counter = (counter - 1) % 3;
  slideImage();
};
const goNextSlide = () => {
  counter = (counter + 1) % 3;
  slideImage();
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 150}%)`;
  });
};
