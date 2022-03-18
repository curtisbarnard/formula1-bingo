// Array of standard strings
const standardBingoCards = [
    '"Massive shunt"',
    'A front wing is replaced',
    'There\'s a crash on lap 1',
    'Russell beats Hamilton',
    'Alonso in the points',
    'Someone says the word porpoising',
    'Someone pits in last 5 laps to grab fastest lap',
    'Someone mentions the "little bits"',
    '4+ DNF\'s',
    'Gap to the winner is 10+ seconds',
    '"DAY-bree"',
    'Someone says DRS train'
]

const bahrainBingoCards = [
    'Someone talks about the Mercedes side pods',
    '"Hulkenberg has 3rd most race starts without a win"',
    'Someone talks about McLaren\'s brake issues',
    'Someone talks about Ricciardo giving Vettel COVID',
    'Haas ends up in the points'
]

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

for (item of cards) {
    let randomNumber = Math.floor(Math.random() * standardBingoCards.length)
    if (!(item.classList.contains("free"))) {
        item.innerText = standardBingoCards.splice(randomNumber, 1)
    }
}

