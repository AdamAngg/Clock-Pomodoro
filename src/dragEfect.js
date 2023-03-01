import * as a from "./DOM-handler.js";
//Drag Efect
for (const i in a.move) {
  let psx = a.move[i].getBoundingClientRect().left + 30;
  let psy = a.move[i].getBoundingClientRect().top + 10;
  function moveAt(e) {
    a.move[i].style.left = e.pageX - psx + "px";
    a.move[i].style.top = e.clientY - psy + "px";
  }
  function onMouseMove(e) {
    moveAt(e);
    document.addEventListener("mousemove", onMouseMove);
  }
  function onMouseUp(e) {
    document.removeEventListener("mousemove", onMouseMove);
  }

  a.move[i].addEventListener("mousedown", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
}
