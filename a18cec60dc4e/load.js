function loadfile(filename,index) {
    console.log(`Loading ${filename}.`);
    var fileref = document.createElement('div');
    fetch(filename).then((res) => res.text()).then((song) => {
        fileref.innerHTML = prettify(song);
        songs[index] = fileref;
        console.log(`Loaded ${filename}.`);
    })
    .catch((e) => console.error(e));
}

var chords = ["A#","A ","B ","C#","C ","D#","D ","E ","F#","F ","G#","G "];

function transpose() {
    chords.sort();
    var newtranspose = Number($('#quantity').val());
    modifyChords = chords.concat(chords).concat(chords);
    for (let i = 0; i < chords.length; i++) {
        currentLetter = document.getElementsByClassName(chords[i]);
        for (let j = 0; j < currentLetter.length; j++) {
            const element = currentLetter[j];
            element.innerText = modifyChords[i+12+newtranspose];   
        }
    }
}

function prettify(input) {

    var songList = input.replace(/\[.*?\]/g, "").split(/\r?\n/).filter(n => n);

    var songStart = -1;

    for (let i = 0; i < songList.length; i++) {
        var element = songList[i] + " ";
        if (songStart == -1) {
            if (element == '<pre class="song"> ') {songStart = i - 1;}    
        } else {
            if ((songStart - i) % 2 == 0) {
                for (let j = 0; j < chords.length; j++) {
                    element = element.replaceAll(chords[j],`<span class='${chords[j]} chord'>${chords[j]}</span>`);
                }
            }
        }
        songList[i] = element;
    }
    
    output = songList.join("<br/>");
    return output;
}

var songs = []
var songNames = [
    "niggun1",
    "yedid",
    "mizmorshir",
    "kolainu",
    "arbaim",
    "yismechu",
    "emek",
    "ayalah",
    "lechadodi1",
    "naaseh",
    "niggun2",
    "acheinu",
    "mayamganim",
    "lechadodi2",
    "dodinetzeh",
    "harim",
    "yaaloz",
    "olam",
    "niggun3"
];

for (let i = 0; i < songNames.length; i++) {
    loadfile(`songs/${songNames[i]}.html`,i);
} 

var startupLoop = setInterval(function() {
    if (songs.length == songNames.length) {
        songs.forEach(element => {
            document.getElementById('songlist').appendChild(element);        
        });
        chords.sort();
        clearInterval(startupLoop);
    }
},50);


$(document).ready(function(){

    var quantitiy=0;
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
    
    $('#quantity').on("update",transpose);
    $('#quantity').val(0);
    });
