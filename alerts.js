const weatherData = {

  Chennai: [
    {
      type: "Heat",
      message: "Temperature may exceed 40°C",
      color: "bg-red-500",
      icon: "fa-sun",
      update: "Updated 8 mins ago",
      time: "11 AM – 4 PM",
      advice: "Stay hydrated & avoid direct sunlight"
    }
  ],

  Delhi: [
    {
      type: "Rain",
      message: "Heavy rainfall expected",
      color: "bg-blue-500",
      icon: "fa-cloud-rain",
      update: "Updated 5 mins ago",
      time: "2 PM – 8 PM",
      advice: "Carry umbrella & avoid waterlogged areas"
    }
  ],

  Mumbai: [
    {
      type: "Storm",
      message: "Strong winds and lightning expected",
      color: "bg-yellow-600",
      icon: "fa-bolt",
      update: "Updated 10 mins ago",
      time: "6 PM – 11 PM",
      advice: "Stay indoors & avoid open areas"
    }
  ],

  Bangalore: [
    {
      type: "Cloudy",
      message: "Overcast weather expected",
      color: "bg-gray-400",
      icon: "fa-cloud",
      update: "Updated 12 mins ago",
      time: "All day",
      advice: "Carry light jacket, chances of drizzle"
    }
  ],

  Hyderabad: [
    {
      type: "Sunny",
      message: "Clear sky and hot weather",
      color: "bg-orange-400",
      icon: "fa-sun",
      update: "Updated 6 mins ago",
      time: "10 AM – 3 PM",
      advice: "Use sunscreen & drink plenty of water"
    }
  ],

  Kolkata: [
    {
      type: "Rain",
      message: "Moderate rainfall expected",
      color: "bg-blue-400",
      icon: "fa-cloud-showers-heavy",
      update: "Updated 7 mins ago",
      time: "1 PM – 6 PM",
      advice: "Avoid travel during heavy rain hours"
    }
  ]

};


const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
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
  const sound = document.getElementById("alertSound");
  if (sound){
  sound.currentTime = 0;
  sound.play().catch(() =>{});}
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
    <div class="${alert.color} text-white p-6 rounded-2xl shadow-lg transition transform hover:scale-105">
      
     <h3 class="text-lg font-bold flex items-center gap-2">
  <i class="fa-solid ${alert.icon}"></i>
  ${alert.type} Warning
</h3>

<p class="mt-1">${alert.message}</p>

<p class="text-sm mt-2 opacity-90">
  ⏰ ${alert.time}
</p>

<p class="text-sm opacity-80">
  ⚠️ ${alert.advice}
</p>

<p class="text-xs mt-2 opacity-70">
  ${alert.update}
</p>
    </div>
  `).join("");

  container.innerHTML = output;
}
function subscribe() {
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var msg = document.getElementById("msg");

  if (email === "" && phone === "") {
    msg.innerText = "Enter email or phone number";
    msg.style.color = "red";
  } else {
    msg.innerText = "✅ Alerts activated successfully!";
    msg.style.color = "green";
  }
}
