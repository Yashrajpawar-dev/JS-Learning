let randomNumber = parseInt(Math.random()* 100 + 1);

const submit = document.querySelector('#submit')
const  guessField = document.querySelector('#guessField')

const  guessSlot = document.querySelector('.guesses')

const  remaining = document.querySelector('.remaining')
const  LoworHigh = document.querySelector('.lowOrHi')
const startover = document.querySelector('.result')

const p = document.createElement('p')

prevGuesses = [];

let numGuesses = 1;

let playGame = true;
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(guessField.value)
         validGuess(guess);
    })
}

function validGuess(guess){
if(isNaN(guess) || guess < 1|| guess > 100){
    alert('please enter a valid number')

}else{
    prevGuesses.push(guess);
    if(numGuesses === 11){
displayguess(guess);
displayMessage(`game over, random number is ${randomNumber}`)
endGame();
    }
else{
    displayguess(guess);
    checkGuess(guess);

}
    
}
}
function checkGuess(guess){
if(guess ===randomNumber){
    displayMessage(`Congratulations! you guessed it right ${randomNumber}`)
}else if(guess< randomNumber){
 displayMessage(`your guess is too low`)
}else if(guess > randomNumber){
    displayMessage(`you guess is to high from the random number`)
}

} 
function displayguess(guess){
    guessField.value = '';
    guessSlot.innerHTML += `${guess} `
    numGuesses++;
    remaining.innerHTML = `${11- numGuesses}`
}
function displayMessage(message){
LoworHigh.innerHTML = `<h2>${message} </h2>`
}
function newGame(){
const newGameButton = document.querySelector('#newGame')
newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random()* 100 + 1);
    prevGuesses = []
    numGuesses =1 
    guessSlot.innerHTML = ''
    remaining.innerHTML = '10'
    guessField.removeAttribute('disabled')
    startover.removeChild(p)
    playGame = true

})
}
function endGame(){
guessField.value = ''
guessField.setAttribute('disabled', '')
p.classList.add('button')
p.innerHTML = `<button id = "newGame">New Game</button>`
startover.appendChild(p)
playGame =  false;
newGame();

}