const cells = document.querySelectorAll(".cell");
const text = document.querySelector('.textDisplay');
const reset = document.querySelector('.reset');
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let running = false;
let currentPlayer = "X";

let gameMoves = ["", "", "", "", "", "", "", "", ""];

initializeRound();

function initializeRound() {
    console.log("round intialized");
    cells.forEach(element => element.addEventListener("click", onClick));
    text.textContent = `${currentPlayer}'s turn`;
    reset.addEventListener("click", resetGame);
    running = true;
}
function onClick() {
    console.log('on click');
    const cellNum = this.getAttribute('id');
    console.log(cellNum);
    if(gameMoves[cellNum] != "" || !running){
        return;
    }else{
        console.log("running");
        updateCell(this, cellNum);
        checkWinner();
    }

}
function updateCell(cell, index) {
    console.log("update");
    gameMoves[index]= currentPlayer;
    cell.textContent = currentPlayer;
    changePlayer();
}
function changePlayer() {
    if(currentPlayer == "X"){
        currentPlayer="O";
        text.textContent = `${currentPlayer}'s turn`;
    }else if(currentPlayer == "O"){
        currentPlayer="X";
        text.textContent = `${currentPlayer}'s turn`;
    }

}
function checkWinner() {
    
}

function resetGame() {
    text.textContent = `-`;
    cells.forEach(cell => cell.textContent="")
    currentPlayer ="X";
 gameMoves = ["", "", "", "", "", "", "", "", ""];
    initializeRound();
}







