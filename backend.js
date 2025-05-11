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
        alert("Login successful!");
        // Redirect to another page or show dashboard here
    } else {
        errorMessage.textContent = "Invalid username or password.";
    }
});