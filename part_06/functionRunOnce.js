"use strict";

//function that only run for once, then be deleted
const runOnce = function () {
  console.log("This will never run again");
};
runOnce();
//but this wont prevent I call this function again later

(function () {
  console.log("This is the correct way of writing this");
})();
//可以把function写在括号中，然后直接通过()调用他

(() => console.log("This will also never run again"))();

//all data in the scope is PRIVATE, can not be accessd from outside

//we can also set private value by creating a block, ATTENTION: var is not private here!!!
{
  const isPrivate = "Jonas";
  var notPrivate = 123;
  let isAlsoPrivate = [1, 2, 3];
}
//console.log(isPrivate);   //isPrivate is not defined,
//console.log(isAlsoPrivate);
console.log(notPrivate); //this is NOT PRIVATE, so try to avoid using "var" when declaring a private value
