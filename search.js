const places = [
  { name: "Adilabad", state: "Telangana", country: "India", type: "District" },
  { name: "Agra", state: "Uttar Pradesh", country: "India", type: "City" },
  { name: "Ahmedabad", state: "Gujarat", country: "India", type: "City" },
  { name: "Ajmer", state: "Rajasthan", country: "India", type: "District" },
  { name: "Alappuzha", state: "Kerala", country: "India", type: "District" },
  { name: "Aligarh", state: "Uttar Pradesh", country: "India", type: "District" },
  { name: "Allahabad", state: "Uttar Pradesh", country: "India", type: "District" },
  { name: "Almora", state: "Uttarakhand", country: "India", type: "District" },
  { name: "Alwar", state: "Rajasthan", country: "India", type: "District" },
  { name: "Amravati", state: "Maharashtra", country: "India", type: "District" },
  { name: "Amritsar", state: "Punjab", country: "India", type: "District" },
  { name: "Anantapur", state: "Andhra Pradesh", country: "India", type: "District" },
  { name: "Anantnag", state: "Jammu and Kashmir", country: "India", type: "District" },
  { name: "Aurangabad", state: "Maharashtra", country: "India", type: "District" },
  { name: "Ayodhya", state: "Uttar Pradesh", country: "India", type: "District" },
  { name: "Azamgarh", state: "Uttar Pradesh", country: "India", type: "District" },
  { name: "Bangalore", state: "Karnataka", country: "India", type: "City" },
  { name: "Bankura", state: "West Bengal", country: "India", type: "District" },
  { name: "Barabanki", state: "Uttar Pradesh", country: "India", type: "District" },
  { name: "Bareilly", state: "Uttar Pradesh", country: "India", type: "District" },
  { name: "Barmer", state: "Rajasthan", country: "India", type: "District" },
  { name: "Belagavi", state: "Karnataka", country: "India", type: "District" },
  { name: "Bengaluru", state: "Karnataka", country: "India", type: "District" },
  { name: "Bhagalpur", state: "Bihar", country: "India", type: "District" },
  { name: "Bharatpur", state: "Rajasthan", country: "India", type: "District" },
  { name: "Bharuch", state: "Gujarat", country: "India", type: "District" },
  { name: "Bhavnagar", state: "Gujarat", country: "India", type: "District" },
  { name: "Bhilwara", state: "Rajasthan", country: "India", type: "District" },
  { name: "Bhopal", state: "Madhya Pradesh", country: "India", type: "City" },
  { name: "Bhubaneswar", state: "Odisha", country: "India", type: "City" },
  { name: "Bijnor", state: "Uttar Pradesh", country: "India", type: "District" },
  { name: "Bikaner", state: "Rajasthan", country: "India", type: "District" },
  { name: "Bilaspur", state: "Chhattisgarh", country: "India", type: "District" },
  { name: "Bokaro", state: "Jharkhand", country: "India", type: "District" },
  { name: "Bulandshahr", state: "Uttar Pradesh", country: "India", type: "District" },
  { name: "Chandigarh", state: "Chandigarh", country: "India", type: "City" },
  { name: "Chandrapur", state: "Maharashtra", country: "India", type: "District" },
  { name: "Chennai", state: "Tamil Nadu", country: "India", type: "City" },
  { name: "Chhindwara", state: "Madhya Pradesh", country: "India", type: "District" },
  { name: "Chikkaballapur", state: "Karnataka", country: "India", type: "District" },
  { name: "Chikmagalur", state: "Karnataka", country: "India", type: "District" },
  { name: "Chitradurga", state: "Karnataka", country: "India", type: "District" },
  { name: "Chittoor", state: "Andhra Pradesh", country: "India", type: "District" },
  { name: "Coimbatore", state: "Tamil Nadu", country: "India", type: "City" },
  { name: "Cooch Behar", state: "West Bengal", country: "India", type: "District" },
  { name: "Cuddalore", state: "Tamil Nadu", country: "India", type: "District" },
  { name: "Cuttack", state: "Odisha", country: "India", type: "District" },
  { name: "Dakshina Kannada", state: "Karnataka", country: "India", type: "District" },
  { name: "Darbhanga", state: "Bihar", country: "India", type: "District" },
  { name: "Darjeeling", state: "West Bengal", country: "India", type: "District" },
  { name: "Dehradun", state: "Uttarakhand", country: "India", type: "District" },
  { name: "Delhi", state: "Delhi", country: "India", type: "City" },
  { name: "Dhanbad", state: "Jharkhand", country: "India", type: "District" },
  { name: "Dharwad", state: "Karnataka", country: "India", type: "District" },
  { name: "Dibrugarh", state: "Assam", country: "India", type: "District" },
  { name: "Dimapur", state: "Nagaland", country: "India", type: "District" },
  { name: "Dindigul", state: "Tamil Nadu", country: "India", type: "District" },
  { name: "East Champaran", state: "Bihar", country: "India", type: "District" },
  { name: "East Godavari", state: "Andhra Pradesh", country: "India", type: "District" },
  { name: "Ernakulam", state: "Kerala", country: "India", type: "District" },
  { name: "Erode", state: "Tamil Nadu", country: "India", type: "District" },
  { name: "Faridabad", state: "Haryana", country: "India", type: "District" },
  { name: "Firozabad", state: "Uttar Pradesh", country: "India", type: "District" },
  { name: "Gandhinagar", state: "Gujarat", country: "India", type: "District" },
  { name: "Gaya", state: "Bihar", country: "India", type: "District" },
  { name: "Gorakhpur", state: "Uttar Pradesh", country: "India", type: "District" },
  { name: "Guntur", state: "Andhra Pradesh", country: "India", type: "District" },
  { name: "Guwahati", state: "Assam", country: "India", type: "City" },
  { name: "Gwalior", state: "Madhya Pradesh", country: "India", type: "City" },
  { name: "Haridwar", state: "Uttarakhand", country: "India", type: "District" },
  { name: "Hisar", state: "Haryana", country: "India", type: "District" },
  { name: "Hooghly", state: "West Bengal", country: "India", type: "District" },
  { name: "Howrah", state: "West Bengal", country: "India", type: "District" },
  { name: "Hyderabad", state: "Telangana", country: "India", type: "City" },
  { name: "Idukki", state: "Kerala", country: "India", type: "District" },
  { name: "Indore", state: "Madhya Pradesh", country: "India", type: "City" },
  { name: "Jabalpur", state: "Madhya Pradesh", country: "India", type: "District" },
  { name: "Jaipur", state: "Rajasthan", country: "India", type: "City" },
  { name: "Jalandhar", state: "Punjab", country: "India", type: "District" },
  { name: "Jalgaon", state: "Maharashtra", country: "India", type: "District" },
  { name: "Jammu", state: "Jammu and Kashmir", country: "India", type: "City" },
  { name: "Jamnagar", state: "Gujarat", country: "India", type: "District" },
  { name: "Jodhpur", state: "Rajasthan", country: "India", type: "City" },
  { name: "Jorhat", state: "Assam", country: "India", type: "District" },
  { name: "Junagadh", state: "Gujarat", country: "India", type: "District" },
  { name: "Kadapa", state: "Andhra Pradesh", country: "India", type: "District" },
  { name: "Kanchipuram", state: "Tamil Nadu", country: "India", type: "District" },
  { name: "Kannur", state: "Kerala", country: "India", type: "District" },
  { name: "Kanpur", state: "Uttar Pradesh", country: "India", type: "City" },
  { name: "Kanyakumari", state: "Tamil Nadu", country: "India", type: "District" },
  { name: "Kapurthala", state: "Punjab", country: "India", type: "District" },
  { name: "Karimnagar", state: "Telangana", country: "India", type: "District" },
  { name: "Karnal", state: "Haryana", country: "India", type: "District" },
  { name: "Karur", state: "Tamil Nadu", country: "India", type: "District" },
  { name: "Katihar", state: "Bihar", country: "India", type: "District" },
  { name: "Khammam", state: "Telangana", country: "India", type: "District" },
  { name: "Kochi", state: "Kerala", country: "India", type: "City" },
  { name: "Kohima", state: "Nagaland", country: "India", type: "District" },
  { name: "Kolar", state: "Karnataka", country: "India", type: "District" },
  { name: "Kolkata", state: "West Bengal", country: "India", type: "City" },
  { name: "Kollam", state: "Kerala", country: "India", type: "District" },
  { name: "Kota", state: "Rajasthan", country: "India", type: "District" },
  { name: "Kottayam", state: "Kerala", country: "India", type: "District" },
  { name: "Kozhikode", state: "Kerala", country: "India", type: "District" },
  { name: "Kurnool", state: "Andhra Pradesh", country: "India", type: "District" },
  { name: "Latur", state: "Maharashtra", country: "India", type: "District" },
  { name: "Leh", state: "Ladakh", country: "India", type: "District" },
  { name: "Lucknow", state: "Uttar Pradesh", country: "India", type: "City" },
  { name: "Ludhiana", state: "Punjab", country: "India", type: "District" },
  { name: "Madurai", state: "Tamil Nadu", country: "India", type: "City" },
  { name: "Malappuram", state: "Kerala", country: "India", type: "District" },
  { name: "Mandsaur", state: "Madhya Pradesh", country: "India", type: "District" },
  { name: "Mangalore", state: "Karnataka", country: "India", type: "City" },
  { name: "Meerut", state: "Uttar Pradesh", country: "India", type: "District" },
  { name: "Mumbai", state: "Maharashtra", country: "India", type: "City" },
  { name: "Mysuru", state: "Karnataka", country: "India", type: "City" },
  { name: "Nagpur", state: "Maharashtra", country: "India", type: "City" },
  { name: "Nashik", state: "Maharashtra", country: "India", type: "District" },
  { name: "New Delhi", state: "Delhi", country: "India", type: "City" },
  { name: "Noida", state: "Uttar Pradesh", country: "India", type: "City" },
  { name: "North 24 Parganas", state: "West Bengal", country: "India", type: "District" },
  { name: "North Goa", state: "Goa", country: "India", type: "District" },
  { name: "Palakkad", state: "Kerala", country: "India", type: "District" },
  { name: "Patna", state: "Bihar", country: "India", type: "City" },
  { name: "Pune", state: "Maharashtra", country: "India", type: "City" },
  { name: "Puri", state: "Odisha", country: "India", type: "District" },
  { name: "Raipur", state: "Chhattisgarh", country: "India", type: "City" },
  { name: "Rajkot", state: "Gujarat", country: "India", type: "District" },
  { name: "Rajnandgaon", state: "Chhattisgarh", country: "India", type: "District" },
  { name: "Ramanathapuram", state: "Tamil Nadu", country: "India", type: "District" },
  { name: "Ranchi", state: "Jharkhand", country: "India", type: "City" },
  { name: "Ratnagiri", state: "Maharashtra", country: "India", type: "District" },
  { name: "Saharanpur", state: "Uttar Pradesh", country: "India", type: "District" },
  { name: "Salem", state: "Tamil Nadu", country: "India", type: "District" },
  { name: "Sambalpur", state: "Odisha", country: "India", type: "District" },
  { name: "Satara", state: "Maharashtra", country: "India", type: "District" },
  { name: "Shimla", state: "Himachal Pradesh", country: "India", type: "District" },
  { name: "Sikar", state: "Rajasthan", country: "India", type: "District" },
  { name: "Siliguri", state: "West Bengal", country: "India", type: "City" },
  { name: "South Goa", state: "Goa", country: "India", type: "District" },
  { name: "Srinagar", state: "Jammu and Kashmir", country: "India", type: "City" },
  { name: "Surat", state: "Gujarat", country: "India", type: "City" },
  { name: "Thane", state: "Maharashtra", country: "India", type: "District" },
  { name: "Thanjavur", state: "Tamil Nadu", country: "India", type: "District" },
  { name: "Thiruvananthapuram", state: "Kerala", country: "India", type: "District" },
  { name: "Thoothukudi", state: "Tamil Nadu", country: "India", type: "District" },
  { name: "Thrissur", state: "Kerala", country: "India", type: "District" },
  { name: "Tiruchirappalli", state: "Tamil Nadu", country: "India", type: "District" },
  { name: "Tirunelveli", state: "Tamil Nadu", country: "India", type: "District" },
  { name: "Tiruppur", state: "Tamil Nadu", country: "India", type: "District" },
  { name: "Udaipur", state: "Rajasthan", country: "India", type: "District" },
  { name: "Udupi", state: "Karnataka", country: "India", type: "District" },
  { name: "Vadodara", state: "Gujarat", country: "India", type: "City" },
  { name: "Varanasi", state: "Uttar Pradesh", country: "India", type: "City" },
  { name: "Vellore", state: "Tamil Nadu", country: "India", type: "District" },
  { name: "Vijayawada", state: "Andhra Pradesh", country: "India", type: "City" },
  { name: "Visakhapatnam", state: "Andhra Pradesh", country: "India", type: "City" },
  { name: "Warangal", state: "Telangana", country: "India", type: "District" },
];

const quickLookup = {
  Hyderabad: "Hyderabad",
  Mumbai: "Mumbai",
  Chennai: "Chennai",
  Bangalore: "Bangalore",
};

const sortedPlaces = [...places].sort((a, b) => a.name.localeCompare(b.name));

const input = document.getElementById("cityInput");
const listContainer = document.getElementById("autocompleteList");
const resultDiv = document.getElementById("result");
const searchBtn = document.getElementById("searchBtn");

function placeSearchText(place) {
  return `${place.name} ${place.state} ${place.country} ${place.type}`.toLowerCase();
}

function filterPlaces(query) {
  const lowerQuery = query.toLowerCase();
  return sortedPlaces.filter((place) => placeSearchText(place).includes(lowerQuery));
}

function renderPlaceMeta(place) {
  return `${place.state}, ${place.country}`;
}

function displayList(filteredPlaces) {
  listContainer.innerHTML = "";

  if (filteredPlaces.length === 0) {
    listContainer.classList.add("hidden");
    return;
  }

  filteredPlaces.slice(0, 80).forEach((place) => {
    const item = document.createElement("div");
    item.className =
      "cursor-pointer rounded-xl px-4 py-3 transition hover:bg-sky-50";

    item.innerHTML = `
      <p class="text-sm font-semibold text-slate-800">${place.name}</p>
      <p class="mt-1 text-xs text-slate-400">${renderPlaceMeta(place)}</p>
    `;

    item.addEventListener("click", () => {
      input.value = place.name;
      listContainer.classList.add("hidden");
      showSearchResult(place);
    });

    listContainer.appendChild(item);
  });

  listContainer.classList.remove("hidden");
}

function findExactPlace(query) {
  const lowerQuery = query.toLowerCase();
  return sortedPlaces.find(
    (place) =>
      place.name.toLowerCase() === lowerQuery ||
      `${place.name}, ${place.state}`.toLowerCase() === lowerQuery
  );
}

function findBestPlace(query) {
  return findExactPlace(query) || filterPlaces(query)[0] || null;
}

input.addEventListener("focus", () => {
  displayList(sortedPlaces);
  input.classList.add("ring-4", "ring-sky-100");
});

input.addEventListener("blur", () => {
  input.classList.remove("ring-4", "ring-sky-100");
});

document.addEventListener("click", (e) => {
  if (!e.target.closest("#cityInput") && !e.target.closest("#autocompleteList")) {
    listContainer.classList.add("hidden");
  }
});

input.addEventListener("input", () => {
  const query = input.value.trim();
  displayList(query === "" ? sortedPlaces : filterPlaces(query));
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const place = findBestPlace(input.value.trim());
    if (place) {
      showSearchResult(place);
      listContainer.classList.add("hidden");
    }
  }
});

searchBtn?.addEventListener("click", () => {
  searchBtn.style.transform = "scale(1)";
  const place = findBestPlace(input.value.trim());
  if (place) {
    showSearchResult(place);
    listContainer.classList.add("hidden");
  }
});

searchBtn?.addEventListener("mouseenter", () => {
  searchBtn.style.transform = "scale(1.05)";
  searchBtn.style.boxShadow = "0 12px 24px rgba(240, 85, 19, 0.28)";
});

searchBtn?.addEventListener("mouseleave", () => {
  searchBtn.style.transform = "scale(1)";
  searchBtn.style.boxShadow = "";
});

searchBtn?.addEventListener("click", () => {
  searchBtn.style.transform = "scale(1)";
  searchBtn.style.boxShadow = "";
});

document.querySelectorAll(".quick-city").forEach((button) => {
  button.addEventListener("click", () => {
    const place = findExactPlace(quickLookup[button.dataset.city] || button.dataset.city);
    if (place) {
      input.value = place.name;
      showSearchResult(place);
      listContainer.classList.add("hidden");
    }
  });
});

function showSearchResult(place) {
  resultDiv.innerHTML = `
    <div class="space-y-3 text-left">
      <div class="flex items-center gap-3">
        <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
          <i class="fa-solid fa-location-dot text-xl"></i>
        </div>
        <div>
          <p class="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">${place.type}</p>
          <p class="text-xl font-bold text-slate-900">${place.name}</p>
          <p class="text-sm text-slate-400">${renderPlaceMeta(place)}</p>
        </div>
      </div>
      <p class="text-sm leading-6 text-slate-600">
        Search page ready. You can now use this selected place to fetch the weather report.
      </p>
    </div>
  `;
}

const STORAGE_KEY = "favoriteCities";

function addToFavorites(cityData) {
  let favorites = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  const alreadyExists = favorites.some(item => item.city === cityData.city);

  if (!alreadyExists) {
    favorites.push(cityData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    alert(cityData.city + " added to favorites");
  } else {
    alert(cityData.city + " is already in favorites");
  }
}
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn?.addEventListener("click", () => {
  mobileMenu?.classList.toggle("hidden");
});