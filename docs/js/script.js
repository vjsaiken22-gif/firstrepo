console.log("JS connected");

/* DARK MODE */
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "Light Mode";
    } else {
        themeToggle.textContent = "Dark Mode";
    }

});

/* SHOW / HIDE SKILLS */
const toggleSkills = document.getElementById("toggleSkills");
const skillsSection = document.getElementById("skillsSection");

toggleSkills.addEventListener("click", function () {

    skillsSection.classList.toggle("hidden");

    if (skillsSection.classList.contains("hidden")) {
        toggleSkills.textContent = "Show Skills";
    } else {
        toggleSkills.textContent = "Hide Skills";
    }

});

/* FORM VALIDATION */
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill in all required fields.");
    } else {
        alert("Form submitted successfully!");
    }

});