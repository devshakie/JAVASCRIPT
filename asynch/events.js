let favoriteEvents = JSON.parse(localStorage.getItem('favoriteEvents')) || [];
let showingFavorites = false;

// Fetch events data from the JSON server API
function fetchEvents() {
  fetch("http://localhost:3000/eventsData")
    .then((response) => response.json())
    .then((data) => {
      // Filter events if showing only favorites
      const eventsToRender = showingFavorites 
        ? data.filter(event => favoriteEvents.includes(event.id)) 
        : data;
        
      // Render events after fetching
      renderEvents(eventsToRender);
    })
    .catch((error) => {
      console.error("Error fetching events:", error);
    });
}

// Render events and add event listeners for favorite buttons
function renderEvents(eventsData) {
  const eventsContainer = document.getElementById("events-container");
  eventsContainer.innerHTML = "";

  eventsData.forEach((event) => {
    const isFavorite = favoriteEvents.includes(event.id);

    const eventCard = document.createElement("div");
    eventCard.classList.add("event-card");

    eventCard.innerHTML = `
      <img src="${event.imageUrl}">
      <h3>${event.title}</h3>
      <p>${event.date}</p>
      <p>${event.location}</p>
      <p>${event.company}</p>
      <p>ksh${event.price}</p>
      <div class="buttons">
      <button>Buy Tickets</button>
      <button class="favorite-button" data-id="${event.id}">
        ${isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button></div>
    `;

    eventsContainer.appendChild(eventCard);
  });

  // Add event listeners for favorite buttons
  document.querySelectorAll(".favorite-button").forEach(button => {
    button.addEventListener("click", (event) => {
      const eventId = button.getAttribute("data-id");
      toggleFavorite(eventId);
    });
  });
}

// Toggle the favorite status of an event
function toggleFavorite(eventId) {
  const index = favoriteEvents.indexOf(eventId);

  if (index === -1) {
    favoriteEvents.push(eventId);
  } else {
    favoriteEvents.splice(index, 1);
  }

  // Update local storage
  localStorage.setItem('favoriteEvents', JSON.stringify(favoriteEvents));

  // Re-render events to reflect the changes
  fetchEvents();
}

const sortByPriceAscButton = document.getElementById("price-asc");
const sortByDateAscButton = document.getElementById("date-asc");
const sortByPriceDescButton = document.getElementById("price-desc");
const sortByDateDescButton = document.getElementById("date-desc");
const viewFavoritesButton = document.getElementById("view-favorites");

// Toggle between all events and favorites view
viewFavoritesButton.addEventListener("click", () => {
  showingFavorites = !showingFavorites;
  viewFavoritesButton.textContent = showingFavorites ? "View All Events" : "View Favorites";
  fetchEvents();
});

// Fetch and sort events data
const fetchData = async (sortOption = null) => {
  const response = await fetch("http://localhost:3000/eventsData");
  const data = await response.json();

  // Sort data based on the sortOption
  if (sortOption === "price-asc") {
    data.sort((a, b) => a.price - b.price);
  } else if (sortOption === "price-desc") {
    data.sort((a, b) => b.price - a.price);
  } else if (sortOption === "date-asc") {
    data.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (sortOption === "date-desc") {
    data.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  // Render the sorted events
  renderEvents(data);
};

// Add event listeners for sorting buttons
sortByPriceAscButton.addEventListener("click", () => {
  fetchData("price-asc");
});
sortByPriceDescButton.addEventListener("click", () => {
  fetchData("price-desc");
});
sortByDateAscButton.addEventListener("click", () => {
  fetchData("date-asc");
});
sortByDateDescButton.addEventListener("click", () => {
  fetchData("date-desc");
});

// Initial render of events
fetchEvents();
