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
    board.appendChild(newDiv);
  }
}

startGame(invadersBoard, invader1);
