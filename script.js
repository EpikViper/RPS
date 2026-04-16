function randint(a, b) {
    let multiple = Math.abs((b - a)) + 1;
    
    return Math.floor(multiple * Math.random()) + Math.min(a,b);
}


function translateNumber(num) {
    switch (num) {
        case 1: return 'Rock';
        case 2: return 'Paper';
        case 3: return 'Scissors';
        default: RangeError;
    }
}


function getComputerChoice() {
    let randomNumber = randint(1,3);

    return translateNumber(randomNumber);
}

function getHumanChoice() {
    let chosenNumber = parseInt(prompt("Enter 1 for Rock, 2 for Paper, and 3 for Scissors: "));
    
    return translateNumber(chosenNumber);
}


let humanScore = 0;
let computerScore = 0;

function scoreSingleRound(humanChoice, computerChoice) {
    
    switch(true) {
        case (humanChoice == computerChoice):
            break;
        case (humanChoice == 'Rock' && computerChoice == 'Scissors'):
        case (humanChoice == 'Scissors' && computerChoice == 'Paper'):
        case (humanChoice == 'Paper' && computerChoice == 'Rock'):
            humanScore++;
            break;
        default:
            computerScore++;
            break;
    }

    roundExplanation.textContent = 'You chose ' + humanChoice + ' and the computer chose ' + computerChoice; 
    scoreElement.textContent = `${humanScore} : ${computerScore}`;
}


function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    scoreSingleRound(humanChoice, computerChoice);
}


function playGame(n_rounds) {
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < n_rounds; i++) {
        let humanChoice = getHumanChoice();
        playRound(humanChoice);
    }

    return humanScore, computerScore;
}

document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.justifyContent = 'center';
document.body.style.gap = '25px';

const buttonSet = document.querySelector('#button-set');

const rockButton = document.createElement('button');
rockButton.textContent = 'Rock';
const paperButton = document.createElement('button');
paperButton.textContent = 'Paper';
const scissorsButton = document.createElement('button');
scissorsButton.textContent = 'Scissors';

const scoreElement = document.createElement('h1');
scoreElement.textContent = `${humanScore} : ${computerScore}`;
scoreElement.style.alignSelf = 'center';

const roundExplanation = document.createElement('h1');
roundExplanation.textContent = `You can start playing`;
roundExplanation.style.alignSelf = 'center';

rockButton.addEventListener('click', () => playRound('Rock'));
paperButton.addEventListener('click', () => playRound('Paper'));
scissorsButton.addEventListener('click', () => playRound('Scissors'));

buttonSet.appendChild(rockButton);
buttonSet.appendChild(paperButton);
buttonSet.appendChild(scissorsButton);
document.body.appendChild(roundExplanation);
document.body.appendChild(scoreElement);


buttonSet.style.display = 'flex';
buttonSet.style.justifyContent = 'center';
buttonSet.style.alignItems = 'center';
