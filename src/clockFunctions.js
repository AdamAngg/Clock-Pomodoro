import { makeInnerHtmlStart, stopMusic, intervalClock } from "./events.js";
import * as a from "./DOM-handler.js";
import { showHours, clear } from "./hours.js";
import { tranformHour } from "./foldHours.js";

//Timer Function
//Variables that gives me chance to change timer on demand
export let m = "25";
export let s = "00";
//Flag gives me info. about timer
export let reached = false;
export const animePomodo = () => {
  if (m === "00" && s === "00" && reached === false) {
    btnSign.style.opacity = 100;
    m = "05";
    s = "0";
    makeInnerHtmlStart();
    a.audioEndTime.play();
    clearInterval(intervalClock);
    reached = true;
  } else if (m === "00" && s === "00" && reached === true) {
    a.btnSign.style.opacity = 0;
    reached = false;
    m = "25";
    s = "0";
    a.audioEndTime.play();
    makeInnerHtmlStart();
    clearInterval(intervalClock);
  } else if (s === "00") {
    m = m - 1;
    s = 59;
  } else {
    tranformHour;
    s = s - 1;
  }

  s = s.toString();
  m = m.toString();
  s = s.length === 1 ? "0" + s : s;
  m = m.length === 1 ? "0" + m : m;

  if (m != "") {
    showHours(a.block1h, m[0]);
    showHours(a.block2h, m[1]);
  }
  if (s != "") {
    showHours(a.block3m, s[0]);
    showHours(a.block4m, s[1]);
  }
  clear();
};
//Time //Arrow function reloading every frame
export const animeClock = () => {
  let d = new Date(),
    h = d.getHours().toString(),
    m = d.getMinutes().toString(),
    s = d.getSeconds().toString();
  //Adding 0 to single digit
  s = s.length === 1 ? "0" + s : s;
  m = m.length === 1 ? "0" + m : m;
  h = h.length === 1 ? "0" + h : h;
  //Reload Every frame

  if (h !== "") {
    showHours(a.block1h, h[0]);
    showHours(a.block2h, h[1]);
  }
  if (m !== "") {
    showHours(a.block3m, m[0]);
    showHours(a.block4m, m[1]);
  }

  //Loop for displaying "seconds"
  for (const i in a.allBlocks) {
    a.allBlocks[i].classList.remove("active-orange");
    s < 10
      ? a.allBlocks[s[1]].classList.add("active-orange")
      : a.allBlocks[s].classList.add("active-orange");
  }
  if (s == "00") {
    a.allBlocks[59].classList.remove("active-orange");
    a.allBlocks[0].classList.add("active-orange");
  }
};
export const showSpecificN = (n1, n2, n3, n4) => {
  showHours(a.block1h, `${n1}`);
  showHours(a.block2h, `${n2}`);
  showHours(a.block3m, `${n3}`);
  showHours(a.block4m, `${n4}`);
  clearInterval(intervalClock);
  clear();
  stopMusic();
  (m = n1 + n2), (s = n3 + n4);
  console.log(m, s);
};
