const slides = document.querySelectorAll(".slide");
const form = document.getElementById("page-banner-form");
let counter = 0;
console.log("working")
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
      document.getElementById(
        "services-banner"
      ).style.backgroundImage = `url(${response.servicesBanner})`;
      document.getElementById("homestay1").src = response.homestays.homestay1;
      document.getElementById("homestay2").src = response.homestays.homestay2;
      document.getElementById("homestay3").src = response.homestays.homestay3;
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
        response.giftCardService.heading;
      document.getElementById("giftCardServiceSubHeading").textContent =
        response.giftCardService.subHeading;
      document.getElementById("giftCardServiceDetails").textContent =
        response.giftCardService.details;
      document.getElementById("spaService").src = response.spaService.url;
      document.getElementById("spaServiceHeading").textContent =
        response.spaService.heading;
      document.getElementById("spaServiceSubHeading").textContent =
        response.spaService.subHeading;
      document.getElementById("spaServiceDetails").textContent =
        response.spaService.details;
      document.getElementById("adventureService").src =
        response.adventureService.url;
      document.getElementById("adventureServiceHeading").textContent =
        response.adventureService.heading;
      document.getElementById("adventureServiceSubHeading").textContent =
        response.adventureService.subHeading;
      document.getElementById("adventureServiceDetails").textContent =
        response.adventureService.details;
      document.getElementById("activity1").src =
        response.activities.poolActivity;
      document.getElementById("activity2").src =
        response.activities.forestHomestayActivity;
      document.getElementById("slide1").src =
        response.showRooms.standardRoom.url;
      document.getElementById("slide2").src = response.showRooms.dulexRoom.url;
      document.getElementById("slide3").src =
        response.showRooms.superDulexRoom.url;
      document.getElementById("location-section-logo").src =
        response.locationSection.flowerLogo;
      document.getElementById("location-section-plane-logo").src =
        response.locationSection.planeLogo;
      document.getElementById("location-section-bus-logo").src =
        response.locationSection.busLogo;
      document.getElementById("location-section-van-logo").src =
        response.locationSection.vanLogo;
      document.getElementById("location-section-large-travel-picture").src =
        response.locationSection.largeTravelPicture;
      document.getElementById("location-section-small-travel-picture-1").src =
        response.locationSection.smallTravelPicture1;
      document.getElementById("location-section-small-travel-picture-2").src =
        response.locationSection.smallTravelPicture2;
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

function handleFormSubmit(event) {
  event.preventDefault();
  let formDetails = {
    checkInTime: document.getElementById("check-in").value,
    checkOutTime: document.getElementById("check-out").value,
    adults: document.getElementById("adults").value,
    childrens: document.getElementById("childrens").value,
  };
  fetch("http://localhost:5000/", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(formDetails),
  }).then(() => {
    alert("Form submitted successfully!")
    document.getElementById("check-in").value = null;
    document.getElementById("check-out").value = null;
    document.getElementById("adults").value = "1";
    document.getElementById("childrens").value = "0";
  });
}
