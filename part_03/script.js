// Remember, we're gonna use strict mode in all scripts now!
'use strict';
//this section is mainly on testing "prettier"
const x = 23;
if (x === 23) {
  console.log('prettier is working now');
}

const calcYear = (birthYear) => 2037 - birthYear;
console.log(x);
console.log(calcYear(1920));
