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
    liveReport(`${computerSelection.toUpperCase()} vs ${playerSelection.toUpperCase()}`)
    if (playerSelection === computerSelection) {
        liveReport(`Both of you choose ${playerSelection}`)
        liveReportBold("It's a tie!")
    } else if (((playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'paper' && computerSelection === 'rock')) ||
        (playerSelection === 'scissor' && computerSelection === 'paper')) {
        yourScoring += 1
        liveReport(`${computerSelection.charAt(0).toUpperCase()}${computerSelection.slice(1)} loses againts ${playerSelection}`)
        liveReportBold("You win this round!")
    } else {
        computerScoring += 1
        liveReport(`${computerSelection.charAt(0).toUpperCase()}${computerSelection.slice(1)} beats ${playerSelection}`)
        liveReportBold("You lose this round!")
    }
    yourScore.innerText = yourScoring
    computerScore.innerText = computerScoring
}

//display match on page = regular or bold
const display = document.querySelector('#display')
function liveReport(x) {
    const oneLine = document.createElement('P')
    oneLine.innerText = x
    display.append(oneLine)
}
function liveReportBold(x) {
    const oneLine = document.createElement('B')
    oneLine.innerText = x
    display.append(oneLine)
}


//five win match
const match = 3
isGameOver = false
document.getElementById('playAgain').disabled = true
function game() {
    if (!isGameOver) {
        clear()
        const computerSelection = getComputerChoice();
        liveReport(`Computer choose ${computerSelection}`)
        liveReport(`You choose ${playerSelection}`)
        playRound(playerSelection, computerSelection)
        if ((yourScoring === match) || (computerScoring === match)) {
            isGameOver = true
            document.getElementById('buttonRock').disabled = true
            document.getElementById('buttonPaper').disabled = true
            document.getElementById('buttonScissor').disabled = true
            document.getElementById('playAgain').disabled = false
            liveReport('----------------------------------')
            liveReport('FINAL SCORE')
            liveReportBold(`|Computer| ${computerScoring} : ${yourScoring} |You|`)
            if (yourScoring === match) {
                liveReport('You win overall match. Congratulation!!!')
            } else {
                liveReport("It's okay. You can try again.")
            }
            liveReport('----------------------------------')
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
    clear()
    yourScoring = 0
    computerScoring = 0
    yourScore.innerText = '#'
    computerScore.innerText = '#'
})

//clear display
function clear() {
    display.replaceChildren()
}


//game ready to play
getPlayerChoice()
