let playerScore = 0
let computerScore = 0
let roundNumber = 0

const play = (playerFinalTurn) => {

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


    // var playerSelection = prompt('Please choose Rock, Paper or Scissors:', '');
    

        // console. log('You have chosen ' + playerSelection)

    // function finalPlayerSelection() {
    //     // let initialTurn = playerSelection
    //     // let finalPlayerSelection = initialTurn. charAt(0). toUpperCase() + initialTurn. slice(1);
    //     // return finalPlayerSelection;
    //     const rockbutton = document.querySelector('#rockbtn');
    //     const paperbutton = document.querySelector('#paperbtn');
    //     const scissorsbutton = document.querySelector('#scissorsbtn');
    //     // console.log(rockbutton)
    //     if  rockbutton.addEventListener ('click', () => {
    //         let finalPlayerSelection = Rock
    //         return finalPlayerSelection;
    //     })
        
    //     if else paperbutton.addEventListener ('click', () => {
    //         let finalPlayerSelection = Paper
    //         return finalPlayerSelection;
    //     })
    //     if else rockbutton.addEventListener ('click', () => {
    //         let finalPlayerSelection = Scissors
    //         return finalPlayerSelection;
    //     })
    //     else {
    //         return 'Invalid response!';
    //     }
        
    //     console.log(finalPlayerSelection); 
    //     });
    // }



    // console. log('You have chosen ' + finalPlayerSelection());
    // console. log('The computer has chosen ' + finalComputerChoice())

    // let playerScore = 0
    // let computerScore = 0
    // let roundNumber = 0

    // let playerFinalTurn = finalPlayerSelection();
    let computerFinalTurn = finalComputerChoice();

    // console.log(playerFinalTurn)
    // console.log(computerFinalTurn)

    function gameOutcome(playerFinalTurn, computerFinalTurn) {
        if (playerFinalTurn === 'Rock' && computerFinalTurn === 'Rock') {
            // roundNumber++
            return 'You played ' + playerFinalTurn + ' and the computer played ' + computerFinalTurn + '. ' + 'You both played the same, its a draw!';
        }
        else if (playerFinalTurn === 'Rock' && computerFinalTurn === 'Paper') {
            // roundNumber++
            computerScore++
            return 'You played ' + playerFinalTurn + ' and the computer played ' + computerFinalTurn + '. ' + 'Paper beats rock, you lose!';
        }
        else if (playerFinalTurn === 'Rock' && computerFinalTurn === 'Scissors') {
            // roundNumber++
            playerScore++
            return 'You played ' + playerFinalTurn + ' and the computer played ' + computerFinalTurn + '. ' + 'Rock beats scissors, you win!';
        }
        else if (playerFinalTurn === 'Paper' && computerFinalTurn === 'Rock') {
            // roundNumber++
            playerScore++
            return 'You played ' + playerFinalTurn + ' and the computer played ' + computerFinalTurn + '. ' + 'Paper beats rock, you win!';
        }
        else if (playerFinalTurn === 'Paper' && computerFinalTurn === 'Paper') {
            // roundNumber++
            return 'You played ' + playerFinalTurn + ' and the computer played ' + computerFinalTurn + '. ' + 'You both played the same, its a draw!';
        }
        else if (playerFinalTurn === 'Paper' && computerFinalTurn === 'Scissors') {
            // roundNumber++
            computerScore++
            return 'You played ' + playerFinalTurn + ' and the computer played ' + computerFinalTurn + '. ' + 'Scissors beats paper, you lose!';
        }
        else if (playerFinalTurn === 'Scissors' && computerFinalTurn === 'Rock') {
            // roundNumber++
            computerScore++
            return 'You played ' + playerFinalTurn + ' and the computer played ' + computerFinalTurn + '. ' + 'Rock beats scissors, you lose!';
        }
        else if (playerFinalTurn === 'Scissors' && computerFinalTurn === 'Paper') {
            // roundNumber++
            playerScore++
            return 'You played ' + playerFinalTurn + ' and the computer played ' + computerFinalTurn + '. ' + 'Scissors beats paper, you win!';
        }
        else if (playerFinalTurn === 'Scissors' && computerFinalTurn === 'Scissors') {
            // roundNumber++
            return 'You played ' + playerFinalTurn + ' and the computer played ' + computerFinalTurn + '. ' + 'You both played the same, its a draw!';
        }
        else {
            return 'Invalid result.  Try again. ';
        }
    };


    function results() {
        if (playerScore < 5 && computerScore < 5) {
            const roundResults = document.querySelector('#results');
            roundResults.textContent = `${gameOutcome(playerFinalTurn, computerFinalTurn)} \n Your score is ${playerScore}. \n The computer score is ${computerScore}.`;
            const finalScore = document.querySelector('#finalScore');
            finalScore.textContent = 'Player = ' + playerScore + '     Computer = ' + computerScore
            // return `${gameOutcome(playerFinalTurn, computerFinalTurn)} \n Your score is ${playerScore}. \n The computer score is ${computerScore}.`; 
        }
        else if (playerScore = 5 && computerScore < 5) {
            const winner = document.querySelector('#winner')
            winner.textContent = 'You win! Hooray!'
        }
        else if (computerScore = 5 && playerScore < 5) {
            const winner = document.querySelector('#winner')
            winner.textContent = 'Computer wins! Better luck next time...'
        }
        else {
            const winner = document.querySelector('#winner')
            winner.textContent = 'A draw!!!'
        }
    
    }

    console.log(results());

    function winner() {
        if (playerScore < 5 && computerScore < 5) {
            const winner = document.querySelector('#winner')
            winner.textContent = 'Keep going, you have got this!'
        }
        else if (playerScore = 5 && computerScore < 5) {
            const winner = document.querySelector('#winner')
            winner.textContent = 'You win!!! Hooray!'
        }
        else if (computerScore = 5 && playerScore < 5) {
            const winner = document.querySelector('#winner')
            winner.textContent = 'Computer wins! Better luck next time...'
        }
        else {
            const winner = document.querySelector('#winner')
            winner.textContent = 'GAME OVER'
        }
    }

    console.log(winner());
} 
   

    



let finalComputerScore = 0
let finalPlayerScore = 0

function game() {

}

// function game() {
//     while (roundNumber < 5) {
//         play())
//         roundNumber++
//         console.log('This is round ' + roundNumber);
//     }
//     if (computerScore > playerScore ) {
//         console.log('Computer wins!')
//     }
//     else if (playerScore > computerScore) {
//         console.log('You win!')
//     }
//     else {
//         console.log('It is a draw!')
//     }

// }

// game();

const rockbutton = document.querySelector('#rockbtn');
console.log(rockbutton)
rockbutton.addEventListener ('click', () => {
    play('Rock')
});

const paperbutton = document.querySelector('#paperbtn');
console.log(paperbutton)
paperbutton.addEventListener ('click', () => {
    play('Paper')
});


const scissorsbutton = document.querySelector('#scissorsbtn');
console.log(scissorsbutton)
scissorsbutton.addEventListener ('click', () => {
    play('Scissors')
});