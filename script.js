function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3)+1
    return randomNumber
};


// console.log(getComputerChoice());


function finalComputerChoice() {

    const choice = getComputerChoice()
    
    if (choice === 1) {
    return 'Rock';
    }   
    else if (choice === 2) {
    return 'Paper';
    }    
    else {
    return 'Scissors';
    }
};


var playerSelection = prompt('Please choose Rock, Paper or Scissors:', '');

    // console.log('You have chosen ' + playerSelection)

function finalPlayerSelection() {
    let initialTurn = playerSelection
    let finalPlayerSelection = initialTurn.charAt(0).toUpperCase() + initialTurn.slice(1);
    return finalPlayerSelection;
}

console.log('You have chosen ' + finalPlayerSelection());
console.log('The computer has chosen ' + finalComputerChoice())


function gameOutcome(finalPlayerSelection, finalComputerChoice) {
    if (finalPlayerSelection === 'Rock' && finalComputerChoice === 'Rock') {
        return 'You both played the same, its a draw!';
    }
    else if (finalPlayerSelection === 'Rock' && finalComputerChoice === 'Paper') {
        return 'Paper beats rock, you lose!';
    }
    else if (finalPlayerSelection === 'Rock' && finalComputerChoice === 'Scissors') {
        return 'Rock beats scissors, you win!';
    }
    else if (finalPlayerSelection === 'Paper' && finalComputerChoice === 'Rock') {
        return 'Paper beats rock, you win!';
    }
    else if (finalPlayerSelection === 'Paper' && finalComputerChoice === 'Paper') {
        return 'You both played the same, its a draw!';
    }
    else if (finalPlayerSelection === 'Paper' && finalComputerChoice === 'Scissors') {
        return 'Scissors beats paper, you lose!';
    }
    else if (finalPlayerSelection === 'Scissors' && finalComputerChoice === 'Rock') {
        return 'Rock beats scissors, you lose!';
    }
    else if (finalPlayerSelection === 'Scissors' && finalComputerChoice === 'Paper') {
        return ' Scissors beats paper, you win!';
    }
    else if (finalPlayerSelection === 'Scissors' && finalComputerChoice === 'Scissors') {
        return 'You both played the same, its a draw!';
    }
    else {
        return 'Invalid result. Try again.';
    }
};

// return gameOutcome(finalPlayerSelection, finalComputerChoice);



console.log(gameOutcome(finalComputerChoice(),finalPlayerSelection()));

// User        Computer    Prints
// Rock        Rock        You both played the same, its a draw!
// Rock        Paper       Paper beats rock, you lose!
// Rock        Scissors    Rock beats scissors, you win!
// Paper       Rock        Paper beats rock, you win!
// Paper       Paper       You both played the same, its a draw!
// Paper       Scissors    Scissors beats paper, you lose!
// Scissors    Rock        Rock beats scissors, you lose!
// Scissors    Paper       Scissors beats paper, you win!
// Scissors    Scissors    You both played the same, its a draw!