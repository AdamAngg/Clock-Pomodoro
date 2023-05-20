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



//Init
a.btnClock.addEventListener("click", onBtnClock);
a.btnPomodo.addEventListener("click", onBtnPomodo);
a.btnStart.addEventListener("click", onBtnStart);
a.btnRestart.addEventListener("click", onBtnRestart);
a.btnStop.addEventListener("click", stopMusic);
a.divider.addEventListener("mousedown", onDivider);
