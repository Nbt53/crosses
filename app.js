const boardContainer = document.querySelector('.board-container');
const newGameButton = document.querySelector('.newGame');

let board = [[], [], []];
let turn = 0;

game = () => {


}


drawBoard = () => {
    boardContainer.innerHTML = `<div class="board">
        <div class="row">
            <div class="col" id="0-0"></div>
            <div class="col" id="0-1"></div>
            <div class="col" id="0-2"></div>
        </div>
        <div class="row">
            <div class="col" id="1-0"></div>
            <div class="col" id="1-1"></div>
            <div class="col" id="1-2"></div>
        </div>
        <div class="row">
            <div class="col" id="2-0"></div>
            <div class="col" id="2-1"></div>
            <div class="col" id="2-2"></div>
        </div>
    </div>`;
    for (let r = 0; r < 3; r++) {
        document.getElementById(`${r}-0`).addEventListener('click', placeSymbol)
        document.getElementById(`${r}-1`).addEventListener('click', placeSymbol)
        document.getElementById(`${r}-2`).addEventListener('click', placeSymbol)
    }

}

placeSymbol = (e) => {
    if (turn === 0) {
        const selected = e.target.id
        const square = document.getElementById(selected)
        square.innerHTML = 'O';
        turn++;
    } else if (turn === 1) {
        const selected = e.target.id
        const square = document.getElementById(selected)
        square.innerHTML = 'X';
        turn--;
    } else {
        alert('Game is fucked start a new one');
    }
}

newGameButton.addEventListener('click', drawBoard);
