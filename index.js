//game rule
const options = ['rock', 'paper', 'scissors'];

//computer random hand
function getComputerChoice() {
    const random = Math.floor(Math.random() * parseInt(options.length));
    return options[random];
}

//player input hand
const buttons = document.querySelectorAll('.playerHand')
function getPlayerChoice() {
    addAvatar('robot', avatarHolderLeft)
    addAvatar('human', avatarHolderRight)
    versusImage()
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
    setTimeout(() => {
        liveReport(`${computerSelection.toUpperCase()} vs ${playerSelection.toUpperCase()}`)
    }, 350);
    if (playerSelection === computerSelection) {
        setTimeout(() => {
            liveReport(`(Both of you choose ${playerSelection})`)
            liveReportBold("IT'S A TIE!")
        }, 350);
    } else if (((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock')) ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
        yourScoring += 1
        setTimeout(() => {
            addTrophyRight()
            liveReport(`(${computerSelection.charAt(0).toUpperCase()}${computerSelection.slice(1)} loses againts ${playerSelection})`)
            liveReportBold("YOU WIN THIS ROUND")
        }, 350);
    } else {
        computerScoring += 1
        setTimeout(() => {
            addTrophyLeft()
            liveReport(`(${computerSelection.charAt(0).toUpperCase()}${computerSelection.slice(1)} beats ${playerSelection})`)
            liveReportBold("YOU LOSE THIS ROUND")
        }, 350);
    }
    setTimeout(() => {
        yourScore.innerText = yourScoring
        computerScore.innerText = computerScoring
    }, 350);

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

//final score message
const upDisplay = document.querySelector('#upper-display-text')
function finalScore(x) {
    const finalMessage = document.createElement('P')
    finalMessage.innerText = x
    upDisplay.append(finalMessage)
}

//play again = reset
const buttonPlayAgain = document.querySelector('#playAgain')
buttonPlayAgain.addEventListener('click', function () {
    isGameOver = false
    allPlayButtons.forEach(button => button.disabled = false)
    buttonPlayAgain.style.visibility = "hidden"
    upDisplay.style.visibility = "hidden"
    clear()
    yourScoring = 0
    computerScoring = 0
    yourScore.innerText = '#'
    computerScore.innerText = '#'
    yourScore.style.color = ""
    computerScore.style.color = ""
    upDisplay.replaceChildren()
    trophyLeftSlot.replaceChildren()
    trophyRightSlot.replaceChildren()
    versusImage()
    addAvatar('robot', avatarHolderLeft)
    addAvatar('human', avatarHolderRight)
})

//five win match
const match = 3
isGameOver = false
const allPlayButtons = document.querySelectorAll('.playButton')
buttonPlayAgain.style.visibility = "hidden"
upDisplay.style.visibility = "hidden"
function game() {
    if (!isGameOver) {
        clear()
        const computerSelection = getComputerChoice();
        handLeft(computerSelection)
        handRight(playerSelection)
        playRound(playerSelection, computerSelection)
        if ((yourScoring === match) || (computerScoring === match)) {
            isGameOver = true
            allPlayButtons.forEach(button => button.disabled = true)
            setTimeout(() => {
                buttonPlayAgain.style.visibility = "visible"
                upDisplay.style.visibility = "visible"
                if (yourScoring === match) {
                    addLostAvatar('robot', avatarHolderLeft)
                    finalScore('CONGRATS!!! YOU WIN')
                    finalScore('THE OVERALL GAME')
                    yourScore.style.color = "#2b9348"
                    computerScore.style.color = "#e63946"
                } else {
                    addLostAvatar('human', avatarHolderRight)
                    finalScore('OH NO! YOU LOSE')
                    finalScore("THE OVERALL GAME")
                    yourScore.style.color = "#e63946"
                    computerScore.style.color = "#2b9348"
                }
            }, 400);

        }
    }

}

//clear display
function clear() {
    display.replaceChildren()
    midDisplayLeft.replaceChildren()
    midDisplayRight.replaceChildren()
    midDisplayCenter.replaceChildren()
}

//add static image
const midDisplayCenter = document.querySelector('#middle-display-center')
function versusImage() {
    const versus = document.createElement('IMG')
    versus.src = `images/versus.png`
    versus.width = "200"
    versus.style.opacity = "75%"
    midDisplayCenter.append(versus)
}

//player avatars
const avatarHolderLeft = document.querySelector('.avatar-holder-left')
const avatarHolderRight = document.querySelector('.avatar-holder-right')
function addAvatar(player, location) {
    const addingAvatar = document.createElement('IMG')
    addingAvatar.src = `images/${player}-neutral.png`
    addingAvatar.width = "200"
    location.replaceChildren()
    location.append(addingAvatar)
}
function addLostAvatar(player, location) {
    const addingLostAvatar = document.createElement('IMG')
    addingLostAvatar.src = `images/${player}-lost.png`
    addingLostAvatar.width = "200"
    location.replaceChildren()
    location.append(addingLostAvatar)
}

// fun: bot agitated cause by mouseover(and mouseleave) and buttons clicked
const bodyLeft = document.querySelector('#body-left')
bodyLeft.addEventListener('mouseenter', function () {
    addLostAvatar('robot', avatarHolderLeft)
    display.replaceChildren()
    liveReportBold(`Robot: ${agitatedBot()}`)
})
bodyLeft.addEventListener('mouseleave', function () {
    addAvatar('robot', avatarHolderLeft)
})
function agitatedBot() {
    const agitations = ["What are you doing here? This is my side!",
        "Okay, stop messing around!",
        "Go back to your side!",
        "Are you trying to piss me off?",
        "Are we gonna play or what?",
        "I swear if you touch me one more time!",
        "Hey, that was rude!",
        "I will CRUSH you!",
        "You know how to play this, right?"]
    let random = Math.floor(Math.random() * agitations.length)
    return agitations[random]
}
const botButtons = document.querySelectorAll('#control-left button')
botButtons.forEach(button => button.addEventListener('click', function () {
    addLostAvatar('robot', avatarHolderLeft)
    display.replaceChildren()
    liveReportBold(`Robot: What the... That's my ${button.value.toLowerCase()} button!!!`)
}))

//add image and animation hands move
const midDisplayRight = document.querySelector('#middle-display-right')
const midDisplayLeft = document.querySelector('#middle-display-left')
function handRight(x) {
    const move = document.createElement('IMG')
    move.src = `images/${x}-right.png`
    move.width = "200"
    move.classList.add('from-right')
    midDisplayRight.append(move)
}
function handLeft(x) {
    const move = document.createElement('IMG')
    move.src = `images/${x}-left.png`
    move.width = "200"
    move.classList.add('from-left')
    midDisplayLeft.append(move)
}

//add trophy icon each win
const trophyRightSlot = document.querySelector('#trophy-right')
function addTrophyRight() {
    const trophyRight = document.createElement('IMG')
    trophyRight.src = "images/trophy.png"
    trophyRight.width = "30"
    trophyRightSlot.append(trophyRight)
}
const trophyLeftSlot = document.querySelector('#trophy-left')
function addTrophyLeft() {
    const trophyLeft = document.createElement('IMG')
    trophyLeft.src = "images/trophy.png"
    trophyLeft.width = "30"
    trophyLeftSlot.append(trophyLeft)
}

getPlayerChoice()
