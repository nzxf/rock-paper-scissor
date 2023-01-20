
//computer's choices randomizer//
const getComputerChoice = (Math.floor(Math.random() * 3) + 1)

//translate computer's choice into rock/paper/scissor //
if (getComputerChoice === 1) {
    console.log("Computer chose ROCK")
} else if (getComputerChoice === 2) {
    console.log("Computer chose PAPER")
} else if (getComputerChoice === 3) {
    console.log("Computer chose SCISSOR")
}

//randomizer outliner tester//
//(if any number outside 1,2, and 3 was chosen, this message will be viewed)//
else {
    console.log("Computer accidentally hit its own head and fainted")
}

//user's choice input// 
let userChoice = prompt("What do you choose? Rock, Paper or Scissor?")

//insensitive case input//
if (userChoice.toLowerCase() === "rock") {
    console.log("You chose ROCK")
} else if (userChoice.toLowerCase() === "paper") {
    console.log("You chose PAPER")
} else if (userChoice.toLowerCase() === "scissor") {
    console.log("You chose SCISSOR")
}

//to filter user input (only accept 'rock', 'paper' or 'scissor')//

else {
    console.log("Your input is invalid. Choose Rock/Paper/Scissor!!")
}

//---computer's choice versus user's choice----//

//winning scenario//
if ((getComputerChoice === 1) && (userChoice.toLowerCase() === "paper")) {
    console.log("Congrats!! You win!!! Paper beats Rock")
} else if ((getComputerChoice === 2) && (userChoice.toLowerCase() === "scissor")) {
    console.log("Congrats!! You win!!! Scissor beats Paper")
} else if ((getComputerChoice === 3) && (userChoice.toLowerCase() === "rock")) {
    console.log("Congrats!! You win!!! Rock beats Scissor")
}

//losing scenario//
else if ((getComputerChoice === 1) && (userChoice.toLowerCase() === "scissor")) {
    console.log("You Lose! Rock beats Scissor.")
} else if ((getComputerChoice === 2) && (userChoice.toLowerCase() === "rock")) {
    console.log("You Lose! Paper beats Rock.")
} else if ((getComputerChoice === 3) && (userChoice.toLowerCase() === "paper")) {
    console.log("You Lose! Scissor beats Paper.")
}

//draw scenario (the rest)//
else {
    console.log("It's a draw.")
}
