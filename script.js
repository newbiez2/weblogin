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
        "images/WhatsApp Image 2025-05-11 at 20.54.44.jpeg",
        "images/WhatsApp Image 2025-05-11 at 20.54.43 (1).jpeg",
        "images/WhatsApp Image 2025-05-11 at 20.54.43.jpeg",
        "images/WhatsApp Image 2025-05-11 at 20.54.41.jpeg",
        "images/WhatsApp Image 2025-05-11 at 20.54.40 (1).jpeg",
        "images/WhatsApp Image 2025-05-11 at 20.54.40.jpeg",
        "images/WhatsApp Image 2025-05-11 at 20.54.32 (2).jpeg",
        "images/WhatsApp Image 2025-05-11 at 20.54.32.jpeg",
        "images/WhatsApp Image 2025-05-11 at 20.54.31 (2).jpeg",
        "images/WhatsApp Image 2025-05-11 at 20.54.31 (1).jpeg",
        "images/WhatsApp Image 2025-05-11 at 20.54.31.jpeg",
        "images/WhatsApp Image 2025-05-11 at 20.54.30.jpeg",
    ];

    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    const selectedImage = backgroundImages[randomIndex];
    
    // Tambahkan sedikit delay untuk transisi halus
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.backgroundImage = `url('${selectedImage}')`;
        document.body.style.opacity = "1";
    }, 300); // 300ms delay untuk transisi lebih halus
}

// Ganti gambar setiap 5 detik
function startBackgroundChange() {
    setRandomBackground();
    setInterval(setRandomBackground, 5000);
}

// Jalankan fungsi saat halaman dashboard dimuat
if (window.location.pathname.includes("dashboard.html")) {
    window.onload = startBackgroundChange;
}
