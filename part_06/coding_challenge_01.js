"use strict";

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),

  //problem 1:
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question} \n${this.options.join("\n")}\n(Write Option Number)`
      )
    );
    console.log(answer);
    //check availability
    if (typeof answer === "number" && answer < this.options.length) {
      this.answers[answer]++;
    }

    //short way of writing
    // typeof answer === "number" &&
    //   answer < this.options.length &&
    //   this.answers[answer]++;
    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`polled results are ${this.answers.join(", ")}`);
    }
  },
};
//poll.registerNewAnswer();
document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call("string", { answers: [5, 2, 3] });
/*
JavaScript中的call()函数是一种可以改变函数运行时this关键字指向的方法。
在例子中，call()函数将poll.displayResults方法的this关键字从poll对象改为了{answers: [5, 2, 3]}这个新的对象。

具体来说，当你调用poll.displayResults()的时候，this关键字指的是poll对象，因此this.answers会引用到poll.answers。
但是，如果你希望this.answers引用到另一个值，你就需要用call()函数来改变this的指向。

正确的做法应该是传入一个具有answers属性的对象，即poll.displayResults.call({answers: [5, 2, 3]})。
*/
