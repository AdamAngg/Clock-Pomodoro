export const clock = document.querySelector(".clock");
//Creating Div Blocks
for (let i = 0; i <= 59; i++) {
  const div = document.createElement("div");
  div.classList.add("block");
  div.id = `${i}`;
  //Dividing block to 4 blocks
  if (i <= 14) {
    div.classList.add("block--1");
  } else if (i > 14 && i <= 29) {
    div.classList.add("block--2");
  } else if (i > 29 && i <= 44) {
    div.classList.add("block--3");
  } else if (i > 44 && i <= 59) {
    div.classList.add("block--4");
  }
  i < 10 ? (div.innerHTML = 0 + `${i}`) : (div.innerHTML = `${i}`);

  clock.appendChild(div);
}
export const allBlocks = Array.from(document.querySelectorAll(".block"));
export const move = Array.from(document.querySelectorAll(".block"));
export const block1h = Array.from(document.querySelectorAll(".block--1"));
export const block2h = Array.from(document.querySelectorAll(".block--2"));
export const block3m = Array.from(document.querySelectorAll(".block--3"));
export const block4m = Array.from(document.querySelectorAll(".block--4"));
//Making look that adding elements of clock
export const btnClock = document.querySelector(".btn-clock");
export const btnPomodo = document.querySelector(".btn-pomodo");
export const btnStart = document.querySelector(".btn-start");
export const btnRestart = document.querySelector(".btn-restart");
export const btnSign = document.querySelector(".break-sign");
export const btnStop = document.querySelector(".btn-stop");
export const btnStartContainer = document.querySelector(".btn-start-container");
export const divider = document.querySelector(".divider");
export const audioEndTime = new Audio(
  "https://vgmsite.com/soundtracks/pokemon-game-boy-pok-mon-sound-complete-set-play-cd/swpaozkibj/1-13.%20Guide.mp3"
);
export const audioBtn = new Audio("src/audio/button-124476.mp3");
//Ading array that represent numbers on clock
export const numbers = [
  [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1], // 0
  [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1], // 1
  [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1], // 2
  [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1], // 3
  [1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1], // 4
  [1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1], // 5
  [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1], // 6
  [1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0], // 7
  [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1], // 8
  [1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1], // 9
];
