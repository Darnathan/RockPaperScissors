


const selectionButtons = document.querySelectorAll('[data-selection]');
const finalColumn = document.querySelector('[data-final-column]');
const computerScoreSpan = document.querySelector('[data-computer-score]');
const yourScoreSpan = document.querySelector('[data-your-score]');
const SELECTIONS = [
    {
        name: 'rock',
        emoji: 'ROCK',
        beats: 'scissors'
    },
    {
        name: 'scissors',
        emoji: 'SCISSORS',
        beats: 'paper'
    },
    {
        name: 'paper',
        emoji: 'PAPER',
        beats: 'rock'
    }
]


selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
        
    })
})

function makeSelection(selection) {
    const computerChoice = ComputerSelection()
    const youWin = winner(selection, computerChoice)
    const computerWin = winner(computerChoice, selection)
    
    addResult(computerChoice, computerWin)
    addResult(selection, youWin)
    if (youWin) incrementScore(yourScoreSpan);
    if (computerWin) incrementScore(computerScoreSpan);
}

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

function addResult(selection, winner) {
    const div = document.createElement("div");
    div.innerText = selection.emoji
    div.classList.add('result-selection');
    if (winner) div.classList.add('winner');
    finalColumn.after(div)
}

function winner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}


function ComputerSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex];
}