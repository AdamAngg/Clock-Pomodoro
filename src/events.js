import {
  animeClock,
  animePomodo,
  showSpecificN,
  m,
  s,
} from "./clockFunctions.js";
import * as a from "./DOM-handler.js";
import { tranformHour } from "./foldHours.js";

//Setting Interwal
export let intervalClock;
export const onBtnPomodo = (e) => {
  e.preventDefault();
  a.btnStartContainer.classList.remove("cursor-none");
  a.btnPomodo.classList.add("btn-active");
  a.btnClock.classList.remove("btn-active");
  showSpecificN(m[0], m[1], s[0], s[1]);
  showBtn(100, "pointer");
  playBtnSound();

  for (let i = 0; i <= 59; i++) {
    tranformHour(i);
  }
};
export const onBtnClock = (e) => {
  e.preventDefault();
  a.btnClock.classList.add("btn-active");
  a.btnPomodo.classList.remove("btn-active");
  makeInnerHtmlStart();
  clearInterval(intervalClock);
  intervalClock = setInterval(animeClock, 500);
  a.btnStartContainer.classList.add("cursor-none");
  showBtn(0, "");
  playBtnSound();
  stopMusic();
  a.btnSign.style.opacity = 0;
  for (let i = 0; i <= 59; i++) {
    tranformHour(i);
  }
};
export const onDivider = (e) => {
  e.preventDefault();
  foldClock();
  setTimeout(() => {
    removeFoldClock();
  }, "4000");
};

export const onBtnRestart = (e) => {
  e.preventDefault();
  showSpecificN("2", "5", "0", "0");
  a.btnSign.style.opacity = 0;
  playBtnSound();
  makeInnerHtmlStart();
};

export const onBtnStart = (e) => {
  e.preventDefault();
  playBtnSound();
  if (a.btnStart.innerHTML === "Start") {
    a.btnStart.innerHTML = "Stop";
    clearInterval(intervalClock);
    intervalClock = setInterval(animePomodo, 1000);
    stopMusic();
  } else if (a.btnStart.innerHTML === "Stop") {
    a.btnStart.innerHTML = "Start";
    showSpecificN(m[0], m[1], s[0], s[1]);
  }
};

export const makeInnerHtmlStart = () => {
  a.btnStart.innerHTML = "Start";
};

//Making buttons visable
export const showBtn = (nOpacity, pointer) => {
  a.btnStart.style.opacity = nOpacity;
  a.btnRestart.style.opacity = nOpacity;
  a.btnStop.style.opacity = nOpacity;
  a.btnStart.style.cursor = `${pointer}`;
  a.btnRestart.style.cursor = `${pointer}`;
  a.btnStop.style.cursor = `${pointer}`;
};

export const playBtnSound = () => {
  a.audioBtn.currentTime = 0;
  a.audioBtn.pause();
  a.audioBtn.play();
};
export const stopMusic = () => {
  a.audioEndTime.currentTime = 0;
  a.audioEndTime.pause();
  a.audioBtn.play();
};
const foldClock = () => {
  for (const i in a.move) {
    a.move[i].classList.add("fold");
    a.move[i].style.top = 0;
    a.move[i].style.left = 0;
  }
};
const removeFoldClock = () => {
  for (const i in move) {
    a.move[i].classList.remove("fold");
  }
};
