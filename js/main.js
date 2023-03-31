const carouselSlides = document.querySelectorAll(".carouselSlide");
const form = document.getElementById("page-banner-form");

const homestayAddImage1 = document.getElementById("homestay1");
const homestayAddImage2 = document.getElementById("homestay2");
const homestayAddImage3 = document.getElementById("homestay3");
const signature = document.getElementById("signature");

const showRoomHeading = document.getElementById("showRoomHeading");
const showRoomPrice = document.getElementById("showRoomPrice");
const showRoomDetails = document.getElementById("showRoomDetails");
const roomBedSize = document.getElementById("bed-size")
const roomSize = document.getElementById("room-size")
const roomView = document.getElementById("hotel-view")
const roomCapacity = document.getElementById("capacity")

const experienceWellnessServiceImage = document.getElementById("wellnessService")
const experienceWellnessServiceHEading = document.getElementById("wellnessServiceHeading")
const experienceWellnessServiceSubHeading = document.getElementById("wellnessServiceSubHeading")
const experienceWellnessServiceDetails = document.getElementById("wellnessServiceDetails")

const experienceGiftCardServiceImage = document.getElementById("giftCardService")
const experienceGiftCardServiceHeading = document.getElementById("giftCardServiceHeading")
const experienceGiftCardServiceSubHeading = document.getElementById("giftCardServiceSubHeading")
const experienceGiftCardServiceDetails = document.getElementById("giftCardServiceDetails")

const experienceSpaServiceImage = document.getElementById("spaService")
const experienceSpaServiceHeading = document.getElementById("spaServiceHeading")
const experienceSpaServiceSubHeading = document.getElementById("spaServiceSubHeading")
const experienceSpaServiceDetails = document.getElementById("spaServiceDetails")

const experienceAdventureServiceImage = document.getElementById("adventureService")
const experienceAdventureServiceHeading = document.getElementById("adventureServiceHeading")
const experienceAdventureServiceSubHeading = document.getElementById("adventureServiceSubHeading")
const experienceAdventureServiceDetails = document.getElementById("adventureServiceDetails")

const activity1 = document.getElementById("activity1");
const activity2 = document.getElementById("activity2")

const carouselSlideStandardRoomImage = document.getElementById("carouselSlideStandardRoom")
const carouselSlideDulexeRoomImage = document.getElementById("carouselSlideDulexeRoom")
const carouselSlideSuperDulexeRoomImage = document.getElementById("carouselSlideSuperDulexeRoom")

const flowerLogo = document.getElementById("location-section-flower-logo");
const planeLogo = document.getElementById("location-section-plane-logo")
const busLogo = document.getElementById("location-section-bus-logo")
const vanLogo = document.getElementById("location-section-van-logo")

const locationSectionImage1 = document.getElementById("location-section-large-travel-picture")
const locationSectionImage2 = document.getElementById("location-section-small-travel-picture-1")
const locationSectionImage3 = document.getElementById("location-section-small-travel-picture-2")

const homestayAddHeading = document.getElementById("homestay-adds-heading");
const homestayAddSubHeading = document.getElementById("homestay-adds-sub-heading")
const homestayAddDetails = document.getElementById("homestay-adds-details")

const ourHostelService1Image = document.getElementById("our-hostel-service-1-image")
const ourHostelService1Heading = document.getElementById("our-hostel-service-1-heading")
const ourHostelService1Details = document.getElementById("our-hostel-service-1-details")

const ourHostelService2Image = document.getElementById("our-hostel-service-2-image")
const ourHostelService2Heading = document.getElementById("our-hostel-service-2-heading")
const ourHostelService2Details = document.getElementById("our-hostel-service-2-details")

const ourHostelService3Image = document.getElementById("our-hostel-service-3-image")
const ourHostelService3Heading = document.getElementById("our-hostel-service-3-heading")
const ourHostelService3Details = document.getElementById("our-hostel-service-3-details")

const review1Logo = document.getElementById("review-1-logo")
const review2Logo = document.getElementById("review-2-logo")
const review3Logo = document.getElementById("review-3-logo")
const reviewer1Image = document.getElementById("reviewer-1-Image")
const reviewer1Name = document.getElementById("reviewer-1-name")
const review1Date = document.getElementById("review-1-date")
const review1Recommendation = document.getElementById("review-1-recommendation")
const review1RecommendationComment = document.getElementById("review-1-recommendation-comment")
const reviewer2Image = document.getElementById("reviewer-2-Image")
const reviewer2Name = document.getElementById("reviewer-2-name")
const review2Date = document.getElementById("review-2-date")
const review2Recommendation = document.getElementById("review-2-recommendation")
const review2RecommendationComment = document.getElementById("review-2-recommendation-comment")
const reviewer3Image = document.getElementById("reviewer-3-Image")
const reviewer3Name = document.getElementById("reviewer-3-name")
const review3Date = document.getElementById("review-3-date")
const review3Recommendation = document.getElementById("review-3-recommendation")
const review3RecommendationComment = document.getElementById("review-3-recommendation-comment")

let slideCounter = 0;

async function getDataFromBackend() {
  const response = await fetch(`http://localhost:5000/`)
    .then(function (response) {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
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

      homestayAddImage1.src = response.homestays.homestay1;
      homestayAddImage2.src = response.homestays.homestay2;
      homestayAddImage3.src = response.homestays.homestay3;
      signature.src = response.text.homestayAdd.signature;

      experienceWellnessServiceImage.src =
        response.wellnessService.url;
      experienceWellnessServiceHEading.textContent =
        response.wellnessService.heading;
      experienceWellnessServiceSubHeading.textContent =
        response.wellnessService.subHeading;
      experienceWellnessServiceDetails.textContent =
        response.wellnessService.details;
      experienceGiftCardServiceImage.src =
        response.giftCardService.url;
      experienceGiftCardServiceHeading.textContent =
        response.giftCardService.heading;
      experienceGiftCardServiceSubHeading.textContent =
        response.giftCardService.subHeading;
      experienceGiftCardServiceDetails.textContent =
        response.giftCardService.details;
      experienceSpaServiceImage.src = response.spaService.url;
      experienceSpaServiceHeading.textContent =
        response.spaService.heading;
      experienceSpaServiceSubHeading.textContent =
        response.spaService.subHeading;
      experienceSpaServiceDetails.textContent =
        response.spaService.details;
      experienceAdventureServiceImage.src =
        response.adventureService.url;
      experienceAdventureServiceHeading.textContent =
        response.adventureService.heading;
      experienceAdventureServiceSubHeading.textContent =
        response.adventureService.subHeading;
      experienceAdventureServiceDetails.textContent =
        response.adventureService.details;

      activity1.src =
        response.activities.poolActivity;
      activity2.src =
        response.activities.forestHomestayActivity;

      carouselSlideStandardRoomImage.src =
        response.showRooms.standardRoom.url;
      carouselSlideDulexeRoomImage.src = response.showRooms.dulexRoom.url;
      carouselSlideSuperDulexeRoomImage.src =
        response.showRooms.superDulexRoom.url;

      flowerLogo.src =
        response.locationSection.flowerLogo;
      planeLogo.src =
        response.locationSection.planeLogo;
      busLogo.src =
        response.locationSection.busLogo;
      vanLogo.src =
        response.locationSection.vanLogo;
      locationSectionImage1.src =
        response.locationSection.largeTravelPicture;
      locationSectionImage2.src =
        response.locationSection.smallTravelPicture1;
      locationSectionImage3.src =
        response.locationSection.smallTravelPicture2;

      homestayAddHeading.textContent = response.text.homestayAdd.heading;
      homestayAddSubHeading.textContent = response.text.homestayAdd.subHeading;
      homestayAddDetails.textContent = response.text.homestayAdd.details;

      ourHostelService1Image.src = response.text.ourHostelServices.service1.url;
      ourHostelService1Heading.textContent = response.text.ourHostelServices.service1.heading;
      ourHostelService1Details.textContent = response.text.ourHostelServices.service1.details;
      ourHostelService2Image.src = response.text.ourHostelServices.service2.url;
      ourHostelService2Heading.textContent = response.text.ourHostelServices.service2.heading;
      ourHostelService2Details.textContent = response.text.ourHostelServices.service2.details;
      ourHostelService3Image.src = response.text.ourHostelServices.service3.url;
      ourHostelService3Heading.textContent = response.text.ourHostelServices.service3.heading;
      ourHostelService3Details.textContent = response.text.ourHostelServices.service3.details;

      review1Logo.src = response.text.reviews.logo
      review2Logo.src = response.text.reviews.logo
      review3Logo.src = response.text.reviews.logo
      reviewer1Image.src = response.text.reviews.review1.picture
      reviewer1Name.textContent = response.text.reviews.review1.name
      review1Date.textContent = response.text.reviews.review1.date
      review1Recommendation.textContent = response.text.reviews.review1.recommendation
      review1RecommendationComment.textContent = response.text.reviews.review1.recommendationComment
      reviewer2Image.src = response.text.reviews.review2.picture
      reviewer2Name.textContent = response.text.reviews.review2.name
      review2Date.textContent = response.text.reviews.review2.date
      review2Recommendation.textContent = response.text.reviews.review2.recommendation
      review2RecommendationComment.textContent = response.text.reviews.review2.recommendationComment
      reviewer3Image.src = response.text.reviews.review3.picture
      reviewer3Name.textContent = response.text.reviews.review3.name
      review3Date.textContent = response.text.reviews.review3.date
      review3Recommendation.textContent = response.text.reviews.review3.recommendation
      review3RecommendationComment.textContent = response.text.reviews.review3.recommendationComment

      setSliderData();
    } catch (err) {
      console.log(err);
    }
  }
}
getDataFromBackend();

async function setSliderData() {
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
    if (slideCounter === 0) {
      showRoomHeading.textContent =
        response.showRooms.standardRoom.heading;
      showRoomPrice.textContent =
        response.showRooms.standardRoom.price;
      showRoomDetails.textContent =
        response.showRooms.standardRoom.details;
      roomBedSize.textContent =
        response.showRooms.standardRoom.bedSize;
      roomCapacity.textContent =
        response.showRooms.standardRoom.capacity;
      roomSize.textContent =
        response.showRooms.standardRoom.roomSize;
      roomView.textContent =
        response.showRooms.standardRoom.hotelView;
    } else if (slideCounter === 1) {
      showRoomHeading.textContent =
        response.showRooms.dulexRoom.heading;
      showRoomPrice.textContent =
        response.showRooms.dulexRoom.price;
      showRoomDetails.textContent =
        response.showRooms.dulexRoom.details;
      roomBedSize.textContent =
        response.showRooms.dulexRoom.bedSize;
      roomCapacity.textContent =
        response.showRooms.dulexRoom.capacity;
      roomSize.textContent =
        response.showRooms.dulexRoom.roomSize;
      roomView.textContent =
        response.showRooms.dulexRoom.hotelView;
    } else if (slideCounter === 2) {
      showRoomHeading.textContent =
        response.showRooms.superDulexRoom.heading;
      showRoomPrice.textContent =
        response.showRooms.superDulexRoom.price;
      showRoomDetails.textContent =
        response.showRooms.superDulexRoom.details;
      roomBedSize.textContent =
        response.showRooms.superDulexRoom.bedSize;
      roomCapacity.textContent =
        response.showRooms.superDulexRoom.capacity;
      roomSize.textContent =
        response.showRooms.superDulexRoom.roomSize;
      roomView.textContent =
        response.showRooms.superDulexRoom.hotelView;
    }
  }
}

carouselSlides.forEach((carouselSlide, index) => {
  carouselSlide.style.left = `${index * 150}%`;
});

const goPreviousSlide = () => {
  slideCounter = (slideCounter - 1) % 3;
  if (slideCounter < 0) {
    slideCounter = 0;
  }
  carouselSlideImage();
  setSliderData();
};
const goNextSlide = () => {
  slideCounter = (slideCounter + 1) % 3;
  carouselSlideImage();
  setSliderData();
};

const carouselSlideImage = () => {
  carouselSlides.forEach((carouselSlide) => {
    carouselSlide.style.transform = `translateX(-${slideCounter * 150}%)`;
  });
};

function handleFormSubmit(event) {
  event.preventDefault();
  const checkInTime = document.getElementById("check-in").value
  const checkOutTime = document.getElementById("check-out").value
  const adults = document.getElementById("adults").value
  const childrens = document.getElementById("childrens").value
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
    alert("Form submitted successfully!")
  });
}
