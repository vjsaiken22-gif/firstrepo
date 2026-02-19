document.addEventListener("DOMContentLoaded", function () {

   
    const themeToggle = document.getElementById("themeToggle");

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });



    
    const toggleSkills = document.getElementById("toggleSkills");
    const skillsSection = document.getElementById("skillsSection");

    toggleSkills.addEventListener("click", function () {
        skillsSection.classList.toggle("hidden");
    });



   
    const submitBtn = document.getElementById("submitBtn");

    submitBtn.addEventListener("click", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();

        if (name === "" || email === "") {
            alert("Please fill in all required fields.");
        } else {
            alert("Form submitted successfully!");
        }

    });

});

