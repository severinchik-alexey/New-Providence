jQuery(function () {

    var $headerContainer = $('.header-container');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 24) {
            if (!$headerContainer.hasClass('header-container_floating')) {
                $headerContainer.addClass('header-container_floating');
            }
        } else {
            if ($headerContainer.hasClass('header-container_floating')) {
                $headerContainer.removeClass('header-container_floating');
            }
        }
    });

    $('.menu-icon, .menu-close').click(function (event) {
        event.preventDefault();
        $('.menu-container').toggleClass('menu-container_opened');
    });

    $('.round-button_play').click(function (event) {
        event.preventDefault();
        $('body').prepend('<div class="video-player"><div class="video-player__block"><a class="video-player__close"></a><div class="video-player__wrapper"><iframe src="https://www.youtube.com/embed/sEDctELIm3I" frameborder="0" allowfullscreen></iframe></div></div></div>');
        $('.video-player__close').click(function () {
            $(this).parents('.video-player').remove();
        });
    });

    $('.customers-toggles__item').click(function () {
        slideCustomersTo($(this).index());
    });

    function slideCustomersTo(index) {
        $('.customers-carousel').css('left', '-' + (index * 100) + '%');
        var customersToggles = $('.customers-toggles__item');
        customersToggles.removeClass('customers-toggles__item_active');
        customersToggles.eq(index).addClass('customers-toggles__item_active');
    }

    setInterval(function () {
        if (!$('.customers-toggles').is(':hover') && !$('.customers-carousel').is(':hover')) {
            var slides = $('.customers-carousel').children().length;
            var current = $('.customers-toggles__item_active').index();
            slideCustomersTo((current + 1) % slides);
        }
    }, 5000);

    $('.plan-text__switch-button').click(function () {
        $('.plan-text__switch-button').addClass('round-button_disabled');
        $(this).removeClass('round-button_disabled');
        $('.plan-item').removeClass('plan-primary').addClass('plan-secondary')
            .find('.round-button').removeClass('round-button_blue').addClass('round-button_thin-blue');
        $('.plan-item').eq($(this).index()).removeClass('plan-secondary').addClass('plan-primary')
            .find('.round-button').removeClass('round-button_thin-blue').addClass('round-button_blue');
    });

});

$(function () {
    $(".center").slick({
        centerMode: !0,
        centerPadding: "0px",
        arrows: !0,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        slidesToShow: 3,
        responsive: [{
            breakpoint: 992,
            settings: {
                arrows: !0,
                prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
                centerMode: !0,
                centerPadding: "0px",
                slidesToShow: 1
            }
        }, {
            breakpoint: 768,
            settings: {
                arrows: !0,
                prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
                centerMode: !0,
                slidesToShow: 1
            }
        }, {
            breakpoint: 425,
            settings: {
                arrows: !1,
                prevArrow: !1,
                nextArrow: !1,
                centerMode: !0,
                centerPadding: "40px",
                slidesToShow: 1
            }
        }]
    }), $(".slider-for").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        fade: !0,
        asNavFor: ".slider-nav"
    }), $(".slider-nav").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".slider-for",
        dots: !1,
        centerMode: !0,
        centerPadding: "0px",
        focusOnSelect: !0,
        arrows: !0,
        prevArrow: '<button type="button" class="slick-p"><i class="fas fa-chevron-left fa-2x"></i></button>',
        nextArrow: '<button type="button" class="slick-n"><i class="fas fa-chevron-right fa-2x"></i></button>',
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 0,
                asNavFor: ".slider-for",
                dots: !1,
                centerMode: !0,
                centerPadding: "0px",
                focusOnSelect: !0,
                arrows: !1,
                prevArrow: !1,
                nextArrow: !1
            }
        }]
    }), $(".plan-2").click(function () {
        $(".plan__btn").hasClass("btn-animateF") ? (console.log("Added btn-animateB"), $(".plan__btn").removeClass("btn-animateF"), $(".plan__btn").addClass("btn-animateB"), $(".plan-2").css("color", "#b4b5b6"), $(".plan-1").css("color", "#26292c")) : (console.log("Removed btn-animateB"), $(".plan__btn").addClass("btn-animateF"), $(".plan__btn").removeClass("btn-animateB"), $(".plan-2").css("color", "#26292c"), $(".plan-1").css("color", "#b4b5b6"))
    }), $(".plan-1").click(function () {
        $(".plan__btn").hasClass("btn-animateB") ? (console.log("Added btn-animateF"), $(".plan__btn").removeClass("btn-animateB"), $(".plan__btn").addClass("btn-animateF"), $(".plan-2").css("color", "#26292c"), $(".plan-1").css("color", "#b4b5b6")) : (console.log("Removed btn-animateF"), $(".plan__btn").addClass("btn-animateB"), $(".plan__btn").removeClass("btn-animateF"), $(".plan-2").css("color", "#b4b5b6"), $(".plan-1").css("color", "#26292c"))
    }), $(".plan-2").click(function () {
        $(".plan__pro").hasClass("plan-active") && ($(".plan__pro").first().removeClass("plan-active"), $(".plan__pro").last().addClass("plan-active"))
    }), $(".plan-1").click(function () {
        $(".plan__pro").hasClass("plan-active") && ($(".plan__pro").last().removeClass("plan-active"), $(".plan__pro").first().addClass("plan-active"))
    }), $(".plan__pro").click(function () {
        $(".plan__btn").hasClass("btn-animateF") ? ($(".plan__btn").removeClass("btn-animateF"), $(".plan__btn").addClass("btn-animateB"), $(".plan-2").css("color", "#b4b5b6"), $(".plan-1").css("color", "#26292c"), $(".plan__pro").hasClass("plan-active") && ($(".plan__pro").last().removeClass("plan-active"), $(".plan__pro").first().addClass("plan-active"))) : ($(".plan__btn").addClass("btn-animateF"), $(".plan__btn").removeClass("btn-animateB"), $(".plan-2").css("color", "#26292c"), $(".plan-1").css("color", "#b4b5b6"), $(".plan__pro").hasClass("plan-active") && ($(".plan__pro").first().removeClass("plan-active"), $(".plan__pro").last().addClass("plan-active")))
    }), $(".item-burger").click(function () {
        $(".burger-menu").toggleClass("burger-active")
    }), $(document).on("click", 'a[href^="#"]', function (a) {
        a.preventDefault(), $("html, body").animate({
            scrollTop: $($.attr(this, "href")).offset().top
        }, 650)
    }), $(window).scroll(function () {
        $(".block-left").each(function () {
            var a = $(this).offset().top,
                n = $(window).scrollTop();
            a < n + 550 && $(this).addClass("bounceInLeft")
        }), $(".block-right").each(function () {
            var a = $(this).offset().top,
                n = $(window).scrollTop();
            a < n + 550 && $(this).addClass("bounceInRight")
        })
    })
});