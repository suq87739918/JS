"use strict";

//closure happens automatically under certain situation
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

/*
假设你有一个"秘密日记"，这个日记只有一个密码可以打开。你创建了一个特殊的"秘密日记"函数，这个函数有一个密码变量和一个子函数。子函数的作用是验证密码，只有密码正确才能读取"秘密日记"。

function secretDiary() {
  let password = "unicorn"; // 这是秘密日记的密码

  return function(guess) { // 这是一个子函数，用来猜密码
    if (guess === password) {
      console.log("Welcome to the secret diary!");
    } else {
      console.log("Sorry, wrong password.");
    }
  };
}

let myDiary = secretDiary(); // 创建一个秘密日记

myDiary("unicorn"); // 输出: "Welcome to the secret diary!"
myDiary("not-the-right-password"); // 输出: "Sorry, wrong password."


在这个例子中，secretDiary函数创建了一个闭包。password变量和子函数一起形成了闭包，即使secretDiary函数已经执行结束，返回的子函数依然可以访问password变量。
当我们调用myDiary("unicorn")时，我们其实是在使用子函数来访问闭包中的password变量。

就像你的秘密日记，即使你离开了（即使secretDiary函数执行结束），你的日记依然在，密码也还在。当你回来（调用子函数）并且输入正确的密码时，你可以看到你的秘密日记，这就是闭包的原理。
*/

//more example
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 100;
  f = function () {
    console.log(b * 3);
  };
};

g();
f();
console.dir(f);
console.log("------------------Re-assign f------------------");
h();
f();
console.dir(f);

//example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`we are now boarding all ${n} passengers`);
    console.log(`There are 3 group, each group have ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`will start boarding in ${wait} second`);
};

boardPassengers(180, 3);

// setTimeout(function () {
//   console.log("Time here is 毫秒");
// }, 2000); //2000毫秒之后，这个function会被执行，输出“Time here is 毫秒”
