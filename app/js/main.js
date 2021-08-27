$(function () {
    //lazy-load
    const lazyImages = document.querySelectorAll('img[data-src]');
    const windowHeight = document.documentElement.clientHeight;

    let lazyImagesPositions = [];
    if (lazyImages.length > 0) {
        lazyImages.forEach(img => {
            if (img.dataset.src) {
                lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);
                lazyScrollCheck()
            }
        });
    }

    window.addEventListener('scroll', lazyScroll);

    function lazyScroll() {
        if (document.querySelectorAll('img[data-src]').length > 0) {
            lazyScrollCheck();
        }
    }

    function lazyScrollCheck() {
        let imgIndex = lazyImagesPositions.findIndex(
            item => pageYOffset > item - windowHeight
        );
        if (imgIndex >= 0) {
            if (lazyImages[imgIndex].dataset.src) {
                lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
                lazyImages[imgIndex].removeAttribute('data-src');
            }
            delete lazyImagesPositions[imgIndex];
        }
    }



    //just validate
    if (document.querySelector('.banner')) {
        let validateForms = function (selector, rules, successModal, yaGoal) {
            new window.JustValidate(selector, {
                rules: rules,
                messages: {
                    nameOne: 'Обязатeльное поле',
                    telOne: 'Обязатeльное поле',
                    dateOne: 'Обязатeльное поле',
                    timeOne: 'Обязатeльное поле',
                    nameTwo: 'Обязатeльное поле',
                    telTwo: 'Обязатeльное поле',
                    dateTwo: 'Обязатeльное поле',
                    timeTwo: 'Обязатeльное поле',
                }
            });
        };
        validateForms('.banner__form', {
            nameOne: {
                required: true,
            },
            telOne: {
                required: true
            },
            dateOne: {
                required: true
            },
            timeOne: {
                required: true
            }
        }, '.thanks-popup', 'send goal');
        validateForms('.reserve__form', {
            nameTwo: {
                required: true,
            },
            telTwo: {
                required: true
            },
            dateTwo: {
                required: true
            },
            timeTwo: {
                required: true
            }
        }, '.thanks-popup', 'send goal');
        //tel-mask in form banner
        let selectorTel = document.querySelector('.telInput');

        let imTel = new Inputmask('+9 999 999 99 99');

        imTel.mask(selectorTel);
        //date-mask in form banner
        let selectorDate = document.querySelector('.dateInput');

        let imDate = new Inputmask('99.99.9999');

        imDate.mask(selectorDate);
        //time-mask in form banner
        let selectorTime = document.querySelector('.timeInput');

        let imTime = new Inputmask('99:99');

        imTime.mask(selectorTime);

        //tel-mask in form reserve
        let selectorTelTwo = document.querySelector('.telInputTwo');

        let imTelTwo = new Inputmask('+9 999 999 99 99');

        imTelTwo.mask(selectorTelTwo);
        //date-mask in form reserve
        let selectorDateTwo = document.querySelector('.dateInputTwo');

        let imDateTwo = new Inputmask('99.99.9999');

        imDateTwo.mask(selectorDateTwo);
        //time-mask in form reserve
        let selectorTimeTwo = document.querySelector('.timeInputTwo');

        let imTimeTwo = new Inputmask('99:99');

        imTimeTwo.mask(selectorTimeTwo);
    }

    if (document.querySelector('.scenario')) {
        let validateForms = function (selector, rules, successModal, yaGoal) {
            new window.JustValidate(selector, {
                rules: rules,
                messages: {
                    nameThree: 'Обязатeльное поле',
                    telThree: 'Обязатeльное поле',
                    dateThree: 'Обязатeльное поле',
                }
            });
        };
        validateForms('.scenario__form', {
            nameThree: {
                required: true,
            },
            telThree: {
                required: true
            },
            dateThree: {
                required: true
            }
        }, '.scenario-thanks', 'send goal');

        let selectorTelThree = document.querySelector('.telInputThree');

        let imTelThree = new Inputmask('+9 999 999 99 99');

        imTelThree.mask(selectorTelThree);
        //date-mask in form reserve
        let selectorDateThree = document.querySelector('.dateInputThree');

        let imDateThree = new Inputmask('99.99.9999');

        imDateThree.mask(selectorDateThree);
    }






    //смена активного языка
    $('.ru').click(function () {
        $('.banner__lang-button, .mobile-header__lang-button').removeClass('active');
        $('.ru').addClass('active');
    });
    $('.en').click(function () {
        $('.banner__lang-button, .mobile-header__lang-button').removeClass('active');
        $('.en').addClass('active');
    });









    //появление second-header
    $(window).scroll(function () {
        let height = $(window).scrollTop();
        /*Если сделали скролл на 100px задаём новый класс для header*/
        if (height > 2000) {
            $('.second-header').removeClass('unFixed');
            $('.second-header').addClass('header__fixed');
            $('.second-header__menu-outer').removeClass('menu__unfixed');
            $('.second-header__menu-outer').addClass('menu__fixed');
        } else {
            /*Если меньше 100px удаляем класс для header*/
            $('.second-header').removeClass('header__fixed');
            $('.second-header').addClass('unFixed');
            $('.second-header__menu-outer').removeClass('menu__fixed');
            $('.second-header__menu-outer').addClass('menu__unfixed');
        }
    });
    $(window).scroll(function () {
        let height = $(window).scrollTop();
        /*Если сделали скролл на 100px задаём новый класс для header*/
        if (height > 1000) {
            $('.mobile-header').removeClass('unFixed');
            $('.mobile-header').addClass('header__fixed');
        } else {
            /*Если меньше 100px удаляем класс для header*/
            $('.mobile-header').removeClass('header__fixed');
            $('.mobile-header').addClass('unFixed');
        }
    });

    //second-header выезд меню 
    $('.second-header__menu-button').click(function () {
        $('.second-header__menu-button').toggleClass('active');
        $('.second-header__menu-outer').toggleClass('active');
    });
    $('.mobile-header__menu-button').click(function () {
        $('.mobile-header__menu-outer').addClass('active');
        $('body').addClass('lock');
        $('.mobile-header').addClass('unBlur');
    });
    $('.mobile-header__menu-button-close').click(function () {
        $('.mobile-header__menu-outer').removeClass('active');
        $('body').removeClass('lock');
        setTimeout(function() {
            $('.mobile-header').removeClass('unBlur');
        }, 200);
    });

    //ползунок табов на we-can
    if (document.querySelector('.we-can')) {
        let navLine = document.querySelector('.we-can__tab-line'),
            navItem = document.querySelectorAll('.we-can__tab-item');

        navLine.style.height = `${navItem[0].offsetHeight}px`;

        navItem.forEach(el => {
            el.addEventListener('click', (e) => {
                navLine.style.height = `${e.currentTarget.offsetHeight}px`;
                navLine.style.top = `${e.currentTarget.offsetTop}px`;
            });
        });

        //переключение табов we-can
        const weCanTabsBtn = document.querySelectorAll(".we-can__tab-button");
        const weCanTabsItems = document.querySelectorAll(".we-can__content-item");

        weCanTabsBtn.forEach(onTabClick);

        function onTabClick(item) {
            item.addEventListener("click", function () {
                let currentBtn = item;
                let tabId = currentBtn.getAttribute("data-tab");
                let currentTab = document.querySelector(tabId);

                if (!currentBtn.classList.contains('active')) {
                    weCanTabsBtn.forEach(function (item) {
                        item.classList.remove('active');
                    });

                    weCanTabsItems.forEach(function (item) {
                        item.classList.remove('active');
                    });

                    currentBtn.classList.add('active');
                    currentTab.classList.add('active');
                }
            });
        }

        document.querySelector('.we-can__tab-button').click();
    }



    if (document.querySelector('.news')) {
        //переключение табов news
        const newsTabsBtn = document.querySelectorAll(".news__tab-button");
        const newsTabsItems = document.querySelectorAll(".news__content-item");

        newsTabsBtn.forEach(newsOnTabClick);

        function newsOnTabClick(item) {
            item.addEventListener("click", function () {
                let currentBtn = item;
                let tabId = currentBtn.getAttribute("data-tab");
                let currentTab = document.querySelector(tabId);

                if (!currentBtn.classList.contains('active')) {
                    newsTabsBtn.forEach(function (item) {
                        item.classList.remove('active');
                    });

                    newsTabsItems.forEach(function (item) {
                        item.classList.remove('active');
                    });

                    currentBtn.classList.add('active');
                    currentTab.classList.add('active');
                }
            });
        }

        document.querySelector('.news__tab-button').click();




        //слайдеры news
        new Swiper('.news__slider', {
            spaceBetween: 10,
            navigation: {
                nextEl: '.news__slider-arrow-next',
                prevEl: '.news__slider-arrow-prev',
            },
            breakpoints: {
                769: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                1130: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                1300: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                1800: {
                    slidesPerView: 3,
                    spaceBetween: 60
                },
            },
        });
    }

    if (document.querySelector('.wine-news')) {

        //слайдеры news-wine-page
        new Swiper('.news__slider-wine', {
            spaceBetween: 10,
            slidesPerView: 1,
            navigation: {
                nextEl: '.news__slider-arrow-next',
                prevEl: '.news__slider-arrow-prev',
            },
        });
        new Swiper('.news__slider-wine-mobile', {
            spaceBetween: 10,
            slidesPerView: 1,
            navigation: {
                nextEl: '.news__slider-arrow-next',
                prevEl: '.news__slider-arrow-prev',
            },
        });

    }

    if (document.querySelector('.reserve')) {

        //переключение табов reserve
        const reserveTabsBtn = document.querySelectorAll(".reserve__tab-button");
        const reserveTabsItems = document.querySelectorAll(".reserve__content-item");

        reserveTabsBtn.forEach(reserveOnTabClick);

        function reserveOnTabClick(item) {
            item.addEventListener("click", function () {
                let currentBtn = item;
                let tabId = currentBtn.getAttribute("data-tab");
                let currentTab = document.querySelector(tabId);

                if (!currentBtn.classList.contains('active')) {
                    reserveTabsBtn.forEach(function (item) {
                        item.classList.remove('active');
                    });

                    reserveTabsItems.forEach(function (item) {
                        item.classList.remove('active');
                    });

                    currentBtn.classList.add('active');
                    currentTab.classList.add('active');
                }
            });
        }

        document.querySelector('.reserve__tab-button').click();
    }


    $('.res-btn-1, .ttlb1').click(function () {
        $('.reserve__form-tab-item, .team__tab-content-name-item, .team__tab-content-prof-item, .team__tab-content-main-item, .team__tab-list-button').removeClass('active');
        $('.reserve__form-tab_1, .ttcni1, .ttcpi1, .ttcmi1, .ttlb1').addClass('active');
    });
    $('.res-btn-2, .ttlb2').click(function () {
        $('.reserve__form-tab-item, .team__tab-content-name-item, .team__tab-content-prof-item, .team__tab-content-main-item, .team__tab-list-button').removeClass('active');
        $('.reserve__form-tab_2, .ttcni2, .ttcpi2, .ttcmi2, .ttlb2').addClass('active');
    });
    $('.res-btn-3, .ttlb3').click(function () {
        $('.reserve__form-tab-item, .team__tab-content-name-item, .team__tab-content-prof-item, .team__tab-content-main-item, .team__tab-list-button').removeClass('active');
        $('.reserve__form-tab_3, .ttcni3, .ttcpi3, .ttcmi3, .ttlb3').addClass('active');
    });
    $('.res-btn-4, .ttlb4').click(function () {
        $('.reserve__form-tab-item, .team__tab-content-name-item, .team__tab-content-prof-item, .team__tab-content-main-item, .team__tab-list-button').removeClass('active');
        $('.reserve__form-tab_4, .ttcni4, .ttcpi4, .ttcmi4, .ttlb4').addClass('active');
    });
    $('.res-btn-5').click(function () {
        $('.reserve__form-tab-item').removeClass('active');
        $('.reserve__form-tab_5').addClass('active');
    });

    var lastId,
        topMenu = $(".banner__ardown-outer, .scroll-class"),
        topMenuHeight = topMenu.outerHeight(),
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function (e) {
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 800);
        e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function () {
        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
                .parent().removeClass("active")
                .end().filter("[href='#" + id + "']").parent().addClass("active");
        }
    });

    //event-block 
    $('body').on('click', '.event_data_class', function () {
        youShallNoPass($(this));
    });

    function youShallNoPass(__event_object) {
        //Additional Event Block
        var __event_id = $(__event_object).data('id');
        var __event_name = $(__event_object).data('event_name');
        var __event_big_image = $(__event_object).data('image');
        var __event_image = $(__event_object).data('big_image');
        var __event_date = $(__event_object).data('event_date');
        var __event_announce = $(__event_object).data('announce');
        var __event_link = $(__event_object).data('link');
        var __event_order_link = $(__event_object).data('order_link');

        //Main Event Block
        var __main__event_id = $('.event__main-block').data('id');
        var __main__event_name = $('.event__main-block').data('event_name');
        var __main__event_image = $('.event__main-block').data('image');
        var __main__event_big_image = $('.event__main-block').data('big_image');
        var __main__event_date = $('.event__main-block').data('event_date');
        var __main__event_announce = $('.event__main-block').data('announce');
        var __main__event_link = $('.event__main-block').data('link');
        var __main__event_order_link = $('.event__main-block').data('order_link');

        //Put New Data from Additional Clicked Event Block to Main Event Block
        $('.event__main-block').data('id', __event_id);
        $('.event__main-block').data('event_name', __event_name);
        $('.event__main-block').data('image', __event_image);
        $('.event__main-block').data('big_image', __event_big_image);
        $('.event__main-block').data('event_date', __event_date);
        $('.event__main-block').data('announce', __event_announce);
        $('.event__main-block').data('link', __event_link);
        $('.event__main-block').data('order_link', __event_order_link);

        //Put New Data from Main Event Block to Additional Clicked Event Block
        $(__event_object).data('id', __main__event_id);
        $(__event_object).data('event_name', __main__event_name);
        $(__event_object).data('image', __main__event_image);
        $(__event_object).data('big_image', __main__event_big_image);
        $(__event_object).data('event_date', __main__event_date);
        $(__event_object).data('announce', __main__event_announce);
        $(__event_object).data('link', __main__event_link);
        $(__event_object).data('order_link', __main__event_order_link);

        //Update markup for Main Event Block
        $('.event__main-block-img').attr("src", __event_big_image);
        $('.event__main-block-title').html(__event_name);
        $('.event__main-block-date').html(__event_date);
        $('.event__main-block-text').html(__event_announce);
        $('.event__main-block-link').attr("href", __event_link)
        $('.event__main-block-button').attr("href", __event_order_link)

        //Update markup for Additional Event Block
        $(__event_object).children('.event__block-img-outer').children('.event__block-img').attr("src", __main__event_image);
        $(__event_object).children('.event__block-title').html(__main__event_name);


        //Make some Magic with Navigation Dots

        $('.event__tab-list-one-button[data-id="' + __main__event_id + '"]').removeClass('active');
        $('.event__tab-list-one-button[data-id="' + __event_id + '"]').addClass('active');
    }

    AOS.init({
        duration: 1100,
        once: true,
        delay: 300,
    });


    if (document.querySelector('.reviews')) {
        //слайдеры reviews
        new Swiper('.reviews__slider', {
            spaceBetween: 15,
            navigation: {
                nextEl: '.reviews__slider-arrow-next',
                prevEl: '.reviews__slider-arrow-prev',
            },
            pagination: {
                el: '.reviews__slider-pagination',
                type: 'fraction',
                renderFraction: function (currentClass, totalClass) {
                    return '<span class="' + currentClass + '"></span>' +
                        ' | ' + '<span class="' + totalClass + '"></span>';
                }
            },
        });
    }

    if (document.querySelector('.yesslider')) {
        new Swiper('.event__block-slider', {
            spaceBetween: 15,
            navigation: {
                nextEl: '.event__slider-arrow-next',
                prevEl: '.event__slider-arrow-prev',
            },
            pagination: {
                el: '.event__slider-pagination',
                type: 'fraction',
                renderFraction: function (currentClass, totalClass) {
                    return '<span class="' + currentClass + '"></span>' +
                        ' | ' + '<span class="' + totalClass + '"></span>';
                }
            },
        });

        new Swiper('.social__slider', {
            spaceBetween: 15,
            navigation: {
                nextEl: '.social__slider-arrow-next',
                prevEl: '.social__slider-arrow-prev',
            },
            pagination: {
                el: '.social__slider-pagination',
                type: 'fraction',
                renderFraction: function (currentClass, totalClass) {
                    return '<span class="' + currentClass + '"></span>' +
                        ' | ' + '<span class="' + totalClass + '"></span>';
                }
            },
        });
    }

    if (document.querySelector('.look__slider')) {
        new Swiper('.look__slider', {
            spaceBetween: 15,
            navigation: {
                nextEl: '.look__slider-arrow-next',
                prevEl: '.look__slider-arrow-prev',
            },
        });
    }


    if (document.querySelector('.additional')) {
        let navLine = document.querySelector('.we-can__tab-line'),
            navItem = document.querySelectorAll('.additional__tab-btn-outer');

        navLine.style.height = `${navItem[0].offsetHeight}px`;

        navItem.forEach(el => {
            el.addEventListener('click', (e) => {
                navLine.style.height = `${e.currentTarget.offsetHeight}px`;
                navLine.style.top = `${e.currentTarget.offsetTop}px`;
            });
        });

        const additionalTabsBtn = document.querySelectorAll(".additional__tab-btn");
        const additionalTabsItems = document.querySelectorAll(".additional__tab-content");

        additionalTabsBtn.forEach(additionalOnTabClick);

        function additionalOnTabClick(item) {
            item.addEventListener("click", function () {
                let currentBtn = item;
                let tabId = currentBtn.getAttribute("data-tab");
                let currentTab = document.querySelector(tabId);

                if (!currentBtn.classList.contains('active')) {
                    additionalTabsBtn.forEach(function (item) {
                        item.classList.remove('active');
                    });

                    additionalTabsItems.forEach(function (item) {
                        item.classList.remove('active');
                    });

                    currentBtn.classList.add('active');
                    currentTab.classList.add('active');
                }
            });
        }

        document.querySelector('.additional__tab-btn').click();

        $('.atb1').click(function () {
            $('.additional__tab-btn, .additional__tab-btn-outer').removeClass('active');
            $('.atb1, .atbo1').addClass('active');
        });
        $('.atb2').click(function () {
            $('.additional__tab-btn, .additional__tab-btn-outer').removeClass('active');
            $('.atb2, .atbo2').addClass('active');
        });
        $('.atb3').click(function () {
            $('.additional__tab-btn, .additional__tab-btn-outer').removeClass('active');
            $('.atb3, .atbo3').addClass('active');
        });

    }

    if (document.querySelector('.scenario')) {
        $('.scenario-thanks__close, .scenario-thanks__okay').click(function () {
            $('.scenario-thanks').removeClass('active');
            $('body').removeClass('lock');
        });

        $('.scenario__form-button').click(function () {
            $('.scenario-thanks').addClass('active');
            $('body').addClass('lock');
        });
    }

    if (document.querySelector('.ideal-menu')) {
        new Swiper('.ideal-menu__slider', {
            spaceBetween: 30,
            pagination: {
                el: '.ideal-menu__slider-pagination',
                clickable: true,
            },
        });

        let IMInfoBtn1 = document.querySelector('.IMInfoBtn1');
        let IMInfoCard1 = document.querySelector('.IMInfoCard1');

        IMInfoBtn1.addEventListener('click', function () {
            IMInfoCard1.classList.toggle('active');
        });

        let IMInfoBtn2 = document.querySelector('.IMInfoBtn2');
        let IMInfoCard2 = document.querySelector('.IMInfoCard2');

        IMInfoBtn2.addEventListener('click', function () {
            IMInfoCard2.classList.toggle('active');
        });

        let IMInfoBtn3 = document.querySelector('.IMInfoBtn3');
        let IMInfoCard3 = document.querySelector('.IMInfoCard3');

        IMInfoBtn3.addEventListener('click', function () {
            IMInfoCard3.classList.toggle('active');
        });

        let IMInfoBtn4 = document.querySelector('.IMInfoBtn4');
        let IMInfoCard4 = document.querySelector('.IMInfoCard4');

        IMInfoBtn4.addEventListener('click', function () {
            IMInfoCard4.classList.toggle('active');
        });

        let IMInfoBtn5 = document.querySelector('.IMInfoBtn5');
        let IMInfoCard5 = document.querySelector('.IMInfoCard5');

        IMInfoBtn5.addEventListener('click', function () {
            IMInfoCard5.classList.toggle('active');
        });

        let IMInfoBtn6 = document.querySelector('.IMInfoBtn6');
        let IMInfoCard6 = document.querySelector('.IMInfoCard6');

        IMInfoBtn6.addEventListener('click', function () {
            IMInfoCard6.classList.toggle('active');
        });

        let IMInfoBtn7 = document.querySelector('.IMInfoBtn7');
        let IMInfoCard7 = document.querySelector('.IMInfoCard7');

        IMInfoBtn7.addEventListener('click', function () {
            IMInfoCard7.classList.toggle('active');
        });

        let IMInfoBtn8 = document.querySelector('.IMInfoBtn8');
        let IMInfoCard8 = document.querySelector('.IMInfoCard8');

        IMInfoBtn8.addEventListener('click', function () {
            IMInfoCard8.classList.toggle('active');
        });

        let IMInfoBtn9 = document.querySelector('.IMInfoBtn9');
        let IMInfoCard9 = document.querySelector('.IMInfoCard9');

        IMInfoBtn9.addEventListener('click', function () {
            IMInfoCard9.classList.toggle('active');
        });
    }

});