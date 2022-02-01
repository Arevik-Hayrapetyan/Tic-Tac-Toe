let message = document.querySelector(".message");
let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningMessage = () => {
  return `Player ${currentPlayer} has won!`;
};
const drawMessage = () => {
  return `Game ended in a draw!`;
};
const currentPlayerTurn = () => {
  return `It's ${currentPlayer}'s turn`;
};
message.innerHTML = currentPlayerTurn();
function handleCellPlayed() {}
function handlePlayerChange() {}

// function handleCellClick() {}

function handleRestartGame() {}

document.querySelectorAll(".ceil").forEach((el) => {
  return el.addEventListener("click", handleCeilClick);
});
document
  .querySelector(".btn-restart")
  .addEventListener("click", handleRestartGame);

function handleCeilClick(event) {
  let clickedCeil = event.target;
  let clickedCeilIndex = parseInt(clickedCeil.getAttribute("data-cell-index"));
  if (gameState[clickedCeilIndex] !== "" || !gameActive) {
    return;
  }
  handleCeilPlayed(clickedCeil, clickedCeilIndex);
  handleResultValidation();
}

function handleCeilPlayed(clickedCeil, clickedCeilIndex) {
  gameState[clickedCeilIndex] = currentPlayer;
  clickedCeil.innerHTML = currentPlayer;
}

function handleResultValidation() {
  let winningCases = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let win = false;
  for (let i = 0; i <= 7; i++) {
    let winCondition = winningCases[i];
    let a = gameState[winCondition[0]];
    let b = gameState[winCondition[1]];
    let c = gameState[winCondition[2]];
    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      win = true;
      break;
    }
  }
  if (win) {
    message.innerHTML = winningMessage();
    gameActive = false;
    return;
  }
  let roundDraw = !gameState.includes("");
  if (roundDraw) {
    message.innerHTML = drawMessage();
    gameActive = false;
    return;
  }
  handlePlayerChange();
}
function handlePlayerChange() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  message.innerHTML = currentPlayerTurn();
}

function handleRestartGame() {
  let gameState = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  currentPlayer = "X";
  message.innerHTML = currentPlayerTurn();
  document.querySelectorAll(".cell").forEach((cell) => (cell.innerHTML = ""));
}
