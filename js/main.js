// listen for a click on a card
const cards = document.getElementsByClassName('card')
let frontCards = document.getElementsByClassName('front')

// Array of standard strings
const standardBingoCards = [
    '"Massive shunt"',
    'A front wing is replaced',
    'There\'s a crash on lap 1',
    'Russell beats Hamilton',
    'Alonso in the points',
    'Someone pits in last 5 laps to grab fastest lap',
    'Someone mentions the "little bits"',
    '4+ DNF\'s',
    'Gap to the winner is 10+ seconds',
    '"DAY-bree"',
    'Someone says DRS train',
    'Brake shrouds are called cake tins',
    'Non-F1 celebrity in the garage',
    'Wheel gets stuck in pit stop',
    'Rainbow flag',
    'Crofty says stinker',
    'Hulkenberg replaces a driver',
    'Commentator mentions Guanyu Zhou being the 1st Chinese F1 driver',
    '"Full Beans"',
    '"Car looks like it\'s on rails"',
    'Bottas finishes ahead of both Mercedes',
    'Horner\s foot tapping',
    'Toto shaking his head in disgust',
    'Haas Podium',
    'Helmet Cam View',
    'McLaren finish in the top 10',
    'Haas ends up in the points',
    'Crofty calls George Russel Mr. Saturday', //from u/krishal_743
    '"Two seconds Ted"', //from u/OhRatFarts
]

const ferrariWinning = [
    'Ferrari Wins',
    'Charles Leclerc Wins',
    'Carlos Sainz Wins',
]

const redBullWinning = [
    'Red Bull Wins',
    'Checo Wins',
    'Max Verstappen Wins',
]

const bahrainBingoCards = [
    'Someone talks about the Mercedes side pods',
    '"Hulkenberg has 3rd most race starts without a win"',
    'Someone talks about McLaren\'s brake issues',
    'Someone talks about Ricciardo giving Vettel COVID',
    'Haas ends up in the points',
    'Someone says the word porpoising',
    '"Hulk"',
    'Commentator mentions Lewis\' yellow T-bar cam',
    '"Mirror Wars"',
    'Haas in the points',
    'Someone crashes at turn 22',
]

const saudiBingoCards = [
    'Someone talks about the Mercedes side pods',
    'Someone talks about Ricciardo giving Vettel COVID',
    'Haas ends up in the points',
    'Someone says the word porpoising',
    'Commentator mentions Lewis\' yellow T-bar cam',
    '"Mirror Wars"',
    'A Red Bull DNF\'s',
]

const australiaBingoCards = [
    'Someone says the word porpoising',
    'Commentator mentions Lewis\' yellow T-bar cam',
    '"Mirror Wars"',
    'A Red Bull DNF\'s',
    'Las Vegas track is mentioned',
    '"Leclerc leads the championship"',
    '"Last time we were in Australia was 2019"',
    
]

// randomizer function with boundary numbers (inclusive)
function randomizer (arrayIndex0, arrayIndexN) {
    return Math.floor(Math.random() * (arrayIndexN + 1 - arrayIndex0)) + arrayIndex0
}

// get array elements from winning arrays so there is no conflict tiles
function winningArray (arr1, arr2) {
    let random = randomizer(0,1)
    const winningArray = []
    let arr = []
    if (random === 0){
        arr = arr1 
    }else if (random === 1){
        arr = arr2
    }
    winningArray.push(arr[0])
    winningArray.push(arr[randomizer(1,2)])
    return winningArray
}

// Combine arrays into single array for the weekend
const currentRaceBingoCards = standardBingoCards.concat(australiaBingoCards).concat(winningArray(ferrariWinning, redBullWinning))
console.log(currentRaceBingoCards)

// randomly assign bingo phrases to cards
function assignPhrases () {
    for (item of frontCards) {
        // generate random number based on array size
        let randomNumber = randomizer(0, currentRaceBingoCards.length - 1)
        // excludes the free or gratis center card
        if (!(item.classList.contains("free"))) {
            // place phrase into card on DOM
            item.innerText = currentRaceBingoCards.splice(randomNumber, 1)
        }
    }
}
assignPhrases()

// generating background image
function randomBGImage () {
    let randomNumber = Math.ceil(Math.random() * 3)
    let viewportWidth = window.innerWidth
    console.log(viewportWidth)
    for (i = 1; i < 10; i++) {
        if (viewportWidth < 550) {
            document.querySelector('.back' + i).style.backgroundImage = "url(img/mobile" + randomNumber + ".jpg)"
        } else {
            document.querySelector('.back' + i).style.backgroundImage = "url(img/desktop" + randomNumber + ".jpg)"
        }
    }
}

randomBGImage()

// Arrays for checking bingo patterns
const acrossPatterns = [[1,2,3], [4,5,6], [7,8,9]]
const downPatterns = [[1,4,7], [2,5,8], [3,6,9]]
const diagonalPatterns = [[1,5,9], [3,5,7]]

for (let item of cards) {
    // function toggle the flipped class on card
    item.addEventListener('click', function flipCard () {
        item.classList.toggle('flipped')
        // grabs all cards that are flipped
        const flippedCards = document.getElementsByClassName('flipped')
        // adds up all standard points
        let pointValue = flippedCards.length * 5
        // check for bingo down and across
            pointValue += checkForBingo(acrossPatterns)
            pointValue += checkForBingo(downPatterns)
            pointValue += checkForBingo(diagonalPatterns)
        // writes points to the DOM
        document.querySelector('.points').innerText = pointValue
    })
}

// function that takes an array of bingo patterns and checks if there are bingos
function checkForBingo (array) {
    let numOfFlipped = 0
    let numOfBingos = 0
    // loop through bingo patterns
    for (let i = 0; i < array.length; i++) {
        numOfFlipped = 0
        // loop through cards
        for (let j = 0; j < 3; j++) {
            if (cards[array[i][j] - 1].classList.contains('flipped')) {
                // flipped card counter
                numOfFlipped += 1 
                if (numOfFlipped === 3) {
                    // bingo counter
                    numOfBingos += 1
                }
            }
        }
    }
    // return total points based on number of bingos
    return numOfBingos * 30
}


