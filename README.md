# rock-paper-scissors

playerSelection
computerSelection

WALKTHROUGH
Game asks if you want rock, paper or scissors.
User inputs selection
Computer makes selection
Game compares user and computer answer.
Rock beats scissors, scissors beats paper, paper beats rock.
Game prints 'x beats y, you lose!' or 'x beats y, you win!'



User        Computer    Prints
Rock        Rock        You both played the same, its a draw!
Rock        Paper       Paper beats rock, you lose!
Rock        Scissors    Rock beats scissors, you win!
Paper       Rock        Paper beats rock, you win!
Paper       Paper       You both played the same, its a draw!
Paper       Scissors    Scissors beats paper, you lose!
Scissors    Rock        Rock beats scissors, you lose!
Scissors    Paper       Scissors beats paper, you win!
Scissors    Scissors    You both played the same, its a draw!


initial round completed and working

WALKTHROUGH PART 2
Create new function called game()
game() plays 5 rounds, and records and displays the winner at the end of each one.
the winner of each round is added up and the player with the most wins is victorious.
console.log() shows the final winner.

function gameround
playerSelection and computerSelection
determine winner and add 1 to roundCounter

Game mechanics using an if statement:
function called playGame
if gameround is less than 5 then play game
else end game and return winning result