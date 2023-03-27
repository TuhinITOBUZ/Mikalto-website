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

async function getData() {
  const response = await fetch(`http://localhost:5000/`)
    .then(function (res) {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
    if (response.error) {
      alert(response.error.message);
    } else {
      document.getElementById("page-banner").style.backgroundImage = `url(${response})`
     }
}
getData()
