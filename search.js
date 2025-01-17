// Sample Video Data
const videoData = [
    { title: "BATMAN", url: "play1.html", characters: ["b", "a"] },
    { title: "HALLOWEN", url: "play2.html", characters: ["h", "a"] },
    { title: "JUSTIN LEAGUE", url: "play3.html", characters: ["j", "U"] },
    { title: "MONSTER HOUSE", url: "play4.html", characters: ["m", "O"] },
];

// Render All Videos
function renderAllVideos() {
    const container = document.getElementById("video-container");
    container.innerHTML = "";
    videoData.forEach((video) => {
        const card = createVideoCard(video);
        container.appendChild(card);
    });
}

// Search Videos by Character Name with Suggestions
function searchCharacter() {
    const searchInput = document.getElementById("characterSearch").value.toLowerCase();
    const suggestionsContainer = document.getElementById("suggestions");
    const resultsContainer = document.getElementById("resultsContainer");

    // Clear previous suggestions and results
    suggestionsContainer.innerHTML = "";
    resultsContainer.innerHTML = "";

    if (searchInput === "") {
        return; // Do nothing if the input is empty
    }

    // Generate suggestions based on the input
    const allCharacters = videoData.flatMap(video => video.characters);
    const suggestions = allCharacters.filter(character =>
        character.toLowerCase().startsWith(searchInput)
    );

    // Populate the suggestions dropdown
    suggestions.forEach(character => {
        const suggestionItem = document.createElement("div");
        suggestionItem.classList.add("suggestion-item");
        suggestionItem.textContent = character;

        // Handle click on a suggestion
        suggestionItem.addEventListener("click", () => {
            document.getElementById("characterSearch").value = character;
            suggestionsContainer.innerHTML = "";
            filterVideosByCharacter(character);
        });

        suggestionsContainer.appendChild(suggestionItem);
    });

    // Filter videos based on the input
    filterVideosByCharacter(searchInput);
}

// Filter Videos Helper Function
function filterVideosByCharacter(searchInput) {
    const resultsContainer = document.getElementById("resultsContainer");
    const filtered = videoData.filter(video =>
        video.characters.some(character => character.toLowerCase().includes(searchInput))
    );

    if (filtered.length === 0) {
        resultsContainer.innerHTML = "<p>No videos found for this character.</p>";
    } else {
        filtered.forEach(video => {
            const card = createVideoCard(video);
            resultsContainer.appendChild(card);
        });
    }
}

// Create a Video Card
function createVideoCard(video) {
    const card = document.createElement("div");
    card.classList.add("video-card");
    card.innerHTML = `
        <img src="thumbnail.png" alt="${video.title}">
        <h4>${video.title}</h4>
        <a href="${video.url}" target="_self">
            <button class="watch-button">Watch Now</button>
        </a>
    `;
    return card;
}

// Initial Render
renderAllVideos();
