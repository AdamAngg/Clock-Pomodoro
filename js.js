//Ading array that represent numbers on clock
const numbers = [
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

//Making look that adding elements of clock
const clock = document.querySelector(".clock");
for (let i = 0; i <= 59; i++) {
  const div = document.createElement("div");
  div.classList.add("block");
  div.id = `${i}`;
  //Dividing by 4
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
//Making that number '1' will display

//Made by loop
// const blocks11 = [];
// const block1hh = Array.from(document.querySelectorAll(".block"));
// for (let i = 0; i < 4; i++) {
//   blocks11.push(block1hh.slice(i * 15, i * 15 + 15));
// }
// console.log(blocks11);

//Hard code by class
const allBlocks = Array.from(document.querySelectorAll(".block"));
const block1h = Array.from(document.querySelectorAll(".block--1"));
const block2h = Array.from(document.querySelectorAll(".block--2"));
const block3m = Array.from(document.querySelectorAll(".block--3"));
const block4m = Array.from(document.querySelectorAll(".block--4"));
//Time
const anime = () => {
  let d = new Date(),
    h = d.getHours().toString(),
    m = d.getMinutes().toString(),
    s = d.getSeconds().toString();
  //Adding 0 to single digit
  s = s.length === 1 ? "0" + s : s;
  m = m.length === 1 ? "0" + m : m;
  h = h.length === 1 ? "0" + h : h;
  //Reload Every min
  window.requestAnimationFrame(anime);

  if (h !== "") {
    showHours(block1h, h[0]);
    showHours(block2h, h[1]);
  }
  if (m !== "") {
    showHours(block3m, m[0]);
    showHours(block4m, m[1]);
  }

  s < 10
    ? allBlocks[s[1]].classList.add("active-orange")
    : allBlocks[s].classList.add("active-orange");
  allBlocks[s - Number(1)].classList.remove("active-orange");
};

const showHours = (block, number) => {
  numbers[number].forEach(function (el, i) {
    if (el === 1) {
      block[i].classList.add("active");
    } else block[i].classList.remove("active");
  });
};

//Init
window.requestAnimationFrame(anime);
