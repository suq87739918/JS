"use strict";

/*
console.log(document.querySelector(".message").textContent); //will return "starting guessing"
//从html中选择了message的textContent并输出在控制台
document.querySelector(".message").textContent = "👍Correct Number!";
//把html中选择了message的textContent并修改为👍Correct Number!
console.log(document.querySelector(".message").textContent);
//因为上一步修改过，所以这里应该返回👍Correct Number!

document.querySelector(".score").textContent = 10;
document.querySelector(".number").textContent = 13;
//同理，这里更改了html中对于score和number的值

//console.log(document.querySelector(".guess"))    //this will result in an error, because in html, guess does not have any argument
//console.log(document.querySelector(".guess").value); //this will result in an empty result
document.querySelector(".guess").value = 23; //set this empty value to 23
console.log(document.querySelector(".guess").value); //output 23
*/

//generate the secret number:
let secretNumber = Math.trunc(Math.random() * 20) + 1; //Math.trune is to remove the decimals
let score = 20;
let highScore = 0;
//console.log(number);

//统一管理document.querySelector(".message").textContent
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

//event listener for click event
/* first, we select the button 'check', and use addEventListener to attach event handler.
the event handler is the function defined in the addEventListener */
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    //when this is no input
    //document.querySelector(".message").textContent = "🚫 No Input Number!";
    displayMessage("🚫 No Input Number!");
  } else if (guess === secretNumber) {
    //when player is win
    //document.querySelector(".message").textContent = "Correct Answer!!!";
    displayMessage("Correct Answer!!!");

    //display the number when the player win, otherwise, hide the number
    //document.querySelector(".number").textContent = secretNumber;
    displayNumber(secretNumber);

    //change the background color to green when player win the game
    //document.querySelector("body").style.backgroundColor = "#60b347";
    bodyBackgroundColor("#60b347");

    //increase the number box width to 30 if win
    //document.querySelector(".number").style.width = "30rem";
    numberStyleWidth("30rem");

    //update the highest score
    if (score > highScore) {
      highScore = score;
      //document.querySelector(".highscore").textContent = highScore;
      displayHighScore(highScore);
    }
  }

  //when the guess is wrong, this code block is much shorter than the 2 code blocks below, this follows the dry principle
  else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector(".message").textContent =
      //guess < secretNumber ? "📉 Too low" : "📈 Too high";
      displayMessage(guess < secretNumber ? "📉 Too low" : "📈 Too high");

      //score decrease by 1 when guessed a wrong number
      score--;
      //update the new score
      //document.querySelector(".score").textContent = score;
      displayScore(score);
    } else {
      //when score is not above 0
      //document.querySelector(".message").textContent = "💥 You Lose the Game";
      displayMessage("💥 You Lose the Game");
      //document.querySelector(".score").textContent = 0;
      displayScore(0);
    }
  }
  //   else if (guess < secretNumber) {
  //     //check if the score is still above 0
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "📉 Too low";
  //       //score decrease by 1 when guessed a wrong number
  //       score--;
  //       //update the new score
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       //when score is not above 0
  //       document.querySelector(".message").textContent = "💥 You Lose the Game";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "📈 Too high";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "💥 You Lose the Game";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }
});

//now dealing with "Again!" button
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  //document.querySelector(".message").textContent = "Start Guessing...";
  displayMessage("Start Guessing...");
  //document.querySelector(".score").textContent = score;
  displayScore(score);
  //document.querySelector(".number").textContent = "?";
  displayNumber("?");
  //document.querySelector(".guess").value = "";
  displayGuess("");
  //document.querySelector("body").style.backgroundColor = "#222";
  bodyBackgroundColor("#222");
  //document.querySelector(".number").style.width = "15rem";
  numberStyleWidth("15rem");
});
