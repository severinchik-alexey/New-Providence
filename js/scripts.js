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