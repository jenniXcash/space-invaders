const grid = document.querySelector(".grid");
let score = document.querySelector(".score");

const invader = {
  location: "/invader.svg",
  strength: 1,
};
const deadInvaders = [];
let shooterInitial = 328;

for (let i = 0; i < 339; i++) {
  const square = document.createElement("div");
  grid.appendChild(square);
}

const squares = Array.from(document.querySelectorAll(".grid div"));

function placeInvaders(squares, shooterInitial) {
  const invaders = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 21, 22, 23, 24, 25, 26, 27,
    28, 29, 30, 31, 32, 33, 34,
  ];

  for (let i = 0; i < invaders.length; i++) {
    if (!deadInvaders.includes(i)) {
      squares[invaders[i]].classList.add("invader-1");
    }
  }
  const shooter = document.createElement("div");
  shooter.classList.add("shooter");
  squares[shooterInitial].appendChild(shooter);

  const laser = document.createElement("div");
  laser.classList.add("laser");
  squares[shooterInitial - 21].appendChild(laser);
}

placeInvaders(squares, shooterInitial);

function moveInvaders() {}
