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

    //якорные ссылки
    // const itemMenu = document.querySelectorAll(".header-menu__item");
    // if (itemMenu.length > 0) {
    //     itemMenu.forEach(function(item) {
    //         item.addEventListener("click", function() {
    //             let href = item.getAttribute('href');
    //             if (href.indexOf("#") === 0) {
    //                 e.preventDefault();

    //                 $("html, body").animate({
    //                     scrollTop: $(href).offset().top,
    //                 }, 200);
    //             }
    //         })
    //     })
    // }


    // кнопка наверх
    let btn = document.querySelector(".btn-up");
    if (btn) {
        window.addEventListener("scroll", function() {

            if (window.scrollY > 450) {
                btn.classList.add("show");
            } else {
                btn.classList.remove("show");
            }

        });
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            $('html, body').stop().animate({ scrollTop: 0 }, 300);
            // window.scrollTo(pageXOffset, 0);
        })
    }


    //swiper акции
    const swiperPromo = new Swiper("#sw-promo", {
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
    const swiperPeople = new Swiper("#sw-ph", {
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


    //swiper video 
    if (window.matchMedia("(min-width: 1024px)").matches) {
        const swiperVideo = new Swiper("#sw-video", {
            slidesPerView: 3,
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

        })
    }
    //modal 
    const btnOpn = document.querySelectorAll(".open-modal");
    const modalCloseBtn = document.querySelector(".modal__close");
    const modalBtn = document.querySelector(".modal__btn");
    const modalBox = document.querySelector(".modal-box");

    if (btnOpn.length > 0) {
        for (let i = 0; i < btnOpn.length; i++) {
            const btnOpenModal = btnOpn[i];
            btnOpenModal.addEventListener("click", function(e) {
                const modalName = btnOpenModal.getAttribute('href').replace('#', '');
                const currentModal = document.getElementById(modalName);
                modalOpen(currentModal);
                e.preventDefault();
            })
        }
    }

    const closeModals = document.querySelectorAll(".close-modal");
    if (closeModals.length > 0) {
        for (let i = 0; i < closeModals.length; i++) {
            const closeModalIcon = closeModals[i];
            closeModalIcon.addEventListener("click", function(e) {
                modalClose(closeModalIcon.closest('.modal-box'));
                e.preventDefault();
            })
        }
    }

    function modalOpen(current) {
        current.classList.add('open');
        body.classList.add('_hidden');
        current.addEventListener('click', function(e) {
            if (!e.target.closest('.modal__content')) {
                modalClose(e.target.closest('.modal-box'));
            }
        })
    }

    function modalClose(current) {
        current.classList.remove('open');
        current.classList.add('close');
        body.classList.remove('_hidden');
    }

    //mask for phone 
    $(".modal__input[type='tel']").each(function() {
        $(this).mask("+7 (000) 000-00-00")
    })


})