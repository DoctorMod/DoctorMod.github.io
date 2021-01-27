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

const seenEl = document.querySelector('#lastseen');

function updateSeen() {
    fetch('seen.json?nocache=' + Math.random().toString().substring(2)).then(r => r.text()).then(r => {
        let json = JSON.parse(r);
        if (json.project) {
            if (json.project_href)
                // Please no XSS
                seenEl.innerHTML = `I just finished working on <a href="${json.project_href}" class="d" target="_blank"
                style="color:#949494;">${json.project}<span class="underline" style="background-color:#949494;"></span></a>.`;
            else
                seenEl.innerText = 'I just finished working on ' + json.project + '.';
        } else {
            seenEl.innerText = "I'm not working on anything right now."
        }
    }).catch(console.log);
}

setInterval(updateSeen, 60 * 1000);
updateSeen();