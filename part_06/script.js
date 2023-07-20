"use strict";

/*
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //we can also set the default value here
  //numPassengers = numPassengers || 1; //this set the default value of numPassengers to itself, if numPassengers doesnt exist, then it will assigned to 1
  //price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking("LH123");
createBooking("LH123", 2, 123);
createBooking("LH123", 2);
createBooking("CA132", undefined, 1000);   //we could set numPassenger to undefined, then it will use the default value


const flight = "LH123";
const jonas = {
  name: "Jonas Tobias",
  passportNum: 124123131,
};
const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;
  if (passenger.passportNum === 124123131) {
    alert("Check in");
  } else {
    alert("Wrong passport");
  }
};
checkIn(flight, jonas);
console.log(flight); //LH123
console.log(jonas); // Mr. Jonas Tobias
*/

/*
在JavaScript中，基本数据类型（例如字符串、数字、布尔值）都是按值传递的，也就是说，当你把一个变量传给一个函数时，这个函数会接收这个变量的值的副本。
如果函数内部对这个副本做了修改，这个修改并不会影响到原始的变量。

然而，对象类型（例如数组、函数、对象）都是按引用传递的。这意味着当你把一个对象传递给函数时，你传递的实际上是这个对象在内存中的引用地址，
也就是说，函数内部如果对这个对象做了修改，这个修改会影响到原始的对象。

在你的代码中，flight 是一个字符串，是基本数据类型，所以当你在 checkIn 函数中改变 flightNum 的值时，并不会影响到原始的 flight 变量。
然而，jonas 是一个对象，所以在 checkIn 函数中对 passenger 的修改会影响到原始的 jonas 对象。

这就是为什么 console.log(flight); 返回的是代码开头定义的值，而 console.log(jonas); 返回了函数中定义的值。
*/

/*
const newPassport = function (person) {
  person.passportNum = Math.trunc(Math.random() * 1000000);
};
newPassport(jonas); //this is object, passportNum is changed
console.log(jonas.passportNum);
checkIn(flight, jonas); //so return Wrong passport


const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

const upperFisrtWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

//higher order function
const transformer = function (str, fn) {
  console.log(`The original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};
transformer("JavsScript is the best!", upperFisrtWord);
transformer("JavsScript is the best!", oneWord);

const high5 = function () {
  console.log("👋");
};
document.body.addEventListener("click", high5);

["Jonas", "Martin", "Adam"].forEach(high5);


const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} to ${name}`);
  };
};
const greeterHey = greet("Hello");
greeterHey("Jonas");
greeterHey("Tobias");

greet("Hey")("Jonas");

const greetArrowFunctionVersion = (greeting) => (name) =>
  console.log(`${greeting} to ${name}`);

const greeterHeyArrowVersion = greet("Hello");
greeterHeyArrowVersion("Jonas");
greeterHeyArrowVersion("Tobias");

greetArrowFunctionVersion("Hey")("Jonas");


const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.booking.push({ flight: `${this.iataCode}${flightNum}`, name }); //once we call function lufthansa.book, then flight info is pushed to this.booking
  },
};
lufthansa.book(239, "Jonas");
lufthansa.book(635, "John");
console.log(lufthansa.booking);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  booking: [],
};

const book = lufthansa.book; //可以在外面创建一个book，这是lufthansa.book的copy

//DOES NOT WORK!
//book(23, "Williams"); //this will return error: Cannot read properties of undefined (reading 'airline'), 因为book这里是一个copy，但是this关键字指向undefined了

//to avoid this, method 1: call method
book.call(eurowings, 23, "Williams"); //call()中表明this指代的是哪个
console.log(eurowings);
book.call(lufthansa, 239, "Tobias"); //call()中表明this指代的是哪个
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  booking: [],
};
book.call(swiss, 199, "Yiwen");
console.log(swiss);

//method 2: apply method
const flightData = [583, "george cooper"];
book.apply(swiss, flightData);
console.log(swiss);
//or
book.call(swiss, ...flightData);
console.log(swiss);

//method 3: bind method;
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(234, "Tony");
console.log(eurowings);

const bookEW23 = book.bind(eurowings, 23); //flightNum is already set
bookEW23("Cathy");

//with event listener
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this); //will log: <button class="buy">Buy new plane 🛩</button>
  this.planes++;
  console.log(this.planes); //will log: NaN
};
//lufthansa.buyPlane, is pointing to document.querySelector(".buy") whith is the buttom element, so "this" whill log <button class="buy">Buy new plane 🛩</button>
// document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane);
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

//partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 100));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(120));

//practice: rewrite above partial application function
const addTaxRate = function (rate) {
  //创建一个匿名函数并返回
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(120));
*/
