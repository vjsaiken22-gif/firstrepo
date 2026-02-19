document.addEventListener("DOMContentLoaded", function () {

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
        console.log("Theme toggled");
    });

    updateThemeLabel();

});
