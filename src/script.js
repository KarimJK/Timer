"use strict";

let startBtn = document.querySelector(".start-btn");
let minudSpan = document.getElementById("minud-span");
let secundSpan = document.getElementById("secund-span");
let soundAlert = new Audio("../sound/interface-1-126517.mp3");

let secund = 59;
let minud = 25;
let timer;
function startTimer(event) {
  if (event.target.textContent === "Start") {
    startBtn.textContent = "Stop";
    soundAlert.play();
    timer = setInterval(() => {
      if (secund < 0 && minud === 0) {
        clearInterval(timer);
        alert("End");
        startBtn.textContent = "Start";
        minud = 25;
        secund = 59;
        minudSpan.textContent = "25";
        secundSpan.textContent = "00";
        return;
      }
      if (secund < 0) {
        minud--;
        minudSpan.textContent = minud < 10 ? `0${minud}` : minud;
        secund = 13;
      }
      secundSpan.textContent = secund < 10 ? `0${secund}` : secund;
      secund--;
    }, 1000);
  } else {
    startBtn.textContent = "Start";
    clearInterval(timer);
    // soundAlert.play();
  }
}

startBtn.addEventListener("click", startTimer);
