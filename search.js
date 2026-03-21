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