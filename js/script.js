/* global jQuery */

'use strict';

(function init($) {
    var slideOpt = {
        width: 960,
        height: 300,
        start: 1,
        navigation: {
            active: false
        },
        pagination: {
            active: true,
            effect: 'fade'
        },
        play: {
            active: false
        },
        effect: {
            fade: {
                speed: 300,
                crossfade: true
            }
        }
    };

    function initSlides() {
        $('#slides').slidesjs(slideOpt);
    }

    function switchButton(e) {
        var $button = $(this),
            id = $button.attr('href'),
            $container = $(id),
            $buttons = $('.section_button'),
            $containers = $('.section_container');

        e.preventDefault();

        $containers.hide();
        $buttons.removeClass('current');

        $container.show();
        $button.addClass('current');
    }

    $(initSlides);
    $('body').on('click', '.section_button', switchButton);
})(jQuery);
