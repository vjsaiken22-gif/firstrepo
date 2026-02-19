document.addEventListener("DOMContentLoaded", function () {

    const themeToggle = document.getElementById("themeToggle");
    const toggleSkills = document.getElementById("toggleSkills");
    const skillsSection = document.getElementById("skillsSection");
    const submitBtn = document.getElementById("submitBtn");

    /* 🌙 DARK MODE TEXT SWITCH */
    function updateThemeLabel() {
        if (document.body.classList.contains("dark-mode")) {
            themeToggle.textContent = "Light Mode";
        } else {
            themeToggle.textContent = "Dark Mode";
        }
    }

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        updateThemeLabel();
    });

    /* 👇 SKILLS SHOW / HIDE TEXT SWITCH */
    toggleSkills.addEventListener("click", function () {
        skillsSection.classList.toggle("hidden");

        if (skillsSection.classList.contains("hidden")) {
            toggleSkills.textContent = "Show Skills";
        } else {
            toggleSkills.textContent = "Hide Skills";
        }
    });

    /* 📩 FORM VALIDATION */
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

    /* 🔄 SET CORRECT TEXT ON PAGE LOAD */
    updateThemeLabel();

});
