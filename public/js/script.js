/* Author: Chad Schulz
   Date: 11/14/11
*/

/* Homepage slides */
$(function () {
    $('#slides').slidesjs({
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
    });
});

(function () {
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

    $('body').on('click', '.section_button', switchButton);
})();
