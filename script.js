//setting the invader object
const invader1 = {
  class: "invader-1",
  strength: 1,
};

//setting the board on which the invaders will be laid out
const invadersBoard = document.querySelector(".invadersBoard");

//the function which will build the board and insert the invaders into it
function startGame(board, invader) {
  board.classList.add("invadersGrid1");

  for (i = 0; i < 35; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(invader.class);
    newDiv.style.backgroundColor = "white";
    board.appendChild(newDiv);
  }
  movingInvaders(board);
}

//Setting the function which will move the invaders
function movingInvaders(invadersOnTheBoard) {
  const moveX = 30;
  const moveY = 30;
}
startGame(invadersBoard, invader1);
