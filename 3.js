// Form submission handler
document.getElementById("trialForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Retrieve form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Replace form with confirmation message
    const formContainer = document.querySelector('.form-container');
    formContainer.innerHTML = `
        <h1>Thank You, ${name}!</h1>
        <p>Your free trial has started. Enjoy 7 days of unlimited streaming!</p>
        <button onclick="window.location.href='homepage.html'" class="cta-button">Go to Homepage</button>
    `;
});
@keyframes backgroundAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

body, html {
    background: linear-gradient(45deg, #ff6600, #e55a00, #333) no-repeat;
    background-size: 300% 300%;
    animation: backgroundAnimation 10s infinite ease-in-out;
}

