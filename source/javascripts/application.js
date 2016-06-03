$(function () {

    // Smooth Scroll
    $('a.scroll').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });

    // Nav Show/Hide
    setInterval(function () {
        var scroll_top = $(window).scrollTop();

        if (scroll_top >= 550) { // the detection!
            $('.nav--primary').addClass('appear');
        } else {
            $('.nav--primary').removeClass('appear');
        }
    }, 500);

    // Circle animations and text count animation
    $('.countTo, .circliful').each(function () {
        $(this).waypoint({
            handler: function () {
                var $el = $(this.element);

                if (!$el.hasClass('processed')) {
                    $el.addClass('processed');

                    // Count To JS
                    if ($el.hasClass('countTo')) {
                        $el.countTo({
                            speed: 1500,
                            refreshInterval: 20,
                            formatter: function (value, options) {
                                value = value.toFixed(options.decimals);
                                if ($el.data('append')) {
                                    value += $el.data('append');
                                }
                                if ($el.data('prepend')) {
                                    value = $el.data('prepend') + value;
                                }
                                if ($el.data('type')) {
                                    switch ($el.data('type')) {
                                        case 'currency':
                                            value = value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            break;
                                    }
                                }
                                return value;
                            },
                        });
                    }

                    // Circleful JS
                    if ($el.hasClass('circliful')) {
                        var text = $el.data('text');
                        var percent = $el.data('percent');

                        var foregroundColor = '#4c4c4c';
                        var backgroundColor = '#b2b2b2';

                        if ($el.hasClass('circliful-orange')) {
                            foregroundColor = '#ce7b02';
                            backgroundColor = '#f9d895';
                        }

                        $el.circliful({
                            foregroundBorderWidth: 10,
                            backgroundBorderWidth: 10,
                            foregroundColor: foregroundColor,
                            backgroundColor: backgroundColor,
                            fillColor: '#FFFFFF',
                            fontColor: '#595959',
                            targetColor: '#808080',
                            animationStep: 5,
                            percentageTextSize: 36,
                            text: text,
                            percent: percent
                        });
                    }
                }
            },
            offset: '100%'
        });
    });
});