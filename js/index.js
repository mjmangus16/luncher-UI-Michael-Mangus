const menuBtn = document.querySelector(".logo-container button");
const mobileMenu = document.querySelector(".nav-container nav");
const container = document.querySelector(".container");

menuBtn.addEventListener("click", () => {
  if (mobileMenu.style.display == "none") {
    mobileMenu.style.display = "flex";
  } else if (mobileMenu.style.display != "none") {
    mobileMenu.style.display = "none";
  }
});

// BELOW THIS LINE IS EVERYTHING TO CREATE THE ABOUT PAGE
