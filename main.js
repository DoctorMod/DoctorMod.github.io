var selector = ".section";

var $slides = $(selector);

var navLinks = $(".nav-link");

function zeros(num, size) {
    num = num.toString();
    while (num.length < size) num = num + "0";
    return num;
}

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
