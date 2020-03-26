window.addEventListener('load', init);
//Globals variables
const levels = {
    easy: 5,
    medium: 3,
    hard: 2
};
let currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;


//DOM Elements
let secondsUI = document.querySelector('#counter');
let currentWordUI = document.querySelector('#current-word');
let wordInputUI = document.querySelector('#word-input');
let messageUI = document.querySelector('#message');
let timeDisplayUI = document.querySelector('#time');
let scoreDisplayUI = document.querySelector('#score');

const words = [
    'prince',
    'google',
    'facebook',
    'abberation',
    'paris',
    'amerique',
    'princesse',
    'coolos',
    'huncho',
    'louis',
    'vuitton',
    'developpeur',
    'constant',
    'variable',
    'portable',
    'change',
    'mac',
    'feuille',
    'tricher',
    'courant',
    'document',
    'rendez-vous',
    'nodejs',
    'javascript',
    'abracadabra',
    'linux',
    'futur',
    'hello',
    'famille',
    'priorite',
    'droit',
    'mouvement',
    'responsable',
    'immitation',
    'horreur',
    'police',
    'couple',
    'major',
    'etablissement',
    'application',
    'tupac',
    'bonjour',
    'bee',
    'danger',
    'celibataire',
    'sommeil',
    'elephant',
    'tigre',
    'attention',
    'feedback',
    'histoire',
    'incognito',
    'recherche',
    'through',
    'complicated',
    'coronavirus',
    'faith',
    'faithfull',
    'pityfull',
    'throughout',
    'cathy',
    'jules',
    'qwerty',
    'dutchland',
    'france',
    'italy',
    'congo',
    'cameroon',
    'foi',
    'cruel',
    'king',
    'sagesse',
    'mozilla',
    'chrome',
    'pousser',
    'service',
    'travailleur',
    'dictionnaire',
    'name',
    'sublime',
    'investigation',
    'investissement',
    'inclure',
    'nutrition',
    'peur',
    'word',
    'random',
    'agrandir',
    'replanifier',
    'planifier',
    'renaissance',
    'sauvetage',
    'reponse',
    'requete',
    'poche',
    'fille',
    'partie',
    'burnout',
    'overwhelm',
    'abundance',
    'bitches',
    'folk',
    'github',
    'developper'
];

//init functions fires off when the window load
function init() {
    secondsUI.innerHTML = currentLevel; //show the time on UI
    showWord(words); //show word from the array [words]
    wordInputUI.addEventListener('input', startMatch); //match if currentWord === wordInputUI
    setInterval(countdown, 1000); //Countdown every second
    setInterval(checkStatus, 50); //Check game status
};

//Start Match
function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        wordInputUI.value = '';
        showWord(words);
        time = currentLevel + 1;
        score++;
    }

    //if score -1 display 0
    if (score === -1) {
        scoreDisplayUI.innerHTML = 0;
    } else {
        scoreDisplayUI.innerHTML = score;
    }
}
//match currentWord to wordInputUi
function matchWords() {
    if (wordInputUI.value === currentWordUI.innerHTML) {
        messageUI.innerHTML = 'Correct!!';
        return true;
    } else {
        messageUI.innerHTML = '';
        return false;
    }
}
// Pick and show randomly
function showWord(words) {
    const randIndex = Math.floor(Math.random() * words.length); //Generate a random index 
    currentWordUI.innerHTML = words[randIndex];
}

//countdown timer
function countdown() {
    //Ensure time != 0
    if (time > 0) {
        time--; //Decrement the timer
    } else if (time === 0) {
        isPlaying = false; //Game over!
    }
    timeDisplayUI.innerHTML = time; //Show time in the UI
}
//Check Game Status
function checkStatus() {
    if (!isPlaying && time === 0) {
        messageUI.innerHTML = 'Game Over!!';
        score = -1;
    }
}