"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};
const bodyBackgroundColor = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};
const numberStyleWidth = function (width) {
  document.querySelector(".number").style.width = width;
};
const displayHighScore = function (highscore) {
  document.querySelector(".highscore").textContent = highscore;
};
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};
const displayGuess = function (guess) {
  document.querySelector(".guess").value = guess;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    displayMessage("🚫 No Input Number!");
  } else if (guess === secretNumber) {
    displayMessage("Correct Answer!!!");

    displayNumber(secretNumber);

    bodyBackgroundColor("#60b347");

    numberStyleWidth("30rem");

    if (score > highScore) {
      highScore = score;

      displayHighScore(highScore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? "📉 Too low" : "📈 Too high");

      score--;

      displayScore(score);
    } else {
      displayMessage("💥 You Lose the Game");

      displayScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayMessage("Start Guessing...");

  displayScore(score);

  displayNumber("?");

  displayGuess("");

  bodyBackgroundColor("#222");

  numberStyleWidth("15rem");
});
