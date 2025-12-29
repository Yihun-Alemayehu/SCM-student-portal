document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            document.getElementById("message").innerText = "Login successful!";
        });
    }

    // Load courses on dashboard
    const courseList = document.getElementById("courseList");
    if (courseList) {
        fetch("students.json")
            .then(response => response.json())
            .then(data => {
                data.student.courses.forEach(course => {
                    const li = document.createElement("li");
                    li.textContent = course;
                    courseList.appendChild(li);
                });
            })
            .catch(error => {
                courseList.innerHTML = "<li>Error loading courses</li>";
            });
    }

});
