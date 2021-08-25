//https://www.w3docs.com/snippets/javascript/how-to-create-a-new-dom-element-from-html-string.html
function htmlToElem(html) {
    let temp = document.createElement('template');
    html = html.trim(); // Never return a space text node as a result
    temp.innerHTML = html;
    return temp.content.firstChild;
}



function itemtemplate(user) {

    drive = user.drive ? "Can Drive" : "Can't Drive";
    var subject = [];

    for (var k in user.subject) subject[k] = user.subject[k];

    lastItem = subject.pop();
    subject = subject.length != 0 ? subject.join(", ") + " & " + lastItem : lastItem;

    year = user.year != -1 ? `<li>Year ${user.year}</li>` : '';

    return `
    <li>
    <div class="ItemBox border text-center">
        <div class="imgContainer">
        <img alt="Image of Tutor" class="smallImage" src="img/${user.image}">
        </div>
        <span class="Title">${user.name.last}</span>
        <br />
        <span class="SmallCaps">${user.name.first}</span>
        <br />
        <br />
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            More Info
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <ul class="px-2">
                <li>${user.gender}</li>
                <li>${user.age}</li>
                ${year}
                <li>${subject}</li>
                <li>${user.area}</li>
                <li>${user.qualification}</li>
                <li>${drive}</li>
                <li>${user.availability.display}</li>
                </ul>
            </div>
        </div>
        <br />
        <div>
    </li>`;
}

var filter = { availability: [] };

location.search.substr(1).split("&").forEach(search => {
    toAdd = search.split("=");
    if (toAdd[0] == "availability") {
        filter[toAdd[0]].push(toAdd[1]);
    } else {
        filter[toAdd[0]] = toAdd[1];
    }
})

users.forEach(element => {
    var accept = true;
    Object.keys(filter).forEach(filterSearch => {
        if (element[filterSearch] != null || filterSearch.substr(0, 3) == "age") {
            switch (filterSearch) {
                case "agemin":
                    element.age - 1 < filter[filterSearch] && filter[filterSearch] != '' ? accept = false : 'Continue Checks';
                    break;
                case "agemax":
                    element.age > filter[filterSearch] - 1 && filter[filterSearch] != '' ? accept = false : 'Continue Checks';
                    break;
                case "availability":
                    console.log(filter.availability + ", " + element.availability.value);
                    filter.availability.forEach(query => {
                        element.availability.value.includes(query) ? 'Continue Checks' : accept = false;
                    });
                    break;
                default:
                    element[filterSearch].toString().includes(filter[filterSearch]) ? 'Continue Checks' : accept = false;
                    break;
            }
        }
    });
    if (accept) {
        $("#item").append(itemtemplate(element));
    }
});

window.addEventListener('scroll', function() {
	if (window.pageYOffset > 100) {
		$("#sidebar").addClass("fixed");
		$("#outerContain").addClass("scrolled");
	} else {
		$("#sidebar").removeClass("fixed");
		$("#outerContain").removeClass("scrolled");
	}
});

document.getElementById("g"+filter.gender).checked = true;
document.getElementById("agemin").value = filter.agemin;
document.getElementById("agemax").value = filter.agemax;