// listen for a click on a card
const cards = document.getElementsByClassName('card')
for (let item of cards) {
    item.addEventListener('click', function flipCard () {
        item.classList.toggle('flipped')
    })
}


// function toggle the flipped class on card

// function that adds the current points
    // add 5 points for card being flipped

// function that writes points to the DOM

// check for boxes all in a row, add 10 point per box
    // 123 or 456 or 789 or 147 or 258 or 369 or 159 or 357

