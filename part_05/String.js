'use strict';

const airline = 'TAP air Portugal';
const plane = 'A320';
/*
console.log(plane[0]);
console.log(plane[3]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r')); //first index of r
console.log(airline.lastIndexOf('r')); //last index of r
console.log(airline.lastIndexOf('air'));
console.log(airline.lastIndexOf('Air')); //return -1, case sensitive

console.log(airline.slice(4)); //remove everything before index 4, return the substring, THIS WONT CHANGE THE ORIGIN STRING
console.log(airline.slice(4, 7));

//extract first and last word
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1, airline.length));

const checkMiddleSeats = function (seat) {
  //B and E are middle seats
  let s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    return true;
  } else {
    return false;
  }
};
console.log(checkMiddleSeats('11B'));
console.log(checkMiddleSeats('23C'));
console.log(checkMiddleSeats('3E'));

//Correct the input name
const passenger = 'JOnAS'; //we want it return "Jonas"
const passengerToLower = passenger.toLowerCase();
const passengerCorrect =
  passengerToLower[0].toUpperCase() +
  passengerToLower.slice(1, passengerToLower.length);
console.log(passengerCorrect);

//check(compare) the input e-mail
const email = 'hello@jonas.io';
const loginEmail = '    Hello@Jonas.Io   \n';
// const emailLower = loginEmail.toLowerCase();
// const trimEmail = emailLower.trim();   //remove space
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail === email);

const priceZH = '288.97¥';
const priceUS = priceZH.replace('¥', '$');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23, boarding door 23'; //replace door with gate
console.log(announcement.replace('door', 'gate')); //THIS WILL ONLY REPLACE THE FIRST "door"!!!
console.log(announcement.replaceAll('door', 'gate'));

//includes
const planes = 'Airbus A320neo';
console.log(planes.includes('A320'));
console.log(planes.includes('Boeing'));
console.log(planes.startsWith('A320'));
console.log(planes.startsWith('Air'));
if (planes.startsWith('Airbus') && planes.endsWith('neo')) {
  console.log('Part of new airbus family');
}

//practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase(); //set them all to lower case for easier comparision
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log(`you are not allow to board due to holding restricted item`);
  } else {
    console.log('welcome on board');
  }
};
checkBaggage('I have some Food, a Laptop, and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('snacks, guns for protection');


//split
console.log('a+very+nice+string'.split('+'));
console.log('Yueqian Sun'.split(' '));
const [firstName, lastName] = 'Yueqian Sun'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
const newName2 = ['Mr.', firstName, lastName.toUpperCase()].join('_____');
console.log(newName);
console.log(newName2);

const capitalizeName = function (name) {
  const namesUpper = [];
  const nameArray = name.split(' ');
  for (const word of nameArray) {
    //namesUpper.push(word[0].toUpperCase() + word.slice(1));
    //or I could do:
    namesUpper.push(word.replace(word[0], word[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('yueqian Sun');

//padding the String: add a certain character to the string untill the string reach a certain length
const message = 'go to gate 23';
console.log(message.padStart(25, '+').padEnd(30, '-')); //padStart(maxlength, string)
//we could use padding on credit card number
const maskCreditCard = function (number) {
  const str = String(number);
  const last4 = str.slice(-4);
  return last4.padStart(str.length, '*');
};
console.log(maskCreditCard(17574));
console.log(maskCreditCard(1325135634377574));
console.log(maskCreditCard('371982591827340'));


//repeat
const message2 = 'bad weather... All departure delayed... \n';
console.log(message2.repeat(5));

const planeInLine = function (number) {
  console.log(`There are ${number} planes in line ${'🛩️'.repeat(number)}`);
};
planeInLine(5);
planeInLine(3);
planeInLine(10);
*/

//String Method Practice
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
//transform above to
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

//console.log(flights.split('+'));
const removeNum = function (input) {
  return input.slice(0, 3).toUpperCase(); // Remember to return the result
};

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ' '}${type.replaceAll(
    '_',
    ' '
  )} ${removeNum(from)} to ${removeNum(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(40); // Use the standalone function removeNum and pass 'from' and 'to' as arguments
  console.log(output);
}
