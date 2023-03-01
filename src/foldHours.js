import * as a from "./DOM-handler.js";
const arr = (arr) => {
  let arrexp = [];
  for (let i = 1; i < arr.length + 1; i++) {
    arrexp.push(arr.map((x) => x + 15 * i));
  }
  return arrexp;
};

export const tranformHour = (i) => {
  const numberTo = [2, 3, 4];

  setTimeout(() => {
    a.btnClock.classList.add("cursor-none");
    a.btnPomodo.classList.add("cursor-none");
    if (i === 0 || i % 15 === 0 || (i + 15) % 15 === 14) {
      a.allBlocks[i].classList.add("rotate");
    } else if (i === 1 || (i + 15) % 15 === 1) {
      a.allBlocks[i].classList.add("rotate");
      a.allBlocks[i + 4].classList.add("rotate");
    } else if (i === 9 || (i + 15) % 15 === 9) {
      a.allBlocks[i].classList.add("rotate");
      a.allBlocks[i + 4].classList.add("rotate");
    } else if (numberTo.includes(i) || arr(numberTo)[0].includes(i)) {
      a.allBlocks[i].classList.add("rotate");
      a.allBlocks[i + 4].classList.add("rotate");
      a.allBlocks[i + 8].classList.add("rotate");
    } else if (arr(numberTo)[1].includes(i) || arr(numberTo)[2].includes(i)) {
      a.allBlocks[i].classList.add("rotate");
      a.allBlocks[i + 4].classList.add("rotate");
      a.allBlocks[i + 8].classList.add("rotate");
    }
    if ((i = 59)) {
      a.btnClock.classList.remove("cursor-none");
      a.btnPomodo.classList.remove("cursor-none");
    }
  }, i * 100);
};
