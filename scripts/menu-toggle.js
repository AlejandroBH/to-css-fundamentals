const navMenu = document.querySelector(".header-menu");
const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active-menu");
});
