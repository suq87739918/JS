"use strict";

//rewrite the function in coding_challenge_02.js using arrow function and chaining

//first without using arrow function
const calcAverageHumanAge = function (ages) {
  return ages
    .map(function (age) {
      return age <= 2 ? age * 2 : 16 + age * 4;
    })
    .filter(function (age) {
      return age >= 18;
    })
    .reduce(function (acc, cur, i, arr) {
      return acc + cur / arr.length;
    }, 0);
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

//with arrow function
const calcAverageHumanAge2 = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((sum, age, _, arr) => sum + age / arr.length, 0);

console.log(calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]));
