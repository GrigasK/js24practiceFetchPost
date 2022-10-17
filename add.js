const PRROPERTY_ENDPOINT = "https://robust-safe-crafter.glitch.me/";

document.getElementById("nav-but").addEventListener("click", () => {
  window.location.href = "index.html";
});

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const url = document.getElementById("url-input").value.trim();
  const price = document.getElementById("price-input").value.trim();
  const convPrice = parseInt(price);
  const description = document.getElementById("description-input").value.trim();
  const city = document.getElementById("city-input").value.trim();

  if (
    url.length == 0 ||
    city.length == 0 ||
    price.length == 0 ||
    description.length == 0
  ) {
    alert("ERROR");
  } else {
    const data = {
      image: url,
      city: city,
      price: convPrice,
      description: description,
    };

    sendData(PRROPERTY_ENDPOINT, data);
  }
});

async function sendData(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const responseData = await response.json();
      console.log(responseData);
    }
  } catch (error) {
    console.error(error);
  }
}
