(function ($, Drupal) {
    'use strict';

    const $navigation = $('#navbar-collapse');
    var navOpen = iSMobileNavOpen();

    // Banner
    const $bannerImgs = $(".banner .js-bg-parallax");

    // Global Variables
    var controller = new ScrollMagic.Controller(),
        elementAnimated = 0,
        loopElement = 0;

    // Paragraphs
    const pImageText = $('.p-image'),
        pImg = $('.p-image100'),
        pTestimonial = $('.p-testimonial'),
        pGallery = $('.p-gallery'),
        pSlider = $('.p-slider'),
        pCta = $('.p-cta'),
        pIntro = $('.p-intro');

    // Blocks
    const bCtaDiscipline = $('.block-discipline'),
        bCta = $('.block-home-cta');

    // FadeInUp animation function
    function fadeInUp(elementAnimated) {
        // fadeInUp animation
        var tween = TweenMax.from(
            $(elementAnimated), 0.6, {
                y: '20%',
                autoAlpha: 0,
                ease: Power1.Ease,
                force3D: true
            }
        );
        // Create ScrollMagic scene
        var imgScene = new ScrollMagic.Scene({
            triggerElement: loopElement,
            triggerHook: 0.75
        })
            .setTween(tween)
            .addTo(controller);
    }

    if (mobile) {
        mobileNav();
    } else {
        $.merge(pImageText, pImg).each(function () {
            elementAnimated = $(this).find('img');
            loopElement = this;

            fadeInUp(elementAnimated);
        });

        $(bCta).each(function () {
            var $img = $(this).find('img');
            var $link = $(this).find('.block-content_link');

            elementAnimated = $([$img, $link]);
            loopElement = this;

            fadeInUp(elementAnimated);
        });

        $(bCtaDiscipline).each(function () {
            elementAnimated = $(this);
            loopElement = this;

            fadeInUp(elementAnimated);
        });

        $(pImageText).each(function () {
            var $title = $(this).find('.field--name-field-title');
            var $paragraph = $(this).find('p');
            var $tag = $(this).find('.step .field--name-field-tag');

            elementAnimated = $([$title, $tag, $paragraph]);
            loopElement = this;

            fadeInUpText(elementAnimated);
        });

        $(bCta).each(function () {
            var $title = $(this).find('h2');
            var $paragraph = $(this).find('p');

            elementAnimated = $([$title, $paragraph]);
            loopElement = this;

            fadeInUpText(elementAnimated);
        });

        $bannerImgs.each(function () {
            var heroParallax = TweenMax.to($bannerImgs, 1, {
                opacity: 0,
                scale: 1.5
            });

            var heroScene = new ScrollMagic.Scene({
                triggerHook: 0,
                triggerElement: $bannerImgs,
                duration: '150%'
            })
                .setTween(heroParallax)
                .addTo(controller);
        });
    }

    function fadeInUpText(elementAnimated) {
        // fadeInUp animation
        var tween = TweenMax.from(
            $(elementAnimated), 0.3, {
                y: '100%',
                autoAlpha: 0,
                ease: Power1.Ease,
                force3D: true
            }
        );
        // Create ScrollMagic scene
        var imgScene = new ScrollMagic.Scene({
            triggerElement: loopElement,
            triggerHook: 0.75
        })
            .setTween(tween)
            .addTo(controller);
    }

    function iSMobileNavOpen() {
        if ($navigation.hasClass('open')) {
            return true;
        }

        else {
            return false;
        }
    }

    function mobileNav() {
        $navigation.detach().insertAfter('.dialog-off-canvas-main-canvas');

        $('.navbar-toggle').click(function () {
            if (!navOpen) {
                $(this).toggleClass('nav-is-open');
                $('.dialog-off-canvas-main-canvas').toggleClass('nav-is-open');
                $navigation.toggleClass('open');
            }
        });
    }
})(jQuery, Drupal);

