const slides = document.querySelectorAll(".slide");
const form = document.getElementById("page-banner-form");
let counter = 0;

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
    if (counter === 0) {
      document.getElementById("showRoomHeading").textContent =
        response.showRooms.standardRoom.heading;
      document.getElementById("showRoomPrice").textContent =
        response.showRooms.standardRoom.price;
      document.getElementById("showRoomDetails").textContent =
        response.showRooms.standardRoom.details;
      document.getElementById("bed-size").textContent =
        response.showRooms.standardRoom.bedSize;
      document.getElementById("capacity").textContent =
        response.showRooms.standardRoom.capacity;
      document.getElementById("room-size").textContent =
        response.showRooms.standardRoom.roomSize;
      document.getElementById("hotel-view").textContent =
        response.showRooms.standardRoom.hotelView;
    } else if (counter === 1) {
      document.getElementById("showRoomHeading").textContent =
        response.showRooms.dulexRoom.heading;
      document.getElementById("showRoomPrice").textContent =
        response.showRooms.dulexRoom.price;
      document.getElementById("showRoomDetails").textContent =
        response.showRooms.dulexRoom.details;
      document.getElementById("bed-size").textContent =
        response.showRooms.dulexRoom.bedSize;
      document.getElementById("capacity").textContent =
        response.showRooms.dulexRoom.capacity;
      document.getElementById("room-size").textContent =
        response.showRooms.dulexRoom.roomSize;
      document.getElementById("hotel-view").textContent =
        response.showRooms.dulexRoom.hotelView;
    } else if (counter === 2) {
      document.getElementById("showRoomHeading").textContent =
        response.showRooms.superDulexRoom.heading;
      document.getElementById("showRoomPrice").textContent =
        response.showRooms.superDulexRoom.price;
      document.getElementById("showRoomDetails").textContent =
        response.showRooms.superDulexRoom.details;
      document.getElementById("bed-size").textContent =
        response.showRooms.superDulexRoom.bedSize;
      document.getElementById("capacity").textContent =
        response.showRooms.superDulexRoom.capacity;
      document.getElementById("room-size").textContent =
        response.showRooms.superDulexRoom.roomSize;
      document.getElementById("hotel-view").textContent =
        response.showRooms.superDulexRoom.hotelView;
    }
  }
}

slides.forEach((slide, index) => {
  slide.style.left = `${index * 150}%`;
});

const goPreviousSlide = () => {
  counter = (counter - 1) % 3;
  if (counter < 0) {
    counter = 0;
  }
  slideImage();
  setData();
};
const goNextSlide = () => {
  counter = (counter + 1) % 3;
  slideImage();
  setData();
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 150}%)`;
  });
};

function handleFormSubmit() {
  let checkIn = document.getElementById("check-in").value;
  let checkOut = document.getElementById("check-out").value;
  let adults = document.getElementById("adults").value;
  let childrens = document.getElementById("childrens").value;
  let formDetails = {
    checkInTime : checkIn,
    checkOutTime : checkOut,
    adults : adults,
    childrens : childrens,
  }
  fetch("http://localhost:5000/form-data", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(formDetails),
    }).then((res) => {
      console.log("Request complete! response:", res);
    });
}
