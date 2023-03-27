const slides = document.querySelectorAll(".slide");
const form = document.getElementById("page-banner-form");
let counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 150}%`;
});

const goPreviousSlide = () => {
  counter = (counter - 1) % 3;
  // console.log(counter);
  slideImage();
};
const goNextSlide = () => {
  counter = (counter + 1) % 3;
  // console.log(counter);
  slideImage();
  async function setData() {
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
      if (counter === 0){
        document.getElementById("showRoomHeading")
      }
      else if ( counter === 1){
      }
      else if (counter === 2){
    
      }
    }
  }
  setData()
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
    try {
      document.getElementById(
        "page-banner"
      ).style.backgroundImage = `url(${response.pageBanner})`;
      document.getElementById("homestay1").src = response.homestay1;
      document.getElementById("homestay2").src = response.homestay2;
      document.getElementById("homestay3").src = response.homestay3;
      document.getElementById("wellnessService").src =
        response.wellnessService.url;
      document.getElementById("wellnessServiceHeading").textContent =
        response.wellnessService.heading;
      document.getElementById("wellnessServiceSubHeading").textContent =
        response.wellnessService.subHeading;
      document.getElementById("wellnessServiceDetails").textContent =
        response.wellnessService.details;
      document.getElementById("giftCardService").src =
        response.giftCardService.url;
      document.getElementById("giftCardServiceHeading").textContent =
        response.wellnessService.heading;
      document.getElementById("giftCardServiceSubHeading").textContent =
        response.wellnessService.subHeading;
      document.getElementById("giftCardServiceDetails").textContent =
        response.wellnessService.details;
      document.getElementById("spaService").src = response.spaService.url;
      document.getElementById("spaServiceHeading").textContent =
        response.wellnessService.heading;
      document.getElementById("spaServiceSubHeading").textContent =
        response.wellnessService.subHeading;
      document.getElementById("spaServiceDetails").textContent =
        response.wellnessService.details;
      document.getElementById("adventureService").src =
        response.adventureService.url;
      document.getElementById("adventureServiceHeading").textContent =
        response.wellnessService.heading;
      document.getElementById("adventureServiceSubHeading").textContent =
        response.wellnessService.subHeading;
      document.getElementById("adventureServiceDetails").textContent =
        response.wellnessService.details;
      document.getElementById("slide1").src =
        response.showRooms.standardRoom.url;
      document.getElementById("slide2").src = response.showRooms.dulexRoom.url;
      document.getElementById("slide3").src =
        response.showRooms.superDulexRoom.url;
    } catch (err) {
      console.log(err);
    }
  }
}
getData();

function handleFormSubmit() {
  let checkIn = document.getElementById("check-in").value;
  let checkOut = document.getElementById("check-out").value;
  let adults = document.getElementById("adults").value;
  let childrens = document.getElementById("childrens").value;
  console.log(checkIn, checkOut, adults, childrens);
}
