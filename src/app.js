import * as a from "./DOM-handler.js";
import {
  onBtnRestart,
  onDivider,
  onBtnStart,
  onBtnPomodo,
  onBtnClock,
} from "./events.js";
import { stopMusic } from "./events.js";
import * as d from "./dragEfect.js";

//Blocks Hard code by class
//Dividing blocks by looping and slicing them to array
// const blocks11 = [];
// const block1hh = Array.from(document.querySelectorAll(".block"));
// for (let i = 0; i < 4; i++) {
//   blocks11.push(block1hh.slice(i * 15, i * 15 + 15));
// }
// console.log(blocks11);

//Init
a.btnClock.addEventListener("click", onBtnClock);
a.btnPomodo.addEventListener("click", onBtnPomodo);
a.btnStart.addEventListener("click", onBtnStart);
a.btnRestart.addEventListener("click", onBtnRestart);
a.btnStop.addEventListener("click", stopMusic);
a.divider.addEventListener("mousedown", onDivider);
