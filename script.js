const menuOpenBtn = document.querySelector(".menu-open-button");
const menuCloseBtn = document.querySelector(".menu-close-button");
const navMenu = document.querySelector(".nav-menu");

menuOpenBtn.addEventListener("click", () => {
    navMenu.classList.add("active");
});

menuCloseBtn.addEventListener("click", () => {
    navMenu.classList.remove("active");
});