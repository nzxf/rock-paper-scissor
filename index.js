//game rule//
const options = ['rock', 'paper', 'scissor'];

//computer random choice//
function getComputerChoice() {
    const random = Math.floor(Math.random() * parseInt(options.length));
    return options[random];
}

// const lastFiveMatch = []
// let match = 0


function playRound(playerSelection, computerSelection) {
    liveReport(`${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()}`)
    if (playerSelection === computerSelection) {
        // lastFiveMatch[match] = 'DRAW'
        liveReport(`It's a Tie! Both of you chose ${playerSelection}`)
    } else if (((playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'paper' && computerSelection === 'rock')) ||
        (playerSelection === 'scissor' && computerSelection === 'paper')) {
        // lastFiveMatch[match] = 'WIN'
        liveReport(`You Win! Your ${playerSelection} beats Computer's ${computerSelection}`)
    } else {
        // lastFiveMatch[match] = 'LOSE'
        liveReport(`You Lose! Computer's ${computerSelection} beats your ${playerSelection}`)
    }
}

// const liveReport = document.querySelector('#liveReport')
const buttons = document.querySelectorAll('button')


for (let button of buttons) {
    button.addEventListener('click', function () {
        // const arena = document.querySelector('#arena')
        // const report = document.createElement('P')
        // arena.append(report)
        // liveReport.innerText = `You chose ${button.innerText}`
        liveReport(`You chose ${button.value}`)
        playerSelection = button.value
        game()
    })
}

function game() {
    // while (match <= 4) {
    const computerSelection = getComputerChoice();
    liveReport(`Computer chose ${computerSelection}`)
    return playRound(playerSelection, computerSelection)
    //     match++
    // }
    // console.log('Your last five matches: ')
    // console.log(lastFiveMatch)
}

function liveReport(x) {
    const arena = document.querySelector('#arena')
    const oneLine = document.createElement('P')
    arena.append(oneLine)
    oneLine.innerText = x
}