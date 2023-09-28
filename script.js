let playerScore = 0
let computerScore = 0
let roundNumber = 0

const play = () => {

    function getComputerChoice() {
        let randomNumber = Math. floor(Math. random()*3)+1
        return randomNumber
    };


    // console. log(getComputerChoice());


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

        // console. log('You have chosen ' + playerSelection)

    function finalPlayerSelection() {
        let initialTurn = playerSelection
        let finalPlayerSelection = initialTurn. charAt(0). toUpperCase() + initialTurn. slice(1);
        return finalPlayerSelection;
    }

    // console. log('You have chosen ' + finalPlayerSelection());
    // console. log('The computer has chosen ' + finalComputerChoice())

    let playerScore = 0
    let computerScore = 0
    let roundNumber = 0

    let playerFinalTurn = finalPlayerSelection();
    let computerFinalTurn = finalComputerChoice();

    // console.log(playerFinalTurn)
    // console.log(computerFinalTurn)

    function gameOutcome(playerFinalTurn, computerFinalTurn) {
        if (playerFinalTurn === 'Rock' && computerFinalTurn === 'Rock') {
            roundNumber++
            return 'You played ' +playerFinalTurn + ' and the computer played ' + computerFinalTurn + '. ' + 'You both played the same, its a draw!';
        }
        else if (playerFinalTurn === 'Rock' && computerFinalTurn === 'Paper') {
            roundNumber++
            computerScore++
            return 'You played ' + playerFinalTurn + ' and the computer played ' + computerFinalTurn + '. ' + 'Paper beats rock, you lose!';
        }
        else if (playerFinalTurn === 'Rock' && computerFinalTurn === 'Scissors') {
            roundNumber++
            playerScore++
            return 'You played ' + playerFinalTurn + ' and the computer played ' + computerFinalTurn + '. ' + 'Rock beats scissors, you win!';
        }
        else if (playerFinalTurn === 'Paper' && computerFinalTurn === 'Rock') {
            roundNumber++
            playerScore++
            return 'You played ' + playerFinalTurn + ' and the computer played ' + computerFinalTurn + '. ' + 'Paper beats rock, you win!';
        }
        else if (playerFinalTurn === 'Paper' && computerFinalTurn === 'Paper') {
            roundNumber++
            return 'You played ' + playerFinalTurn + ' and the computer played ' + computerFinalTurn + '. ' + 'You both played the same, its a draw!';
        }
        else if (playerFinalTurn === 'Paper' && computerFinalTurn === 'Scissors') {
            roundNumber++
            computerScore++
            return 'You played ' + playerFinalTurn + ' and the computer played ' + computerFinalTurn + '. ' + 'Scissors beats paper, you lose!';
        }
        else if (playerFinalTurn === 'Scissors' && computerFinalTurn === 'Rock') {
            roundNumber++
            computerScore++
            return 'You played ' + playerFinalTurn + ' and the computer played ' + computerFinalTurn + '. ' + 'Rock beats scissors, you lose!';
        }
        else if (playerFinalTurn === 'Scissors' && computerFinalTurn === 'Paper') {
            roundNumber++
            playerScore++
            return 'You played ' + playerFinalTurn + ' and the computer played ' + computerFinalTurn + '. ' + 'Scissors beats paper, you win!';
        }
        else if (playerFinalTurn === 'Scissors' && computerFinalTurn === 'Scissors') {
            roundNumber++
            return 'You played ' + playerFinalTurn + ' and the computer played ' + computerFinalTurn + '. ' + 'You both played the same, its a draw!';
        }
        else {
            return 'Invalid result.  Try again. ';
        }
    };


    function results() {
        return `${gameOutcome(playerFinalTurn, computerFinalTurn)} \n Your score is ${playerScore}. \n The computer score is ${computerScore}.`;  
    }

    console.log(results());


}



function game() {
    while (roundNumber <= 5) {
        play()
        roundNumber++
        console.log('This is round ' + roundNumber);
    }


}

console.log(game());

// function game(finalPlayerSelection,finalComputerChoice) {
//     while (roundNumber < 6) {
//         return gameOutcome(finalComputerChoice(),finalPlayerSelection());
//     }
// }


// console. log(game(finalPlayerSelection, finalComputerChoice));

// function winner (computerScore, playerScore) {
//     if (computerScore > playerScore) {
//         return 'Computer wins!';
//     }
//     else if (playerScore > computerScore) {
//         return 'You win!';
//     }
//     else {
//         return 'Invalid game'
//     }
// }

// console. log(winner(computerScore, playerScore))


// function gameRound() {
//     return gameOutcome();
//     roundNumber++
// }

// console. log(gameRound());


// function game() {
//     let roundOne = gameOutcome(finalComputerChoice(),finalPlayerSelection())
//     console. log('Your score is ' + playerScore)
//     console. log('The computer score is ' + computerScore)
//     let roundTwo = gameOutcome(finalComputerChoice(),finalPlayerSelection())
//     console. log('Your score is ' + playerScore)
//     console. log('The computer score is ' + computerScore)
// }

// console. log(game())

// function winner() {
//     if (computerScore === playerScore) {
//         return 'Tie!';
//     }
//     else if (computerScore > playerScore) {
//         return 'Computer wins!';
//     }
//     else if (computerScore > playerScore) {
//         return 'You win!';
//     }
//     else {
//         return 'Invalid game. ';
//     }
// }

// console. log(winner())