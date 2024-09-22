let favoriteEvents = JSON.parse(localStorage.getItem('favoriteEvents')) || [];
let showingFavorites = false;
const CACHE_KEY = 'eventsCache';
const MAX_RETRIES = 3;

// Fetch events data from the JSON server API
async function fetchEvents() {
  const cachedData = JSON.parse(localStorage.getItem(CACHE_KEY));
  if (cachedData) {
    renderEvents(cachedData);
    displayTotalRevenue(cachedData);
  }

  try {
    const data = await fetchWithRetry("http://localhost:3000/eventsData");
    localStorage.setItem(CACHE_KEY, JSON.stringify(data)); 
    const eventsToRender = showingFavorites 
      ? data.filter(event => favoriteEvents.includes(event.id)) 
      : data;
    renderEvents(eventsToRender);
    displayTotalRevenue(data);
  } catch (error) {
    console.error("Error fetching events:", error);
  }
}

// Fetch data with retry mechanism
async function fetchWithRetry(url, retries = MAX_RETRIES) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");
      return await response.json();
    } catch (error) {
      if (i === retries - 1) throw error; 
    }
  }
}

// Render events and add event listeners for favorite buttons
function renderEvents(eventsData) {
  const eventsContainer = document.getElementById("events-container");
  eventsContainer.innerHTML = "";
  const fragment = document.createDocumentFragment(); 

  eventsData.forEach((event) => {
    const isFavorite = favoriteEvents.includes(event.id);
    const eventCard = document.createElement("div");
    eventCard.classList.add("event-card");

    eventCard.innerHTML = `
      <img data-src="${event.imageUrl}" class="lazy-load" alt="${event.title}">
      <h3>${event.title}</h3>
      <p>${event.date}</p>
      <p>${event.location}</p>
      <p>${event.company}</p>
      <p>Ksh ${event.price}</p>
      <div class="buttons">
        <button>Buy Tickets</button>
        <button class="favorite-button" data-id="${event.id}">
          ${isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>
    `;

    fragment.appendChild(eventCard);
  });

  eventsContainer.appendChild(fragment); // Append the fragment to the container

  // Lazy load images
  lazyLoadImages();

  // Add event listeners for favorite buttons
  document.querySelectorAll(".favorite-button").forEach(button => {
    button.addEventListener("click", (event) => {
      const eventId = button.getAttribute("data-id");
      toggleFavorite(eventId);
    });
  });
}

// Lazy load images as the user scrolls
function lazyLoadImages() {
  const lazyImages = document.querySelectorAll('.lazy-load');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src; 
        img.classList.remove('lazy-load'); 
        observer.unobserve(img); 
      }
    });
  });

  lazyImages.forEach(image => {
    observer.observe(image); 
  });
}

// Calculate and display total revenue from events
function displayTotalRevenue(eventsData) {
  const totalRevenue = eventsData.reduce((total, event) => total + event.price, 0);
  document.getElementById("total-revenue").textContent = `Total Revenue: Ksh ${totalRevenue}`;
}

// Toggle the favorite status of an event
function toggleFavorite(eventId) {
  const index = favoriteEvents.indexOf(eventId);
  if (index === -1) {
    favoriteEvents.push(eventId);
  } else {
    favoriteEvents.splice(index, 1);
  }

  localStorage.setItem('favoriteEvents', JSON.stringify(favoriteEvents));
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
