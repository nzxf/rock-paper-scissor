//game rule
const options = ['rock', 'paper', 'scissor'];

//computer random hand
function getComputerChoice() {
    const random = Math.floor(Math.random() * parseInt(options.length));
    return options[random];
}

//player input hand
const buttons = document.querySelectorAll('.playerHand')
function getPlayerChoice() {
    for (let button of buttons) {
        button.addEventListener('click', function () {
            clear()
            liveReport(`You chose ${button.value}`)
            playerSelection = button.value
            game()
        })
    }
}

//one round play
const yourScore = document.querySelector('#your-score')
const computerScore = document.querySelector('#computer-score')
let yourScoring = 0
let computerScoring = 0
function playRound(playerSelection, computerSelection) {
    liveReport(`${playerSelection} vs ${computerSelection}`)
    if (playerSelection === computerSelection) {
        liveReport(`It's a Tie! Both of you chose ${playerSelection}`)
    } else if (((playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'paper' && computerSelection === 'rock')) ||
        (playerSelection === 'scissor' && computerSelection === 'paper')) {
        yourScoring += 1
        liveReport(`You Win! Your ${playerSelection} wins againts Computer's ${computerSelection}`)
    } else {
        computerScoring += 1
        liveReport(`You Lose! Computer's ${computerSelection} beats your ${playerSelection}`)
    }
    yourScore.innerText = yourScoring
    computerScore.innerText = computerScoring
}

//display match on page
const display = document.querySelector('#display')
function liveReport(x) {
    const oneLine = document.createElement('P')
    display.append(oneLine)
    oneLine.innerText = x
}

//five win match
const match = 2
isGameOver = false
document.getElementById('playAgain').disabled = true
function game() {
    if (!isGameOver) {
        const computerSelection = getComputerChoice();
        liveReport(`Computer chose ${computerSelection}`)
        playRound(playerSelection, computerSelection)
        if ((yourScoring === match) || (computerScoring === match)) {
            isGameOver = true
            document.getElementById('buttonRock').disabled = true
            document.getElementById('buttonPaper').disabled = true
            document.getElementById('buttonScissor').disabled = true
            document.getElementById('playAgain').disabled = false
            liveReport(`FINAL SCORE => Computer: ${computerScoring} vs ${yourScoring} :You`)
        }
    }

}

//play again = reset
const buttonPlayAgain = document.querySelector('#playAgain')
buttonPlayAgain.addEventListener('click', function () {
    isGameOver = false
    document.getElementById('buttonRock').disabled = false
    document.getElementById('buttonPaper').disabled = false
    document.getElementById('buttonScissor').disabled = false
    document.getElementById('playAgain').disabled = true
    yourScoring = 0
    computerScoring = 0
    yourScore.innerText = yourScoring
    computerScore.innerText = computerScoring
    clear()
})

//clear display
function clear() {
    display.replaceChildren()
}


//game ready to play
getPlayerChoice()
