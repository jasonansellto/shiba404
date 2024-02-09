(function ($) {
    "use strict";

    Pace.on("start", function () {
        $("#preloader").show();
    });

    Pace.on("done", function () {

        $('#status').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(1000).fadeOut('slow'); // will fade out the white DIV that covers the website.

        setTimeout(function () {
            new WOW().init();
        }, 1000);

        function setHeight() {
            var wh = $(window).outerHeight();
            $("#page").height(wh);
        }

        $(window).on('resize', function () {
            setHeight();
        });


        $('#stars').plaxify({"xRange": 10, "yRange": 10});

        $.plax.enable();

        function getImgSize(el, imgSrc) {
            var newImg = new Image();
            newImg.onload = function () {
                var height = newImg.height;
                var width = newImg.width;
                el.css('height', height);
            };
            newImg.src = imgSrc;
        }


        if ($('.bg-image[data-bg-image]').length > 0) {
            $('.bg-image[data-bg-image]').each(function () {
                var el = $(this);
                var sz = getImgSize(el, el.attr("data-bg-image"));
                el.css('background-position', 'center').css('background-image', "url('" + el.attr("data-bg-image") + "')").css('background-size', 'cover').css('background-repeat', 'no-repeat');
            });
        }

        $('[data-placeholder]').on('focus', function () {
            var input = $(this);
            if (input.val() === input.attr('data-placeholder')) {
                input.val('');
            }
        }).on('blur', function () {
            var input = $(this);
            if (input.val() === '' || input.val() === input.attr('data-placeholder')) {
                input.addClass('placeholder');
                input.val(input.attr('data-placeholder'));
            }
        }).blur();

        $('[data-placeholder]').parents('form').submit(function () {
            $(this).find('[data-placeholder]').each(function () {
                var input = $(this);
                if (input.val() === input.attr('data-placeholder')) {
                    input.val('');
                }
            });
        });


    });
})(jQuery);

