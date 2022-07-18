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
    // if(currentPlayer == "X"){
    //     currentPlayer="O";
    // }else{
    //     currentPlayer="X";
    // }
    // text.textContent = `${currentPlayer}'s turn`;
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    text.textContent = `${currentPlayer}'s turn`;
    
}
function checkWinner() {
    let winner = false;
    for(let i = 0; i< winConditions.length;i++){
        const cond = winConditions[i];
        const cell1 = gameMoves[cond[0]];
        const cell2 = gameMoves[cond[1]];
        const cell3 = gameMoves[cond[2]];
        if(cell1 ==""||cell2==""||cell3==""){
            continue;
        }
        if(cell1== cell2 && cell2==cell3){
            winner=true;            
            text.textContent = `${currentPlayer} lost!`;
            break;
          }else if(!gameMoves.includes("")) {
              text.textContent = `Draw`;
            }
            
        }
        
    }


function resetGame() {
    text.textContent = `-`;
    cells.forEach(cell => cell.textContent="")
    currentPlayer ="X";
 gameMoves = ["", "", "", "", "", "", "", "", ""];
    initializeRound();
}







