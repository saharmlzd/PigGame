"use strict";
let currentScore = 0;
document.querySelector(".btn--roll").addEventListener("click", function () {
  let randomDiceNumber = Math.trunc(Math.random() * 6) + 1;
  document.querySelector(".dice").src = `dice-${randomDiceNumber}.png`;
  currentScore += randomDiceNumber;
  document.querySelector("#current--1").textContent = currentScore;
});
document.querySelector(".btn--hold").addEventListener("click", function () {
  document.querySelector("#score--1").textContent = currentScore;
});
