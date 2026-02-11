// Navigation
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("visible");
  });
}

// View Toggle
const viewToggle = document.querySelector(".view-toggle");
const main = document.querySelector("main");

if (viewToggle && main) {
  viewToggle.addEventListener("click", () => {
    main.classList.toggle("grid");
  });
}
