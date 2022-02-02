let message = document.querySelector(".message");
// eventListeners
document
  .querySelector(".btn-restart")
  .addEventListener("click", handleRestartGame);
document.querySelectorAll(".ceil").forEach((el) => {
  return el.addEventListener("click", handleCeilClick);
});

let gameActive = true;
let gameArray = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";

const winMessage = () => {
  return `Winner is ${currentPlayer}`;
};
const noWinMessage = () => {
  return `No winner`;
};
const currentPlayerTurn = () => {
  return `It is ${currentPlayer} turn`;
};
message.innerHTML = currentPlayerTurn();

function handleCeilClick(event) {
  let clickedCeil = event.target;
  let clickedCeilIndex = parseInt(clickedCeil.getAttribute("data-cell-index"));
  gameArray[clickedCeilIndex] = currentPlayer;
  clickedCeil.innerHTML = currentPlayer;

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
  let winner = false;
  for (let i = 0; i <= 7; i++) {
    let winCondition = winningCases[i];
    let case1 = gameArray[winCondition[0]]; //X
    let case2 = gameArray[winCondition[1]]; //O
    let case3 = gameArray[winCondition[2]]; //X

    if (case1 === "" || case2 === "" || case3 === "") {
      continue;
    }
    if (case1 === case2 && case2 === case3) {
      winner = true;
      break;
    }
  }
  if (winner) {
    message.innerHTML = winMessage();
    gameActive = false;
    return;
  }
  if (!gameArray.includes("")) {
    message.innerHTML = noWinMessage();
    gameActive = false;
    return;
  }
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  message.innerHTML = currentPlayerTurn();
}
function handleRestartGame() {
  gameArray = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;
  message.innerHTML = currentPlayerTurn();
  document.querySelectorAll(".ceil").forEach((ceil) => (ceil.innerHTML = ""));
}
