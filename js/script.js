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
    const itemMenu = document.querySelectorAll(".header-menu__item");
    if (itemMenu.length > 0) {
        itemMenu.forEach(function(item) {
            item.addEventListener("click", function() {
                let href = item.getAttribute('href');
                if (href) {
                    e.preventDefault();

                    $("html, body").animate({
                        scrollTop: $(href).offset().top,
                    }, 600);
                }
            })
        })
    }


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
        })
    }

    //swiper снято у нас
    let swiperPhoto = undefined;

    function initSwiperInst() {
        if (window.matchMedia("(max-width: 767px)").matches && swiperPhoto == undefined) {

            swiperPhoto = new Swiper("#inst-swiper", {
                slidesPerView: 1,
                spaceBetween: 0,
                navigation: {
                    prevEl: ".b-i",
                    nextEl: ".f-i"
                },
                on: {
                    init: function() {
                        $(".inst__btns").toggle(this.params.slidesPerView < this.slides.length)
                    },
                    breakpoint: function() {
                        $(".inst__btns").toggle(this.params.slidesPerView < this.slides.length);
                    },
                    destroy: function() {
                        $(".inst__btns").hide();
                    },
                }
            })
        } else {
            if (window.matchMedia("(min-width: 768px)").matches && swiperPhoto != undefined && swiperPhoto != null) {
                swiperPhoto.destroy();
                swiperPhoto = undefined;
            }
        }
    }

    //swiper акции

    const swiperPromo = new Swiper("#sw-promo", {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            prevEl: ".b-p",
            nextEl: ".f-p"
        },
        breakpoints: {
            767: {
                slidesPerView: 1,
            },
        },
        on: {
            init: function() {
                $(".promo__btns").toggle(this.params.slidesPerView < this.slides.length)
            },
            breakpoint: function() {
                $(".promo__btns").toggle(this.params.slidesPerView < this.slides.length);
            },
            destroy: function() {
                $(".promo__btns").hide();
            },
        }
    })

    //swiper фотографы

    const swiperPeople = new Swiper("#sw-ph", {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            prevEl: ".b-ph",
            nextEl: ".f-ph"
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 1,
            },
        },
        on: {
            init: function() {
                $(".ph__btns").toggle(this.params.slidesPerView < this.slides.length)
            },
            breakpoint: function() {
                $(".ph__btns").toggle(this.params.slidesPerView < this.slides.length);
            },
            destroy: function() {
                $(".ph__btns").hide();
            },
        }
    })


    //swiper наши услуги
    let swiperServices = undefined;

    function initSwiperServices() {
        if (window.matchMedia("(max-width: 767px)").matches && swiperServices == undefined) {
            swiperServices = new Swiper("#services-swiper", {
                slidesPerView: 1,
                spaceBetween: 0,
                navigation: {
                    prevEl: ".b-s",
                    nextEl: ".f-s"
                },
                on: {
                    init: function() {
                        $(".services__btns").toggle(this.params.slidesPerView < this.slides.length)
                    },
                    breakpoint: function() {
                        $(".services__btns").toggle(this.params.slidesPerView < this.slides.length);
                    },
                    destroy: function() {
                        $(".services__btns").hide();
                    },
                }
            })
        } else if (window.matchMedia("(min-width: 768px)").matches && swiperServices != undefined && swiperServices != null) {
            swiperServices.destroy();
            swiperServices = undefined;
        }
    }


    //swiper video 
    const swiperVideo = new Swiper("#sw-video", {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            prevEl: ".b-v",
            nextEl: ".f-v"
        },
        breakpoints: {
            767: {
                slidesPerView: 1,
            },
        },
        on: {
            init: function() {
                $(".video__btns").toggle(this.params.slidesPerView < this.slides.length)
            },
            breakpoint: function() {
                $(".video__btns").toggle(this.params.slidesPerView < this.slides.length);
            },
            destroy: function() {
                $(".video__btns").hide();
            },
        }
    })

    //swiper фото студии
    let swiperStudio = undefined;

    function initSwiperStudio() {
        if (window.matchMedia("(max-width: 767px)").matches && swiperStudio == undefined) {
            swiperStudio = new Swiper("#studio-swiper", {
                slidesPerView: 1,
                spaceBetween: 0,
                navigation: {
                    prevEl: ".b-st",
                    nextEl: ".f-st"
                },
            })
        } else {
            if (window.matchMedia("(min-width: 768px)").matches && swiperStudio != undefined && swiperStudio != null) {
                swiperStudio.destroy();
                swiperStudio = undefined;
            }
        }
    }

    initSwiperInst();
    initSwiperServices();
    initSwiperStudio();
    window.addEventListener("resize", function() {
        initSwiperInst();
        initSwiperServices();
        initSwiperStudio();
    })

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