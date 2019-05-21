const menuBtn = document.querySelector(".logo-container button");
const mobileMenu = document.querySelector(".nav-container nav");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("visible");
});
