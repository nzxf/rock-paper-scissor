
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
