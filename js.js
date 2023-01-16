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
const btnClock = document.querySelector(".btn-clock");
const btnPomodo = document.querySelector(".btn-pomodo");
const btnStart = document.querySelector(".btn-start");
const btnRestart = document.querySelector(".btn-restart");
const btnSign = document.querySelector(".break-sign");
//Creating clock blocks and digits
const makeNumbers = (name) => {
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

    name.appendChild(div);
  }
};
makeNumbers(clock);

//Dividing blocks by looping and slicing them to array
// const blocks11 = [];
// const block1hh = Array.from(document.querySelectorAll(".block"));
// for (let i = 0; i < 4; i++) {
//   blocks11.push(block1hh.slice(i * 15, i * 15 + 15));
// }
// console.log(blocks11);

//Blocks Hard code by class
const allBlocks = Array.from(document.querySelectorAll(".block"));
const block1h = Array.from(document.querySelectorAll(".block--1"));
const block2h = Array.from(document.querySelectorAll(".block--2"));
const block3m = Array.from(document.querySelectorAll(".block--3"));
const block4m = Array.from(document.querySelectorAll(".block--4"));
//Function that makes '25' to appear on timmer first
const showSpecificN = (n1, n2, n3, n4) => {
  showHours(block1h, `${n1}`);
  showHours(block2h, `${n2}`);
  showHours(block3m, `${n3}`);
  showHours(block4m, `${n4}`);
  clear();
  (m = "25"), (s = "0");
};
//Clearing active second class
const clear = () => {
  allBlocks.forEach(function (e, i) {
    this[i].classList.remove("active-orange");
  });
};
//Timer Function enable to count down
let m = "25",
  s = "0";
const animePomodo = () => {
  s = s.length === 1 ? "0" + s : s;
  m = m.length === 1 ? "0" + m : m;
  console.log(m, s);
  if (m == "00" && s == "00") {
    btnSign.style.opacity = 100;
    m = 5;
    s = 0;
    console.log(true);
  } else if (s === "00") {
    m = m - 1;
    s = 59;
  } else {
    s = s - 1;
  }

  s = s.toString();
  m = m.toString();

  if (m != "") {
    showHours(block1h, m[0]);
    showHours(block2h, m[1]);
  }
  if (s != "") {
    showHours(block3m, s[0]);
    showHours(block4m, s[1]);
  }
  clear();
};
//Time //Arrow function reloading every frame
const animeClock = () => {
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
    showHours(block1h, h[0]);
    showHours(block2h, h[1]);
  }
  if (m !== "") {
    showHours(block3m, m[0]);
    showHours(block4m, m[1]);
  }

  //Loop for displaying "seconds"
  for (const i in allBlocks) {
    allBlocks[i].classList.remove("active-orange");
    s < 10
      ? allBlocks[s[1]].classList.add("active-orange")
      : allBlocks[s].classList.add("active-orange");
  }
  if (s == "00") {
    allBlocks[59].classList.remove("active-orange");
    allBlocks[0].classList.add("active-orange");
  }
};

//Function that is making numbers to appear
const showHours = (block, number) => {
  numbers[number].forEach(function (el, i) {
    if (el === 1) {
      block[i].classList.add("active");
    } else block[i].classList.remove("active");
  });
};

//Making buttons visable
const showBtn = (nOpacity, pointer) => {
  btnStart.style.opacity = nOpacity;
  btnRestart.style.opacity = nOpacity;
  btnStart.style.cursor = `${pointer}`;
  btnRestart.style.cursor = `${pointer}`;
};
//Drag Efect
// const draggableElement = document.querySelector(".btn-start-container");
// function moveAt(pageX, pageY) {
//   draggableElement.style.left = pageX - draggableElement.offsetWidth / 2 + "px";
//   draggableElement.style.top = pageY - draggableElement.offsetHeight / 2 + "px";
// }
// function onMouseMove(event) {
//   moveAt(event.pageX, event.pageY);
//   document.addEventListener("mousemove", onMouseMove);
// }
// function onMouseUp(event) {
//   document.removeEventListener("mousemove", onMouseMove);
// }

// draggableElement.addEventListener("mousedown", onMouseMove);
// document.addEventListener("mouseup", onMouseUp);

//Setting Interwal
let intervalClock;

//Init
btnClock.addEventListener("click", function (e) {
  e.preventDefault();
  btnClock.classList.add("btn-active");
  btnPomodo.classList.remove("btn-active");
  clearInterval(intervalClock);
  intervalClock = setInterval(animeClock, 500);
  showBtn(0, "");
});

btnPomodo.addEventListener("click", function (e) {
  e.preventDefault();
  btnPomodo.classList.add("btn-active");
  btnClock.classList.remove("btn-active");
  clearInterval(intervalClock);
  showSpecificN(2, 5, 0, 0);
  showBtn(100, "pointer");
});
btnStart.addEventListener("click", function (e) {
  e.preventDefault();
  clearInterval(intervalClock);
  intervalClock = setInterval(animePomodo, 10);
});
btnRestart.addEventListener("click", function (e) {
  e.preventDefault();
  clearInterval(intervalClock);
  showSpecificN(2, 5, 0, 0);
});
