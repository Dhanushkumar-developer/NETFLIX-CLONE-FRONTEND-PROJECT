// Play button
const playButtons = document.querySelectorAll(".play-btn");

playButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Playing Movie...");
    });
});

// More Info button
const infoButtons = document.querySelectorAll(".info-btn");

infoButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Movie Details");
    });
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});