document.addEventListener("DOMContentLoaded", function () {

    // 🌙 DARK MODE
    const themeToggle = document.getElementById("themeToggle");

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

    updateThemeLabel();



    // 🎯 SHOW / HIDE SKILLS (ADD THIS PART HERE)
    const skillsBtn = document.getElementById("toggleSkills");
    const skillsSection = document.getElementById("skillsSection");

    skillsBtn.addEventListener("click", function () {

        skillsSection.classList.toggle("hidden");

        if (skillsSection.classList.contains("hidden")) {
            skillsBtn.textContent = "Show Skills";
        } else {
            skillsBtn.textContent = "Hide Skills";
        }

    });

});
