const pageBanner = document.getElementById("page-banner");
const pageBannerHeading = document.getElementById("page-banner-heading");
const pageBannerDetails = document.getElementById("page-banner-details");
const form = document.getElementById("page-banner-form");
const homestayAddImage1 = document.getElementById("homestay1");
const homestayAddImage2 = document.getElementById("homestay2");
const homestayAddImage3 = document.getElementById("homestay3");
const signature = document.getElementById("signature");
const homestayAddHeading = document.getElementById("homestay-adds-heading");
const homestayAddSubHeading = document.getElementById(
  "homestay-adds-sub-heading"
);
const homestayAddDetails = document.getElementById("homestay-adds-details");
const flowerLogo = document.getElementById("location-section-flower-logo");
const planeLogo = document.getElementById("location-section-plane-logo");
const busLogo = document.getElementById("location-section-bus-logo");
const vanLogo = document.getElementById("location-section-van-logo");
const locationSectionImage1 = document.getElementById(
  "location-section-large-travel-picture"
);
const locationSectionImage2 = document.getElementById(
  "location-section-small-travel-picture-1"
);
const locationSectionImage3 = document.getElementById(
  "location-section-small-travel-picture-2"
);
let slideCounter = 0;

async function setPageBanner() {
  const response = await fetch("http://localhost:5000/page-banner")
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
  if (response.error) {
    console.log(response.error.message);
  } else {
    try {
      pageBanner.style.backgroundImage = `url(${response.pageBanner.url})`;
      pageBannerHeading.textContent = response.pageBanner.heading;
      pageBannerDetails.textContent = response.pageBanner.details;
    } catch (err) {
      console.log(err);
    }
  }
}
setPageBanner();

function handleFormSubmit(event) {
  event.preventDefault();
  const checkInTime = document.getElementById("check-in").value;
  const checkOutTime = document.getElementById("check-out").value;
  const adults = document.getElementById("adults").value;
  const childrens = document.getElementById("childrens").value;
  fetch("http://localhost:5000/", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: `id=${Date.now()}&checkInDate=${checkInTime}&checkOutDate=${checkOutTime}&noOfAdults=${adults}&noOfChildren=${childrens}`,
  }).then(() => {
    document.getElementById("check-in").value = null;
    document.getElementById("check-out").value = null;
    document.getElementById("adults").value = "1";
    document.getElementById("childrens").value = "0";
    alert("Form submitted successfully!");
  });
}

async function setHomestays() {
  const response = await fetch("http://localhost:5000/homestays")
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
  if (response.error) {
    console.log(response.error.message);
  } else {
    try {
      homestayAddImage1.src = response.homestays.homestay1;
      homestayAddImage2.src = response.homestays.homestay2;
      homestayAddImage3.src = response.homestays.homestay3;
      signature.src = response.homestays.signature;
      homestayAddHeading.textContent = response.homestays.heading;
      homestayAddSubHeading.textContent = response.homestays.subHeading;
      homestayAddDetails.textContent = response.homestays.details;
    } catch (err) {
      console.log(err);
    }
  }
}
setHomestays();

async function setSlider() {
  const response = await fetch("http://localhost:5000/show-rooms")
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
  let roomDetails = response.showRooms;
  slideCounter = Object.keys(roomDetails).length;
  const sliderDetails = document.getElementById("show-room-details");
  const sliderPictures = document.getElementById("show-room-pictures");
  for (let i = 0; i < slideCounter; i++) {
    sliderPictures.innerHTML += `<img id="carouselSlideRoom${
      i + 1
    }" class="carouselSlide" alt="room" />`;
  }
  let roomCounter = 1;
  for (const values in roomDetails) {
    document.getElementById(`carouselSlideRoom${roomCounter}`).src =
      roomDetails[values].url;
    roomCounter++;
    sliderDetails.innerHTML += `<div class="w-100 d-flex flex-column justify-content-start p-5">
    <p id="showRoomHeading" class="display-4">${roomDetails[values].heading}</p>
    <p id="showRoomPrice">${roomDetails[values].price}</p>
    <p id="showRoomDetails">${roomDetails[values].details}</p>
    <div class="container">
      <div class="row">
        <div class="col">Bed:</div>
        <div id="bed-size" class="col">${roomDetails[values].bedSize}</div>
        <div class="w-100"></div>
        <div class="col">Capacity:</div>
        <div id="capacity" class="col">${roomDetails[values].capacity}</div>
        <div class="w-100"></div>
        <div class="col">Room size:</div>
        <div id="room-size" class="col">${roomDetails[values].roomSize}</div>
        <div class="w-100"></div>
        <div class="col">View:</div>
        <div id="hotel-view" class="col">${roomDetails[values].hotelView}</div>
      </div>
    </div>
    <div class="d-flex justify-content-center align-item-center">
      <button class="btn p-2 m-4 w-50">
        <a class="text-decoration-none text-light" href="#"
          >View Detaiks</a
        >
      </button>
    </div>
  </div>`;
  }
  document
    .querySelectorAll(".show-room-details>div")
    .forEach((carouselDetailsSlide, index) => {
      carouselDetailsSlide.style.left = `${index * 150}%`;
    });
  document
    .querySelectorAll(".carouselSlide")
    .forEach((carouselSlide, index) => {
      carouselSlide.style.left = `${index * 150}%`;
    });
}
setSlider();

const goPreviousSlide = () => {
  slideCounter = (slideCounter - 1) % 3;
  if (slideCounter < 0) {
    slideCounter = 0;
  }
  carouselSlideImage();
  carouselDetailsSlide();
};
const goNextSlide = () => {
  slideCounter = (slideCounter + 1) % 3;
  carouselSlideImage();
  carouselDetailsSlide();
};

const carouselSlideImage = () => {
  document.querySelectorAll(".carouselSlide").forEach((carouselSlide) => {
    carouselSlide.style.transform = `translateX(-${slideCounter * 150}%)`;
  });
};

const carouselDetailsSlide = () => {
  document
    .querySelectorAll(".show-room-details>div")
    .forEach((carouselDetailsSlide) => {
      carouselDetailsSlide.style.transform = `translateX(-${
        slideCounter * 150
      }%)`;
    });
};

async function setOurHostelServices() {
  const response = await fetch("http://localhost:5000/our-hotel-services")
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
  const ourHostelServices = document.getElementById(
    "section-why-choose-our-hostel"
  );
  for (const values in response.ourHostelServices) {
    ourHostelServices.innerHTML += `<div class="p-4 m-4">
      <img id="our-hostel-service-1-image" src="${response.ourHostelServices[values].url}" class="w-25" alt="logo" />
      <div class="d-flex flex-column">
        <p id="our-hostel-service-1-heading" class="fs-3"${response.ourHostelServices[values].heading}></p>
        <p id="our-hostel-service-1-details">${response.ourHostelServices[values].details}</p>
      </div>
    </div>`;
  }
}
setOurHostelServices();

async function setServies() {
  const response = await fetch("http://localhost:5000/services")
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
  const servicesSectionDiv = document.getElementById("services-section");
  let numberOfCards = 0;
  for (const key in response.services) {
    numberOfCards++;
    if (numberOfCards > 4) {
      break;
    }
    servicesSectionDiv.innerHTML += `<div class="services d-flex flex-column gap-1 p-4">
    <img class="w-100" src="${response.services[key].url}" alt="wellness" />
    <p class="deep-blue-color">${response.services[key].heading}</p>
    <p class="fs-4">${response.services[key].subHeading}</p>
    <p>${response.services[key].details}</p>
    <a class="text-decoration-none deep-blue-color" href="#"
      >Discover more →</a
    >
  </div>`;
  }
}
setServies();

async function setReviews() {
  const response = await fetch("http://localhost:5000/reviews")
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
  const reviewsSection = document.getElementById("reviews");
  for (const key in response.reviews) {
    let stars = "";
    for (let i = 0; i < response.reviews[key].stars; i++) {
      stars += `<i class="fa-sharp fa-solid fa-circle"></i>`;
    }
    reviewsSection.innerHTML += `<div class="col-md-4">
    <div class="card p-3 mb-2">
      <div class="d-flex flex-column">
        <div class="d-flex flex-column">
          <div class="d-flex flex-row justify-content-start">
            <img
              class="rounded-circle"
              src="${response.reviews[key].picture}"
              alt="people"
            />
            <div class="d-flex flex-column px-4">
              <p>${response.reviews[key].name}</p>
              <p class="grey-color">${response.reviews[key].date}</p>
            </div>
            <img
              src="${response.reviews[key].logo}"
              class="rounded-circle position-absolute end-0"
              alt="logo"
            />
          </div>
          <div class="d-flex flex-row gap-1 p-2 py-4 rating-symbol">
            ${stars}
          </div>
        </div>
        <p>${response.reviews[key].recommendation}</p>
        <p>${response.reviews[key].recommendationComment}</p>
      </div>
    </div>
  </div>`;
  }
}
setReviews();

async function setLocationSectionImages() {
  const response = await fetch("http://localhost:5000/location")
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
  flowerLogo.src = response.location.flowerLogo;
  planeLogo.src = response.location.planeLogo;
  busLogo.src = response.location.busLogo;
  vanLogo.src = response.location.vanLogo;
  locationSectionImage1.src = response.location.largeTravelPicture;
  locationSectionImage2.src = response.location.smallTravelPicture1;
  locationSectionImage3.src = response.location.smallTravelPicture2;
}
setLocationSectionImages()
