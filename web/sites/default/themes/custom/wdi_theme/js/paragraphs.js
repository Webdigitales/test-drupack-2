(function ($, Drupal) {
    'use strict';
    /////////////////////////////////////
    // Swiper
    /////////////////////////////////////
    var swiper = [];
    $(".wrapper-swipper-container").each(function (i) {
        var swiperId = $(this).attr("id");
        swiper[i] = new Swiper("#" + swiperId + " > .swiper-container", {
            slidesPerView: 2,
            spaceBetween: 30,
            pagination: {
                el: "#" + swiperId + " > .swiper-pagination",
                clickable: true
            },
            navigation: {
                nextEl: "#" + swiperId + " > .swiper-button-next",
                prevEl: "#" + swiperId + " > .swiper-button-prev"
            },
            on: {
                init: function () {
                    swiperMargin(swiperId, false);
                },
                transitionStart: function () {
                    swiperMargin(swiperId, true);
                }
            }
        });
    });

    // Margin
    function swiperMargin(id, transition) {
        var effect;
        if (transition) {
            effect = "all 0.35s";
        } else {
            effect = "none";
        }

        $("#" + id + " .swiper-slide").css({
            "margin-right": "30px",
            left: "0",
            transition: effect
        });
        $("#" + id + " .swiper-slide-active")
            .prev("li")
            .css({left: "-200px"});
        $("#" + id + " .swiper-slide-active")
            .next("li")
            .css({"margin-right": "200px"});
    }

    // Responsive
    $(window).on("load resize",function(e){
        var spv;
        if ($(this).width() < 992) {
            spv = 1;
        } else {
            spv = 2;
        }
        swiper.forEach(function (swiperId) {
            swiperId.params.slidesPerView = spv;
            swiperId.update();
        })
    });

    /////////////////////////////////////
    // Slider
    /////////////////////////////////////
    var slider = [];
    $(".wrapper-slider-container").each(function (i) {
        var sliderId = $(this).attr("id");
        slider[i] = new Swiper("#" + sliderId + " > .swiper-container", {
            pagination: {
                el: "#" + sliderId + " > .swiper-pagination",
                clickable: true
            },
            navigation: {
                nextEl: "#" + sliderId + " > .swiper-button-next",
                prevEl: "#" + sliderId + " > .swiper-button-prev"
            }
        });
    });
})(jQuery, Drupal);
