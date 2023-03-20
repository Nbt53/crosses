const boardContainer = document.querySelector('.board-container');
const newGameButton = document.querySelector('.newGame');

let x = [];
let o = [];
const wins = [
    ['0-0', '0-1', '0-2'], ['1-0', '1-1', '1-2'], ['2-0', '2-1', '2-2'],
    ['0-0', '1-0', '2-0'], ['0-1', '1-1', '2-1'], ['0-2', '1-2', '2-2'],
    ['0-0', '1-1', '2-2'], ['0-2', '1-1', '2-0']
]

let turn = 0;

drawBoard = () => {
    reset()
    boardContainer.innerHTML = `<div class="board">
        <div class="row">
            <div class="col" id="0-0"> </div>
            <div class="col" id="0-1"> </div>
            <div class="col" id="0-2"> </div>
        </div>
        <div class="row">
            <div class="col" id="1-0"> </div>
            <div class="col" id="1-1"> </div>
            <div class="col" id="1-2"> </div>
        </div>
        <div class="row">
            <div class="col" id="2-0"></div>
            <div class="col" id="2-1"></div>
            <div class="col" id="2-2"></div>
        </div>
    </div>`;
    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            document.getElementById(`${r}-${c}`).addEventListener('click', placeSymbol);
        }
    }
}

placeSymbol = (e) => {
    const selected = e.target.id
    const square = document.getElementById(selected)
    if (turn === 0) { 
        square.innerHTML = 'O';
        o.push(selected)
        square.removeEventListener('click', placeSymbol)
        checkForWin(o)
        turn++;
    } else if (turn === 1) {
        square.innerHTML = 'X';
        x.push(selected)
        square.removeEventListener('click', placeSymbol)
        checkForWin(x)
        turn--;
    }
}

checkForWin = (player) => {

    for (i = 0; i < wins.length; i++) {
        let toCheck = wins[i]
        let matches = 0
        for (j = 0; j < player.length; j++) {
            for (p = 0; p < 3; p++) {
                if (player[j] === toCheck[p]) {
                    matches++
                }
            }
        }
        if (matches === 3) {
            alert(`We Have a winner`)
            for (let r = 0; r < 3; r++) {
                for (let c = 0; c < 3; c++) {
                    document.getElementById(`${r}-${c}`).removeEventListener('click', placeSymbol);
                }
            }
        }
    }
}

reset = () => {
    x = []
    o = []
    turn = 0
    boardContainer.innerHTML = ''
}


newGameButton.addEventListener('click', drawBoard);
