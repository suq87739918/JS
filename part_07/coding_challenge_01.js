"use strict";

const checkDogs = function (dogAgeArray) {
  for (const [i, dogAge] of dogAgeArray.entries()) {
    if (dogAge >= 3) {
      console.log(`Dog number ${i} is an adult, and is ${dogAge} years old`);
    } else {
      console.log(`Dog number ${i} is still a puppy with age ${dogAge}`);
    }
  }
};
const testData1 = [3, 5, 2, 12, 7];
const testData2 = [4, 1, 15, 8, 3];

//test data: [3,5,2,12,7], [4,1,15,8,3]
checkDogs(testData1);

//for example in [4,1,15,8,3] test data, create a shallow copy of it without last two element
const testDataWithoutLastTwo = testData2.slice(0, testData2.length - 2);
console.log(testDataWithoutLastTwo);
console.log(testData2); //original data did not change

const testDataForBothCorrected = [...testData1, ...testDataWithoutLastTwo];
console.log(testDataForBothCorrected);

console.log(
  "----------Answer using testDataForBothCorrected as test data----------"
);
checkDogs(testDataForBothCorrected);
