const menuBtn = document.querySelector(".logo-container button");
const mobileMenuTags = document.querySelectorAll(".nav-container nav a");
const navContainer = document.querySelector(".nav-container nav");

menuBtn.addEventListener("click", () => {
  navContainer.classList.toggle("visible-nav");
  mobileMenuTags.forEach(tag => {
    tag.classList.toggle("visible");
  });
});
