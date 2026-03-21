const STORAGE_KEY = "favoriteCities";

const sampleCities = [
  {
    city: "Coimbatore",
    temperature: "29°C",
    weather: "Sunny",
    humidity: "62%",
    wind: "12 km/h"
  },
  {
    city: "Chennai",
    temperature: "33°C",
    weather: "Partly Cloudy",
    humidity: "70%",
    wind: "15 km/h"
  }
];

const favoritesContainer = document.getElementById("favoritesContainer");
const emptyMessage = document.getElementById("emptyMessage");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

// mobile menu toggle
menuBtn.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
});

// first load sample data
function loadInitialData() {
  const existingData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (!existingData || existingData.length === 0) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleCities));
  }
}

function getFavorites() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveFavorites(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function removeFavorite(cityName) {
  const favorites = getFavorites();
  const updatedFavorites = favorites.filter(function (item) {
    return item.city !== cityName;
  });

  saveFavorites(updatedFavorites);
  displayFavorites();
}

function createCityCard(cityData) {
  return `
    <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">
      <div class="flex justify-between items-start mb-4">
        <div>
          <h3 class="text-2xl font-bold text-gray-800">${cityData.city}</h3>
          <p class="text-gray-500">Today Weather</p>
        </div>

        <button onclick="removeFavorite('${cityData.city}')" class="text-red-500 text-xl hover:scale-110 transition">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>

      <div class="mb-4">
        <p class="text-4xl font-bold mb-2" style="color: rgb(240, 85, 19);">
          ${cityData.temperature}
        </p>
        <p class="text-lg text-gray-700">${cityData.weather}</p>
      </div>

      <div class="space-y-2 text-gray-600">
        <p><span class="font-semibold">Humidity:</span> ${cityData.humidity}</p>
        <p><span class="font-semibold">Wind:</span> ${cityData.wind}</p>
      </div>

      <button class="mt-5 w-full text-white py-2 rounded-lg font-semibold hover:opacity-90"
        style="background-color: rgb(240, 85, 19);">
        View Details
      </button>
    </div>
  `;
}

function displayFavorites() {
  const favorites = getFavorites();
  favoritesContainer.innerHTML = "";

  if (favorites.length === 0) {
    emptyMessage.classList.remove("hidden");
  } else {
    emptyMessage.classList.add("hidden");

    favorites.forEach(function (item) {
      favoritesContainer.innerHTML += createCityCard(item);
    });
  }
}

loadInitialData();
displayFavorites();