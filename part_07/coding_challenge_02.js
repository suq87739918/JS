"use strict";

const calcAverageHumanAge = function (ages) {
  let humanAges = [];
  for (const age of ages) {
    let humanAge;
    if (age <= 2) {
      humanAge = 2 * age;
    } else {
      humanAge = 16 + age * 4;
    }
    humanAges.push(humanAge);
  }
  return humanAges;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
let humanAges = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

const excludeUnder18 = humanAges.filter(function (age) {
  return age >= 18;
});

let adultHumanAges = excludeUnder18;
console.log(adultHumanAges);

const calcAverageAdultAge = function (adultHumanAges) {
  let ave = 0;
  let sum = 0;
  for (const age of adultHumanAges) {
    sum += age;
  }
  ave = sum / adultHumanAges.length;
  return ave;
};

console.log(calcAverageAdultAge(adultHumanAges));
