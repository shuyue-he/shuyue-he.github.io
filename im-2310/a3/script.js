/* This is the function which can stretch out(reveal) the full paintings when users hover over on the thumnails of paintings.*/
var wrap = document.getElementsByClassName('paintings-wrapper')[0];
var cards = wrap.getElementsByClassName('painting');
console.log(wrap);
console.log(cards);

for(var i = 0; i < cards.length; i++){
    cards[i].addEventListener('mouseover',function(){

        removeActive();


        this.className = "painting active"
    })
}

function removeActive(){
    for(var i = 0;i < cards.length; i++){
        cards[i].className = "painting";
    }
}

/* This toggle function can give users an option to click at the first time of the top right button of the artist's image, it will open the hidden introduction of the artists, and click the button again will close the opened introduction of the artist.*/

document.querySelectorAll('.story-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('change')
        btn.nextElementSibling.classList.toggle('change')
    })
})

