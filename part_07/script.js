"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");
/*
please refer to PROJECT 07
*/

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
//slice()
let arr = ["a", "b", "c", "d", "e"];
console.log(arr);
console.log(arr.slice(2)); //start from 2
console.log(arr.slice(2, 4)); //start from 2, end before 4(index 4 is not included)
console.log(arr.slice(-2)); //start from -2 index
console.log(arr.slice(1, -2)); //start from index 1, end before index -2, so b and c


//splice(), THIS GANNA CHANGE THE ORIGIN ARRAY
let arr = ["a", "b", "c", "d", "e"];
//console.log(arr.splice(2));
arr.splice(-1);
console.log(arr); //splice can be used to remove element from array


//reverse()
let arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse()); //this will also change the original arr
console.log(arr2);

//concat()
const letter = arr.concat(arr2);
console.log(letter);
console.log([...arr, ...arr2]);

//join()
console.log(letter.join("-"));  //a-b-c-d-e-f-g-h-i-j


//at()
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

//geting the last element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
console.log("jonas".at(1));
console.log("jonas".at(-1));


//for each loop
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//by for if method
for (const movement of movements) {
  if (movement > 0) {
    console.log(`deposit ${movement} dollor`);
  } else if (movement < 0) {
    console.log(`withdraw ${Math.abs(movement)} dollor`);
  }
}

//for each method
console.log("----------forEach()----------");
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`deposit ${movement} dollor`);
  } else if (movement < 0) {
    console.log(`withdraw ${Math.abs(movement)} dollor`);
  }
});

for (const [i, movement] of movements.entries()) {
  //[i, movement] => [index, value]
  if (movement > 0) {
    console.log(`movement ${i + 1}: deposit ${movement} dollor`);
  } else if (movement < 0) {
    console.log(`movement ${i + 1}: withdraw ${Math.abs(movement)} dollor`);
  }
}
console.log("----------Another way of writing this----------");
movements.forEach(function (mov, i, arr) {
  //in this method, (element, index)!!!order matters
  if (mov > 0) {
    console.log(`movement ${i + 1}: deposit ${mov} dollor`);
  } else if (mov < 0) {
    console.log(`movement ${i + 1}: withdraw ${Math.abs(mov)} dollor`);
  }
});


//forEach() method on Map:
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//forEach() method on Set:
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  //"_" this means throw away value, not important value
  console.log(`${_}: ${value}`); //key and value is the same in Set
  console.log(`${value}: ${value}`);
  console.log(`${_}: ${_}`);
});

//Map() method
//map 函数的主要区别在于，它会遍历数组的每一个元素，并且为每一个元素单独调用你提供的函数。
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
const movementsUSD = movements.map(function (priceInEUR) {
  return priceInEUR * eurToUsd;
});
console.log(movements);
console.log(movementsUSD);

//or
const movementsUSDFor = [];
for (const mov of movements) {
  movementsUSDFor.push(mov * eurToUsd);
}
console.log(movementsUSDFor); //this return the same as above map method

//or
const movementsUSD2 = function (priceInEUR) {
  const eurToUsd = 1.1; // 假设 EUR 到 USD 的转换率为 1.1
  for (const price of priceInEUR) {
    console.log(price * eurToUsd);
  }
};
movementsUSD2(movements);
//above map method and function method do the same thing, but map method retuen in an Array, function method return in Strings


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const movementsDescription = movements.map(
  (mov, i) =>
    `movement ${i + 1}: ${mov > 0 ? "deposit" : "withdraw"} ${Math.abs(
      mov
    )} dollor`
  //do the same thing as below

  // if (mov > 0) {
  //   return `movement ${i + 1}: deposit ${mov} dollor`;
  // } else if (mov < 0) {
  //   return `movement ${i + 1}: withdraw ${Math.abs(mov)} dollor`;
  // }
);
console.log(movementsDescription);

//filter method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(function (mov) {
  return mov > 0; //filter out mov that smaller than 0
});
console.log(deposits);

//by for of loop
const depositsFor = [];
for (const mov of movements) {
  if (mov > 0) {
    depositsFor.push(mov);
  }
}
console.log(depositsFor);

const withdraws = movements.filter(function (mov) {
  return mov < 0;
});
console.log(withdraws);

//reduce() method
console.log(movements);
const balance = movements.reduce(function (acc, cur, i, arr) {
  //reduce(function(accumulator, index, array))
  console.log(`Iteration ${i}, the acuumulator is ${acc}`);
  return acc + cur;
}, 0); //this is the init value of accumulator
console.log(balance);

//by for of loop
let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}
console.log(balance2);

//max value
const max = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i} : ${acc}`);
  if (acc > cur) {
    return acc;
  } else {
    return (acc = cur);
  }
}, movements[0]);
console.log(max);

//min value
const min = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i} : ${acc}`);
  if (acc < cur) {
    return acc;
  } else {
    return (acc = cur);
  }
}, movements[0]);
console.log(min);



const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//CAD to USD
const cadToUsd = 0.76;
const usdVersion = movements
  .filter(function (mov) {
    return mov > 0;
  })
  .map(function (mov) {
    return mov * cadToUsd;
  })
  .reduce(function (acc, cur, i, arr) {
    return acc + cur;
  }, 0);
console.log(usdVersion);


//find() method
const firstWithdraw = movements.find((mov) => mov < 0);
console.log(movements);
console.log(firstWithdraw);
console.log(accounts);
const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account);

//some method, check for condition
const anyDeposits = movements.some((mov) => mov > 0); //test if there any mov > 0
console.log(anyDeposits);
//this only check equality
console.log(movements.includes(-130));

//every method
console.log(movements.every((mov) => mov > 0)); //test if every mov > 0
console.log(account4.movements.every((mov) => mov > 0));

//seperate callback function
console.log("----------seperate callback function----------");
const deposit = (mov) => mov > 0;
console.log(movements.some(deposit));
console.log(movements.filter(deposit));
console.log(movements.every(deposit));
*/

//flat method
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat());
console.log(arrDeep.flat().flat());
//or we could do
console.log(arrDeep.flat(2)); //set depth to 2

const accountMovements = accounts.map((acc) => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const overallBalance = allMovements.reduce(function (acc, cur, i, arr) {
  return acc + cur;
}, 0);
console.log(overallBalance);

//by chaining
const overallBalance2 = accounts
  .map(function (acc) {
    return acc.movements;
  })
  .flat()
  .reduce(function (acc, cur, i, arr) {
    return acc + cur;
  }, 0);
console.log(overallBalance2);

//by flatMap, this is the method that combine flat and map
const overallBalance3 = accounts
  //note: flatMap() only goes depth 1, so if I need to go depth 2 or more, then I have to use flat() method
  .flatMap(function (acc) {
    return acc.movements;
  })
  .reduce(function (acc, cur, i, arr) {
    return acc + cur;
  }, 0);
console.log(overallBalance3);
