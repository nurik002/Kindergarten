// Startup Scripts
$(document).ready(function () {
    $('.hero').css('height', ($(window).height() - $('header').outerHeight()) + 'px'); // Set hero to fill page height

    $('#scroll-hero').click(function () {
        $('html,body').animate({scrollTop: $("#hero-bloc").height()}, 'slow');
    });
});


// Window resize 
$(window).resize(function () {
    $('.hero').css('height', ($(window).height() - $('header').outerHeight()) + 'px'); // Refresh hero height
});

// chvetafor

$('.counter-count').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {

        //chnage count up speed here
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

$(document).ready(function () {
    $('ul li a').click(function () {
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
});

let btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, '300');
});


var main = function () {
    $('.push-bar').on('click', function (event) {
        if (!isClicked) {
            event.preventDefault();
            $('.arrow').trigger('click');
            isClicked = true;
        }
    });

    $('.arrow').css({
        'animation': 'bounce 2s infinite'
    });
    $('.arrow').on("mouseenter", function () {
        $('.arrow').css({
            'animation': '',
            'transform': 'rotate(180deg)',
            'background-color': 'black'
        });
    });
    $('.arrow').on("mouseleave", function () {
        if (!isClicked) {
            $('.arrow').css({
                'transform': 'rotate(0deg)',
                'background-color': 'black'
            });
        }
    });

    var isClicked = false;

    $('.arrow').on("click", function () {
        if (!isClicked) {
            isClicked = true;
            $('.arrow').css({
                'transform': 'rotate(180deg)',
                'background-color': 'black',
            });

            $('.bar-cont').animate({
                top: "-15px"
            }, 300);
            $('.main-cont').animate({
                top: "0px"
            }, 300);
            // $('.news-block').css({'border': '0'});
            // $('.underlay').slideDown(1000);

        } else if (isClicked) {
            isClicked = false;
            $('.arrow').css({
                'transform': 'rotate(0deg)', 'background-color': 'black'
            });

            $('.bar-cont').animate({
                top: "-215px"
            }, 300);
            $('.main-cont').animate({
                top: "-215px"
            }, 300);
        }
        console.log('isClicked= ' + isClicked);
    });

    $('.card').on('mouseenter', function () {
        $(this).find('.card-text').slideDown(300);
    });

    $('.card').on('mouseleave', function (event) {
        $(this).find('.card-text').css({
            'display': 'none'
        });
    });
};

// carousel
// $('.carousel').carousel({
//     interval: 2000,
//     pause: "false"
// });


