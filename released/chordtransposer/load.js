var chords = ["A#","A","B","C#","C","D#","D","E","F#","F","G#","G"];

var simplify = false;

function transpose() {
    chords.sort();
    var newtranspose = Number($('#quantity').val());
    modifyChords = chords.concat(chords).concat(chords);
    for (let i = 0; i < chords.length; i++) {
        currentLetter = document.getElementsByClassName(chords[i]);
        for (let j = 0; j < currentLetter.length; j++) {
            const element = currentLetter[j];
            extraStuff = element.getAttribute("extraStuff");
            if (extraStuff.substr(-1) == " " && modifyChords[i+12+newtranspose].includes('#')) {
                extraStuff = extraStuff.slice(0,-1);
            }
            if (simplify) {
                extraStuff = "".padStart(extraStuff.length);
            }
            element.innerText = modifyChords[i+12+newtranspose] + extraStuff;   
        }
    }
}

function prettify(htmlSource) {
    var [title, author, capo] = htmlSource.split('\n').slice(0,3);
    var content = htmlSource.split('\n').slice(4).join('\n');

    var wrapper = document.createElement('div');

    titleElem = document.createElement('h1');
    titleElem.appendChild(document.createElement('a'));
    titleText = title.split('](')[0].slice(1);
    titleHref = title.split('](')[1].slice(0,-2);
    titleElem.children[0].innerText = titleText;
    titleElem.children[0].href = titleHref;
    wrapper.appendChild(titleElem);

    authorElem = document.createElement('h2');
    authorElem.innerText = author;
    wrapper.appendChild(authorElem);

    capoElem = document.createElement('h3');
    capoElem.appendChild(document.createElement('a'));
    capoElem.children[0].innerText = capo;
    capoElem.children[0].href = '#';
    capoElem.children[0].classList.add('capo');
    capoElem.addEventListener('click', function(e) {   

        e.preventDefault();

        capoText = e.target.innerText;

        if (capoText == "No Capo\n") {
            $('#quantity').val(0);
        } else {
            var currentCapo = parseInt(capoText.slice(5));
            $('#quantity').val(currentCapo);
        }


        transpose();
    });
    wrapper.appendChild(capoElem);

    content = content.replace(/\[ch\]/g, '<span class="chord">');
    content = content.replace(/\[\/ch\] /g, ' </span>');
    content = content.replace(/\[\/ch\]/g, '</span>');

    contentElem = document.createElement('pre');
    contentElem.innerHTML = content;
    contentElem = chordEdit(contentElem);
    wrapper.appendChild(contentElem);

    return wrapper;
}


function chordEdit(contentElem) {
    var chords = contentElem.getElementsByClassName('chord');
    for (let i = 0; i < chords.length; i++) {
        const chord = chords[i];
        if (chord.innerText[1] == '#') {
            chord.classList.add(chord.innerText.slice(0,2));
            extraStuff = chord.innerText.slice(2);
        } else {
            chord.classList.add(chord.innerText[0]);
            extraStuff = chord.innerText.slice(1);
        }
        chord.setAttribute("extraStuff",extraStuff);
    }
    return contentElem;
}

$(document).ready(function(){

    fetch('fullsongs.md').then((res) => res.text()).then((song) => {
        songlist = song.split(/---(\r\n|\n|\r)/gm);
        songlist.forEach(element => {
            document.getElementById('songlist').appendChild(prettify(element));          
        }); 
    })
    .catch((e) => console.error(e));

    $('.quantity-right-plus').click(function(e){
        
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());
        
        // If is not undefined
        if(quantity<12){
            $('#quantity').val(quantity + 1);
            transpose();
        }              
            // Increment
        
    });

        $('.quantity-left-minus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());
        
        // If is not undefined
        
            // Decrement
            if(quantity>-12){
            $('#quantity').val(quantity - 1);
            transpose();
            }
    });

    $('.simplify-chords').click(function(e){
        
        // Stop acting like a button
        e.preventDefault();

        //toggle icon state from -fill to '' or visa-versa
        if ($('.simplify-chords i').hasClass('bi-capslock-fill')) {
            simplify = true;
            $('.simplify-chords i').removeClass('bi-capslock-fill');
            $('.simplify-chords i').addClass('bi-capslock');
        } else {
            simplify = false;
            $('.simplify-chords i').addClass('bi-capslock-fill');
            $('.simplify-chords i').removeClass('bi-capslock');
        }
        transpose();
    });
});