document.addEventListener("DOMContentLoaded", function() {
    const menuBurger = document.querySelector(".header__mobile-menu"),
        mobileMenu = document.querySelector(".header-top__main-nav"),
        burger = menuBurger.querySelector(".header__burger"),
        body = document.querySelector("body");

    menuBurger.addEventListener("click", function() {
        menuBurger.classList.toggle("active");
        burger.classList.toggle("active");
        mobileMenu.classList.toggle("active");
        body.classList.toggle("hidden");
    })
})