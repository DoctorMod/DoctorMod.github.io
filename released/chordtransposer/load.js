var chords = ["A#","A","B","C#","C","D#","D","E","F#","F","G#","G"];

var simplify = false;

function generateChord(chordName, frets, barres = "") {
    if (frets.length !== 6) {
        throw new Error("Frets array must have exactly 6 elements.");
    }
    chordDict[chordName] = {
        chord: [[6, frets[0]], [5, frets[1]], [4, frets[2]], [3, frets[3]], [2, frets[4]], [1, frets[5]]],
        position: 0,
        barres: [barres ? { fromString: barres[0], toString: barres[1], fret: barres[2] } : {}],
        name: chordName
    };
}

chordDict = {};
generateChord("A", "x02220");
generateChord("A#", "x1333x");
generateChord("Am", "x02210");
generateChord("Amaj7", "x02120");

generateChord("B", "x94449", "512");
generateChord("Bm", "x94439", "512");
generateChord("Bm7", "x20202");
generateChord("B7", "x21202");

generateChord("C", "x32010");
generateChord("C7", "x32000");
generateChord("C#m", "x421xx");

generateChord("D", "xx0232");
generateChord("Dm", "xx0231");
generateChord("D7", "xx0212");
generateChord("Dmaj7", "xx0222");
generateChord("Dsus9", "x00230");

generateChord("E", "022100");
generateChord("Em", "022000");
generateChord("E7", "020100");
generateChord("Esus4", "022200");

generateChord("F", "933299", "611");
generateChord("Fm", "933999", "611");
generateChord("Fmaj7", "933299", "611");

generateChord("G", "320003");

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
        songlist = song.split(/---\r?\n/);
        songlist.forEach(element => {
            if (element.trim() !== "") {
                document.getElementById('songlist').appendChild(prettify(element));
            }         
        });
        if (songlist.length !== document.getElementById('songlist').children.length) {
            console.warn(`Warning: Number of songs in file (${songlist.length - 1}) does not match number of songs displayed (${document.getElementById('songlist').children.length}).`);
        }
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
    // Show chord diagram on click
    $(document).on('click', '.chord', function(e) {
        $('.chord-popup').remove();
        let chordName = $(this).text().trim();

        let popup = $('<div class="chord-popup"></div>');
        popup.css({
            position: 'absolute',
            zIndex: 1031,
            background: '#fff',
            border: '1px solid #ccc',
            padding: '6px',
            borderRadius: '6px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        });

        // Add SVG container for VexChords
        let svgDiv = $('<div></div>').attr('id', 'vexchord-diagram').css({ width: '120px', height: '160px', margin: '0 auto' });
        popup.append(svgDiv);

        // Add chord name below diagram
        popup.append($('<div></div>').text(chordName).css({ textAlign: 'center', fontWeight: 'bold' }));

        $('body').append(popup);

        // Render chord diagram dynamically using ChordBox and chordDict
        try {
            let struct = chordDict[chordName];
            if (struct) {
                new vexchords.ChordBox(svgDiv[0], {
                    width: 120,
                    height: 160,
                    defaultColor: '#444'
                }).draw(struct);
            } else {
                svgDiv.text('No diagram');
            }
        } catch (err) {
            svgDiv.text('No diagram');
        }

        let offset = $(this).offset();
        popup.css({
            left: offset.left + $(this).width()/2 - popup.width()/2,
            top: offset.top - popup.height() - 10
        });

        // Ensure popup stays within viewport
        let popupRect = popup[0].getBoundingClientRect();
        let winWidth = $(window).width();
        let winHeight = $(window).height();

        // Adjust horizontally if off screen
        if (popupRect.left < 0) {
            popup.css('left', 8); // stick to left
        } else if (popupRect.right > winWidth) {
            popup.css('left', winWidth - popup.width() - 8); // stick to right
        }
        // Adjust vertically if off screen (top)
        if (popupRect.top < 0) {
            popup.css('top', offset.top + $(this).height() + 10); // show below chord
        }

        $(document).on('mousedown.chordpopup', function(ev) {
            if (!$(ev.target).closest('.chord-popup, .chord').length) {
                $('.chord-popup').remove();
                $(document).off('mousedown.chordpopup');
            }
        });
    });
});
