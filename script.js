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

// ========== AUTOMATIC CHANGING BACKGROUND (DASHBOARD.HTML) ==========
function setRandomBackground() {
    const backgroundImages = [
        "images/background1.jpg",
        "images/background2.jpg",
        "images/background3.jpg",
        "images/background4.jpg"
    ];

    // Pilih gambar acak
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    document.body.style.backgroundImage = `url('${backgroundImages[randomIndex]}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
}

// Ganti gambar setiap 5 detik (5000 ms)
function startBackgroundChange() {
    setRandomBackground(); // Ganti saat halaman dibuka
    setInterval(setRandomBackground, 5000); // Ganti setiap 5 detik
}

// Jalankan fungsi saat halaman dashboard dimuat
if (window.location.pathname.includes("dashboard.html")) {
    window.onload = startBackgroundChange;
}
