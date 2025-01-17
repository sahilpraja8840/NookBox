// Select elements
const markFavButtons = document.querySelectorAll('.mark-fav');
const favItemsList = document.getElementById('fav-items');

// Array to store favorite items
let favorites = [];

// Add event listeners to "Mark as Favorite" buttons
markFavButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const listItem = e.target.parentElement;
    const itemId = listItem.getAttribute('data-id');
    const itemText = listItem.textContent.replace('Mark as Favorite', '').trim();

    // Check if the item is already in favorites
    if (!favorites.find(fav => fav.id === itemId)) {
      // Add item to favorites
      favorites.push({ id: itemId, text: itemText });
      updateFavoritesList();
      alert(`${itemText} added to favorites!`);
    } else {
      alert(`${itemText} is already in your favorites.`);
    }
  });
});

// Function to update the "My Favorites" list
function updateFavoritesList() {
  // Clear the list first
  favItemsList.innerHTML = '';

  // Add each favorite item to the list
  favorites.forEach(fav => {
    const listItem = document.createElement('li');
    listItem.textContent = fav.text;
    favItemsList.appendChild(listItem);
  });
}
