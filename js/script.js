document.addEventListener("DOMContentLoaded", function() {
    //open mobile-menu
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


    //swiper акции
    const swiperPromo = new Swiper(".swiper-container.promo-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            prevEl: ".slider-btn_back",
            nextEl: ".slider-btn_forward"
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
            },
        },
    })


    //swiper фотографы
    const swiperPeople = new Swiper(".swiper-container.ph-swiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            prevEl: ".slider-btn_back.btn-slider",
            nextEl: ".slider-btn_forward.btn-slider"
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 1,
            },
        },
        // on: {
        //     init: function() {
        //         $(".ph__btns").toggle($(".swiperPeople").slidesPerView < this.slides.length)
        //     },
        //     breakpoint: function() {
        //         $(".ph__btns").toggle(this.params.slidesPerView < this.slides.length);
        //     },
        //     destroy: function() {
        //         $(".ph__btns").hide();
        //     },
        // }
    })
})