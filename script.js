document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Sample username and password (You can replace this with a backend in the future)
    const correctUsername = "user123";
    const correctPassword = "password123";

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const errorMessage = document.getElementById("error-message");

    // Validate login credentials
    if (username === correctUsername && password === correctPassword) {
        alert("Login berhasil!");
        window.location.href = "dashboard.html"; // Redirect ke dashboard
    } else {
        errorMessage.textContent = "Username atau password salah.";
    }
});
