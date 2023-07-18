'use strict';
/*
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
//object outside of outject
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


// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //this is an object that defined outside of this object
  openingHours,
  orderDelivery({
    //we can set default value here
    time = '22:00',
    starterIndex = 1,
    mainIndex = 0,
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(`this is ` + mainIngredient);
    console.log(otherIngredients);
  },
};

//retriving the keys and values
for (const day of Object.keys(openingHours)) {
  console.log(day);
}
for (const day of Object.values(openingHours)) {
  console.log(day);
}

//Keys
const propertiesKey = Object.keys(restaurant.openingHours);
// console.log(`We are opening on ${properties.length} days`);
let openStr = `We are opening on ${propertiesKey.length} days: `;
for (const day of propertiesKey) {
  openStr += `${day}, `;
}
console.log(openStr);
//Values
for (const day of Object.values(openingHours)) {
  console.log(day);
}
//Entries object
const entries = Object.entries(openingHours);
console.log(entries);
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}


if (restaurant.openingHours.fri) {
  console.log(restaurant.openingHours.fri.open);
}
//without optinal chaning
if (restaurant.openingHours && restaurant.openingHours.mon) {
  //条件这个可能会变的很多很乱
  console.log(restaurant.openingHours.mon.open);
}
//with optimal chaning
console.log(restaurant.openingHours.tue?.open); //如果？前的东西存在，才会继续，否则直接返回undefined
console.log(restaurant.openingHours?.tue?.open); //可以用很多歌optimal chaning
if (restaurant.openingHours && restaurant.openingHours.tue) {
  console.log(restaurant.openingHours.tue?.open);
}

for (const day of weekdays) {
  //const open = restaurant.openingHours[day]?.open || 'close'; //this is not correct,因为周五实际上餐厅时开门的，但是用｜｜会导致显示周五不开门，因为周五的开门时间0点的0是一个falsy的值，所以会直接返回｜｜之后的close
  const open = restaurant.openingHours[day]?.open ?? 'close';
  console.log(`On ${day}, we open at ${open}`);
}

//we can also check if a function is exist before we call it
console.log(restaurant.order?.(1, 0) ?? 'Method does not exist');
console.log(restaurant.orderR?.(1, 0) ?? 'Method does not exist');

//optimal chaning on Arrays
const users = [
  {
    name: 'Jonas',
    email: 'hello@jonas',
  },
];
console.log(users[0]?.name ?? 'Users array empty');
console.log(users[1]?.name ?? 'Users array empty');
//this is the same as writing
if (users.length > 0) {
  console.log(users[0]?.name);
} else {
  console.log('Users array empty');
}


const arr = [2, 3, 4];
//if we want to fet the value in the arr
const a = arr[0];
const b = arr[1];
const c = arr[2];
//a better way
const [x, y, z] = arr;
console.log(x, y, z);
console.log(typeof (x, y, z));   //number    this is destructure, unpack it
console.log(typeof arr);     //object


//const [first, second] = restaurant.categories;
//console.log(first, second);
//if I want the first and third element, we could leave it empty for the second
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

//what if I wanna switch the main and secondary
//we could store one of it in a temp variable
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//but with destructing, we could also do:
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

//destructure is also work for nested array
const nested = [1, 2, [3, 4]];
// const [i, , j] = nested;
// console.log(i, j);  // it will skip 2
//if we want them in seperate variables
const [i, , [j, k]] = nested; //we could use destructuring in a destruturing
console.log(i, j, k);

//console.log(restaurant.order(2, 0));
//with destructure:
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

//default values
// const [p, q, r] = [1, 2];
// console.log(p, q, r); //r will de undefined
//however, we could set then to a default value
const [p = 1, q = 1, r = 1] = [5, 6];
console.log(p, q, r); //r will be set to default value 1

//destructuring Objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
//assign them new names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//assign them default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 222;
const obj = { a: 23, b: 1, c: 14 };
//{a , b} = obj    this is wrong
({ a, b } = obj);
console.log(a, b);

//Nested Objects
const { fri } = restaurant.openingHours;
console.log(fri);
//further more
const {
  fri: { open, close },
} = restaurant.openingHours;
console.log(open);
//further more
const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o);


restaurant.orderDelivery({
  time: '23:30',
  address: '644 Main St W',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: '644 Main St W',
  mainIndex: 1,
});


//spread operator  (...)
const arr = [7, 8, 9];
const badArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badArr);
//with using spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);
//join arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//iterable: arrays, string, maps, set, not object
const str = 'Jonas';
const letters = [...str, , 'S.'];
console.log(letters);

const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
console.log(ingredients);
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
//or
restaurant.orderPasta(...ingredients);


//object
const newRestaurant = { foundIn: 1991, ...restaurant, founder: 'TobiasT' };
console.log(newRestaurant);
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name);
console.log(restaurantCopy.name);


//  1). destructuring
//spread syntax
const arr = [1, 2, ...[3, 4]];
console.log(arr);
//rest syntax
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(others);
console.log(a, b, others);

const [p, , r, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(p, r, otherFoods);

//object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//  2). functions
//"...number" is use of rest syntax, indicating that any number of arguments can be passed to the function and they will be collected into an array named number
const add = function (...number) {
  // console.log(number);
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += number[i];
  }
  console.log(sum);
};
add(2, 3);
add(1, 2, 3, 4, 5, 6);
add(2, 54, 7, 83, 1, 3, 3, 5, 76);
const x = [2, 43, 643];
add(...x);


//order pizza
restaurant.orderPizza('mushroom', 'onion', 'Olives', 'Spinach');


//&& and ||, they accept ANY data type, return ANY data type, short - circuiting
console.log('-----OR(||)-----');
console.log(3 && 'Jonas'); //return Jonas
console.log(3 || 'Jonas'); //return 3
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

//restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
const guests2 = restaurant.numGuests || 10;
console.log(guests2);
console.log('-----AND(&&)-----');
console.log(0 || 'Jonas'); //return 0, because 0 is falsy, by short circuiting, it will return 0 immediately
console.log(23 || null); //return null

//test
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}
//we could use && to avoid using if
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');


//Nullish Coalescing
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10; //this will return 10 as restaurant.numGuests is a falsy value
console.log(guests);
//but with use of Nullish Coalescing "??", 空值合并, 仅在碰到"null"或者"undefined"时才会触发short circuiting，否则会返回这个值
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);


const rest1 = {
  name: 'Capri',
  numGuests: 0,
};
const rest2 = {
  name: 'La Piazza',
  onwer: 'Giovanni Rossi',
};

//OR assignment operator
// rest1.numGuests ||= 10;    //assign rest1.numGuests to 10 is rest1.numGuests is falsy
// rest2.numGuests ||= 10;
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
console.log(rest1.numGuests ?? 10);
console.log(rest2.numGuests ?? 10);
rest1.numGuests ??= 10; // ??= is the nullish coalescing assignment operator. It assigns the value on the right-hand side (10) to the left-hand side (rest1.numGuests) if the left-hand side is null or undefined. However, since rest1.numGuests is already 0 (which is a truthy value), the expression rest1.numGuests ??= 10 does not change the value of rest1.numGuests. Therefore, the output remains 0.
rest2.numGuests ??= 10; //nullish operator(null or undefined)
console.log(rest1.numGuests, rest2.numGuests);


//looping using for of
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) {
  console.log(item);
}
for (const item of menu.entries()) {
  console.log(item);
}
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

*/
