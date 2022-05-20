// listen for a click on a card
const cards = document.getElementsByClassName('card');
let frontCards = document.getElementsByClassName('front');

for (let item of cards) {
  // function toggle the flipped class on card
  item.addEventListener('click', function flipCard() {
    item.classList.toggle('flipped');
    // grabs all cards that are flipped
    const flippedCards = document.getElementsByClassName('flipped');
    // adds up all standard points
    let pointValue = flippedCards.length * 5;
    // check for bingo down and across
    pointValue += checkForBingo(acrossPatterns);
    pointValue += checkForBingo(downPatterns);
    pointValue += checkForBingo(diagonalPatterns);
    // writes points to the DOM
    writeToDOM('.racePoints', pointValue);
  });
}

// Race specific phrases
const bahrainBingoCards = [
  'Someone talks about the Mercedes side pods',
  '"Hulkenberg has 3rd most race starts without a win"',
  "Someone talks about McLaren's brake issues",
  'Someone talks about Ricciardo giving Vettel COVID',
  'Haas ends up in the points',
  'Someone says the word porpoising',
  '"Hulk"',
  "Commentator mentions Lewis' yellow T-bar cam",
  '"Mirror Wars"',
  'Haas in the points',
  'Someone crashes at turn 22',
];

const saudiBingoCards = [
  'Someone talks about the Mercedes side pods',
  'Someone talks about Ricciardo giving Vettel COVID',
  'Haas ends up in the points',
  'Someone says the word porpoising',
  "Commentator mentions Lewis' yellow T-bar cam",
  '"Mirror Wars"',
  "A Red Bull DNF's",
];

const australiaBingoCards = [
  'Someone says the word porpoising',
  "Commentator mentions Lewis' yellow T-bar cam",
  '"Mirror Wars"',
  "A Red Bull DNF's",
  'Las Vegas track is mentioned',
  '"Leclerc leads the championship"',
  '"Last time we were in Australia was 2019"',
];

const imolaBingoCards = [
  'Someone says the word porpoising',
  "A Red Bull DNF's",
  '"Leclerc leads the championship"',
];

const miamiBingoCards = [
  'Someone says the word porpoising',
  'Hamilton out of the points',
  '"Leclerc leads the championship"',
  'close up shot of the "harbor"',
  'Latifi crashes',
];

const spainBingoCards = [
  'Someone says the word porpoising',
  'Hamilton out of the points',
  '"Leclerc leads the championship"',
  'Latifi crashes',
  'Pole position wins the race',
];

// Seasons worth of race objects!
class Race {
  constructor(storageName, domTitle, year, month, day, phrases) {
    this.storageName = storageName;
    this.domTitle = domTitle;
    this.startDate = new Date(year, month - 1, day);
    this.phrases = phrases;
  }
}
const bahrain = new Race(
  'bahrain',
  'Bahrain Grand Prix',
  2022,
  3,
  18,
  bahrainBingoCards
);
const saudiArabia = new Race(
  'saudiArabia',
  'Saudi Arabian Grand Prix',
  2022,
  3,
  25,
  saudiBingoCards
);
const australia = new Race(
  'australia',
  'Australian Grand Prix',
  2022,
  4,
  8,
  australiaBingoCards
);
const imola = new Race(
  'imola',
  'Imola Grand Prix',
  2022,
  4,
  22,
  imolaBingoCards
);
const miami = new Race(
  'miami',
  'Miami Grand Prix',
  2022,
  5,
  6,
  miamiBingoCards
);
const spain = new Race(
  'spain',
  'Spanish Grand Prix',
  2022,
  5,
  20,
  spainBingoCards
);
const monaco = new Race('monaco', 'Monaco Grand Prix', 2022, 5, 27);
const azerbaijan = new Race('azerbaijan', 'Azerbaijan Grand Prix', 2022, 6, 10);
const canada = new Race('canada', 'Canadian Grand Prix', 2022, 6, 17);
const britain = new Race('britain', 'British Grand Prix', 2022, 7, 1);
const austria = new Race('austria', 'Austrian Grand Prix', 2022, 7, 8);
const france = new Race('france', 'French Grand Prix', 2022, 7, 22);
const hungary = new Race('hungary', 'Hungarian Grand Prix', 2022, 7, 29);
const belgium = new Race('belgium', 'Belgian Grand Prix', 2022, 8, 26);
const netherlands = new Race('netherlands', 'Dutch Grand Prix', 2022, 9, 2);
const monza = new Race('monza', 'Italian Grand Prix', 2022, 9, 9);
const singapore = new Race('singapore', 'Singapore Grand Prix', 2022, 9, 30);
const japan = new Race('japan', 'Japanese Grand Prix', 2022, 10, 7);
const austin = new Race('austin', 'Austin Grand Prix', 2022, 10, 21);
const mexico = new Race('mexico', 'Mexican Grand Prix', 2022, 10, 28);
const brazil = new Race('brazil', 'Brazilian Grand Prix', 2022, 11, 11);
const abuDhabi = new Race('abuDhabi', 'Abu Dhabi Grand Prix', 2022, 11, 18);

// Array of races
const races = [
  bahrain,
  saudiArabia,
  australia,
  imola,
  miami,
  spain,
  monaco,
  azerbaijan,
  canada,
  britain,
  austria,
  france,
  hungary,
  belgium,
  netherlands,
  monza,
  singapore,
  japan,
  austin,
  mexico,
  brazil,
  abuDhabi,
];

// get current race
// get todays date
// compare todays date until you find date that is greater. Use previous race data
function getCurrentRaceIndex() {
  const today = new Date();
  let i = 0;
  while (today > races[i].startDate) {
    i++;
    console.log(i);
  }
  return i - 1;
}

// Array of standard strings
const standardBingoCards = [
  '"Massive shunt"',
  'A front wing is replaced',
  "There's a crash on lap 1",
  'Russell beats Hamilton',
  'Alonso in the points',
  'Someone pits in last 5 laps to grab fastest lap',
  'Someone mentions the "little bits"',
  "4+ DNF's",
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
  'Horners foot tapping',
  'Toto shaking his head in disgust',
  'Haas Podium',
  'Helmet Cam View',
  'McLaren finish in the top 10',
  'Haas ends up in the points',
  'Crofty calls George Russel Mr. Saturday', //from u/krishal_743
  '"Two seconds Ted"', //from u/OhRatFarts
  'Sky race control, down to you',
  'Great little scrap',
  'Stroll gets a penalty',
  '"Fresh pair of boots"',
  'Bleeped word on team radio',
];

const ferrariWinning = [
  'Ferrari Wins',
  'Charles Leclerc Wins',
  'Carlos Sainz Wins',
];

const redBullWinning = ['Red Bull Wins', 'Checo Wins', 'Max Verstappen Wins'];

// randomizer function with boundary numbers (inclusive)
function randomizer(arrayIndex0, arrayIndexN) {
  return (
    Math.floor(Math.random() * (arrayIndexN + 1 - arrayIndex0)) + arrayIndex0
  );
}

// get array elements from winning arrays so there is no conflict tiles
function winningArray(arr1, arr2) {
  let random = randomizer(0, 1);
  const winningArray = [];
  let arr = [];
  if (random === 0) {
    arr = arr1;
  } else if (random === 1) {
    arr = arr2;
  }
  winningArray.push(arr[0]);
  winningArray.push(arr[randomizer(1, 2)]);
  return winningArray;
}

// Combine arrays into single array for the weekend
const currentRaceBingoCards = standardBingoCards
  .concat(races[getCurrentRaceIndex()].phrases)
  .concat(winningArray(ferrariWinning, redBullWinning));

// randomly assign bingo phrases to cards
function assignPhrases() {
  for (item of frontCards) {
    // generate random number based on array size
    let randomNumber = randomizer(0, currentRaceBingoCards.length - 1);
    // excludes the free or gratis center card
    if (!item.classList.contains('free')) {
      // place phrase into card on DOM
      item.innerText = currentRaceBingoCards.splice(randomNumber, 1);
    }
  }
}
assignPhrases();

// generating background image
function randomBGImage() {
  let randomNumber = Math.ceil(Math.random() * 3);
  let viewportWidth = window.innerWidth;
  for (i = 1; i < 10; i++) {
    if (viewportWidth < 550) {
      document.querySelector('.back' + i).style.backgroundImage =
        'url(img/mobile' + randomNumber + '.jpg)';
    } else {
      document.querySelector('.back' + i).style.backgroundImage =
        'url(img/desktop' + randomNumber + '.jpg)';
    }
  }
}
randomBGImage();

// Arrays for checking bingo patterns
const acrossPatterns = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const downPatterns = [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];
const diagonalPatterns = [
  [1, 5, 9],
  [3, 5, 7],
];

// function that takes an array of bingo patterns and checks if there are bingos
function checkForBingo(array) {
  let numOfFlipped = 0;
  let numOfBingos = 0;
  // loop through bingo patterns
  for (let i = 0; i < array.length; i++) {
    numOfFlipped = 0;
    // loop through cards
    for (let j = 0; j < 3; j++) {
      if (cards[array[i][j] - 1].classList.contains('flipped')) {
        // flipped card counter
        numOfFlipped += 1;
        if (numOfFlipped === 3) {
          // bingo counter
          numOfBingos += 1;
        }
      }
    }
  }
  // return total points based on number of bingos
  return numOfBingos * 30;
}

// event listener for submit button
document
  .getElementById('submitBtn')
  .addEventListener('click', submitRacePoints);

function submitRacePoints() {
  // grab value in .racePoints and store in local storage
  pointValue = document.querySelector('.racePoints').innerText;
  // local storage variable named after race
  localStorage.setItem(
    races[getCurrentRaceIndex()].storageName,
    String(pointValue)
  );
}

// get season total of points
function getSeasonTotal() {
  let total = 0;
  races.forEach((race) => {
    total += localStorage.getItem(race.storageName)
      ? +localStorage.getItem(race.storageName)
      : 0;
  });
  return total;
}

// write point values to DOM
function writeToDOM(className, value) {
  document.querySelector(className).innerText = value;
}

// write season total points to DOM
writeToDOM('.seasonPoints', getSeasonTotal());

// write current race header to DOM
writeToDOM('.race h2', races[getCurrentRaceIndex()].domTitle);

// Update svg based on race
function updateRaceSVG() {
  document.querySelector('.race img').src = `img/${
    races[getCurrentRaceIndex()].storageName
  }.svg`;
  document.querySelector('.race img').alt = `${
    races[getCurrentRaceIndex()].domTitle
  } Track Layout`;
}
updateRaceSVG();
