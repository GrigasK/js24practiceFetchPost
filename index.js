const PRROPERTY_ENDPOINT = "https://robust-safe-crafter.glitch.me/";

document.getElementById("add-property-nav").addEventListener("click", () => {
  window.location.href = "add.html";
});

async function getPropertyData(url) {
  try {
    const response = await fetch(url);
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log(error);
    return null;
  }

  //   return await fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error));
}

document.querySelector("button").addEventListener("click", () => {
  const cities = document.querySelector("button").value;
  console.log(cities);
});

async function getPropertyDataFromURL(url) {
  const data = await getPropertyData(url);
  drawProperties(data);
  console.log(data);
}

function drawProperties(data) {
  const cards = document.getElementById("cards");

  data.forEach((dataItem) => {
    const mainCard = document.createElement("div");
    mainCard.classList.add("cards-properties");

    const imgContainer = document.createElement("div");

    const img = document.createElement("img");
    img.classList.add("img-properties");
    img.src = dataItem.image;
    imgContainer.append(img);

    const descriptionContainer = document.createElement("div");
    const price = document.createElement("h1");
    price.textContent = dataItem.price + " \u20AC";

    const city = document.createElement("p");
    city.textContent = dataItem.city;
    city.style.fontSize = "30px";

    const description = document.createElement("p");
    description.textContent = dataItem.description;
    description.style.fontSize = "15px";

    descriptionContainer.append(price, city, description);

    mainCard.append(imgContainer, descriptionContainer);
    cards.append(mainCard);
  });
}

getPropertyDataFromURL(PRROPERTY_ENDPOINT);
