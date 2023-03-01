import * as a from "./DOM-handler.js";
//Clearing active second class
export const clear = () => {
  a.allBlocks.forEach(function (e, i) {
    a.allBlocks[i].classList.remove("active-orange");
  });
};

//Function that is making numbers to appear
export const showHours = (block, number) => {
  a.numbers[number].forEach(function (el, i) {
    if (el === 1) {
      block[i].classList.add("active");
    } else {
      block[i].classList.remove("active");
    }
  });
};

//Function that makes '25' to appear on timmer first
