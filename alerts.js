const weatherData = {
  Chennai: [
    {
      type: "Rain",
      message: "Heavy rainfall expected",
      color: "bg-blue-500",
      icon: "fa-cloud-rain"
    }
  ],

  Delhi: [
    {
      type: "Heat",
      message: "Temperature may exceed 40°C",
      color: "bg-red-500",
      icon: "fa-sun"
    }
  ],

  Mumbai: [
    {
      type: "Storm",
      message: "Strong winds and lightning expected",
      color: "bg-yellow-400",
      icon: "fa-bolt"
    }
  ],

  Bangalore: [
    {
      type: "Cloudy",
      message: "Overcast weather expected",
      color: "bg-gray-400",
      icon: "fa-cloud"
    }
  ],

  Hyderabad: [
    {
      type: "Sunny",
      message: "Clear sky and hot weather",
      color: "bg-orange-400",
      icon: "fa-sun"
    }
  ],

  Kolkata: [
    {
      type: "Rain",
      message: "Moderate rainfall expected",
      color: "bg-blue-400",
      icon: "fa-cloud-showers-heavy"
    }
  ]
};
const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");

menuBtn.addEventListener("click", () => {
  sideMenu.classList.remove("translate-x-full");
  overlay.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  sideMenu.classList.add("translate-x-full");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", () => {
  sideMenu.classList.add("translate-x-full");
  overlay.classList.add("hidden");
});
function showWeather(event, city) {
  const container = document.getElementById("alertsContainer");

  // highlight selected button
  const buttons = document.querySelectorAll(".cityBtn");
  buttons.forEach(btn => {
    btn.classList.remove("bg-blue-500", "text-white");
    btn.classList.add("bg-blue-200");
  });

  event.target.classList.remove("bg-blue-200");
  event.target.classList.add("bg-blue-500", "text-white");

  // get alerts
  const alerts = weatherData[city];

  if (!alerts) {
    container.innerHTML = `
      <div class="bg-white p-4 rounded-xl shadow text-center">
        No data available
      </div>
    `;
    return;
  }

  // generate UI
  const output = alerts.map(alert => `
    <div class="${alert.color} text-white p-5 rounded-xl shadow-lg transition transform hover:scale-105">
      
      <h3 class="text-lg font-bold flex items-center gap-2">
        <i class="fa-solid ${alert.icon}"></i>
        ${alert.type} Warning
      </h3>

      <p>${alert.message}</p>

    </div>
  `).join("");

  container.innerHTML = output;
  
}