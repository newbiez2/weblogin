// ========== LOGIN FUNCTION (INDEX.HTML) ==========
document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    // Username dan Password yang benar
    const correctUsername = "user123";
    const correctPassword = "password123";

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const errorMessage = document.getElementById("error-message");

    // Validasi Login
    if (username === correctUsername && password === correctPassword) {
        alert("Login berhasil!");
        window.location.href = "dashboard.html";
    } else {
        errorMessage.textContent = "Username atau password salah.";
    }
});

// ========== RANDOM BACKGROUND FUNCTION (DASHBOARD.HTML) ==========
function setRandomBackground() {
    const backgroundImages = [
        "images/background1.jpg",
        "images/background2.jpg",
        "images/background3.jpg"
    ];

    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    document.body.style.backgroundImage = `url('${backgroundImages[randomIndex]}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
}

// Memastikan fungsi hanya berjalan di dashboard
if (window.location.pathname.includes("dashboard.html")) {
    window.onload = setRandomBackground;
}
