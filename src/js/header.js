// on mobile/small screens

// grab hamburger menu
const hamburgerMenu = document.getElementById("hamburger-menu");

// grab close menu
const closeMenu = document.getElementById("close-menu");

const megaMenu = document.getElementById("mega-menu");

hamburgerMenu.addEventListener("click", () => {
  megaMenu.classList.replace("translate-x-full", "translate-x-0");
});
closeMenu.addEventListener("click", () => {
  megaMenu.classList.replace("translate-x-0", "translate-x-full");
});
