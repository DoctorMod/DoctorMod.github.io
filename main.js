var selector = ".section";

var $slides = $(selector);

var navLinks = $(".nav-link");

var currentSlide = 0;
var isAnimating = false;

var stopAnimation = function() {
    setTimeout(function() {
        isAnimating = false;
    }, 300);
};

var bottomIsReached = function($elem) {
    var rect = $elem[0].getBoundingClientRect();
    return rect.bottom <= $(window).height();
};

var topIsReached = function($elem) {
    var rect = $elem[0].getBoundingClientRect();
    return rect.top >= 0;
};

function zeros(num, size) {
    num = num.toString();
    while (num.length < size) num = num + "0";
    return num;
}

document.addEventListener(
    "wheel",
    function(event) {
        var $currentSlide = $($slides[currentSlide]);

        if (isAnimating) {
            event.preventDefault();
            return;
        }

        var direction = -event.deltaY;

        if (direction < 0) {
            // next
            if (currentSlide + 1 >= $slides.length) return;
            if (!bottomIsReached($currentSlide)) return;
            event.preventDefault();
            currentSlide++;
            var $slide = $($slides[currentSlide]);
            var offsetTop = $slide.offset().top;
            isAnimating = true;
            $("html, body").animate({
                    scrollTop: offsetTop
                },
                500,
                stopAnimation
            );
        } else {
            // back
            if (currentSlide - 1 < 0) return;
            if (!topIsReached($currentSlide)) return;
            event.preventDefault();
            currentSlide--;
            var $slide = $($slides[currentSlide]);
            var offsetTop = $slide.offset().top;
            isAnimating = true;
            $("html, body").animate({
                    scrollTop: offsetTop
                },
                500,
                stopAnimation
            );
        }
        navLinks.removeClass("active");
        navLinks[currentSlide].classList.add("active");
    }, { passive: false }
);



// countdown
let timer = setInterval(function() {

    // get today's date
    const today = new Date();
    const birthday = new Date(1128902400000);
    var diff = today - birthday;

    var years = Math.round((diff / (1000 * 60 * 60 * 24 * 365.25)) * 1000000000) / 1000000000;

    document.getElementById("timer").innerHTML = zeros(years, 12);
}, 10);