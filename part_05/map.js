'use strict';
/*
const rest = new Map();
rest.set('name', 'Classico Italiana');
rest.set(1, 'Beijing, China');
console.log(rest);

//or we can do this:
const rest2 = new Map();
rest2
  .set('name', 'McMaster')
  .set(1, 'Shanghai, China')
  .set(true, 'we are open')
  .set('open', 11)
  .set('close', 23);
console.log(rest2);
console.log(rest.get('name'));
console.log(rest2.get(true));
const time = 21;

console.log(
  `${rest2.get(
    time > rest2.get('open') && time < rest2.get('close')
  )} at ${time} :D`
);

//check if a key-value pair exist
console.log(rest2.has('open'));

//remove a key - value pair
rest.delete(1);
console.log(rest);

//remove all
rest.clear();
console.log(rest.size);

//size of a map
console.log(rest2.size);

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

const question = new Map();
question
  .set('question', 'What is the best programming language')
  .set(1, 'C')
  .set(2, 'Java')
  .set(3, 'JavaScript')
  .set('correct', 3)
  .set(true, 'Correct')
  .set(false, 'try again');
console.log(question);

//convert object to map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//for loop in map
console.log(question.get('question'));
for (let [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key} : ${value}`);
  }
}
const answer = Number(prompt('Your answer')); //need to change it data type to Number or its default data type is String
console.log(answer);

if (answer == question.get('correct')) {
  console.log(`${question.get(true)}`);
} else {
  console.log(`${question.get(false)}`);
}
*/
