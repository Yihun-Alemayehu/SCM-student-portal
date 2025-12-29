// Login handling with basic validation
document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();
            const message = document.getElementById("message");

            if (username === "" || password === "") {
                message.innerText = "Username and password cannot be empty.";
                message.style.color = "red";
            } else {
                message.innerText = "Login successful!";
                message.style.color = "green";
            }
        });
    }

});
