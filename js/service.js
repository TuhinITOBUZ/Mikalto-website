async function setServies() {
  const response = await fetch("http://localhost:5000/services")
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
  const servicesSectionDiv = document.getElementById("services-section");
  for (const key in response.services) {
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
