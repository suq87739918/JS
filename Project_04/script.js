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

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// const displayMovements = function (movements) {
//   for (const [i, mov] of movements.entries()) {
//     const type = mov > 0 ? "DEPOSIT" : "WITHDRAW";
//     const html = `
//       <div class="movements__row">
//         <div class="movements__type movements__type--${type}">${
//       i + 1
//     } ${type}</div>
//         <div class="movements__value">${mov}</div>
//       </div>
//     `;
//     containerMovements.insertAdjacentHTML("afterbegin", html);
//   }
// };
// displayMovements(account1.movements);
const displayMovements = function (movements) {
  containerMovements.innerHTML = ""; //this gonna return all html that we generated below.(const html = )

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  //store balance for later use
  acc.balance = acc.movements.reduce(function (acc, cur, i, arr) {
    return acc + cur;
  }, 0);

  labelBalance.textContent = `${acc.balance} CAD`;
};

const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter(function (mov) {
      return mov > 0;
    })
    .reduce(function (acc, cur, i, arr) {
      return acc + cur;
    }, 0);
  labelSumIn.textContent = `$${income}`;

  const out = acc.movements
    .filter(function (mov) {
      return mov < 0;
    })
    .reduce(function (acc, cur, i, arr) {
      return acc + cur;
    }, 0);
  labelSumOut.textContent = `$${Math.abs(out)}`;

  //interest here is set to 1.2, and interest that below 1USD will not be counted
  const interest = acc.movements
    .filter(function (mov) {
      return mov > 0;
    })
    .map(function (mov) {
      return (mov * acc.interestRate) / 100;
    })
    .filter(function (int, i, arr) {
      //console.log(arr);
      return int >= 1;
    })
    .reduce(function (acc, cur, i, arr) {
      return acc + cur;
    }, 0);
  labelSumInterest.textContent = `$${interest}`;
};

const user = "Steven Thomas Williams"; //stw
const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.usernane = acc.owner
      .toLowerCase()
      .split(" ")
      .map(function (name) {
        return name[0];
      })
      .join("");
  });
};
createUsername(accounts);
console.log(accounts);

//update UI
const updateUI = function (acc) {
  //display movements
  displayMovements(acc.movements);
  //display balance
  calcDisplayBalance(acc);
  //display summary
  calcDisplaySummary(acc);
};

//create event lisener
let currAccount;

btnLogin.addEventListener("click", function (e) {
  //prevent form from submitting, so that the page wont refresh automaticlly
  e.preventDefault();
  currAccount = accounts.find(
    (acc) => acc.usernane === inputLoginUsername.value
  );
  console.log(currAccount);
  //currAccount?.pin: .pin will only be triggered if currAccount exist
  if (currAccount?.pin === Number(inputLoginPin.value)) {
    //display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    //clear input field
    inputLoginUsername.value = "";
    inputLoginPin.value = "";
    //make it lose focus
    inputLoginPin.blur();

    //update UI
    updateUI(currAccount);
  }
});

//transfer function
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const reciverAcc = accounts.find(
    (acc) => acc.usernane === inputTransferTo.value
  );
  //clean transfer input area
  inputTransferAmount.value = "";
  inputTransferTo.value = "";
  if (
    amount > 0 &&
    reciverAcc &&
    currAccount.balance >= amount &&
    reciverAcc?.usernane !== currAccount.usernane
  ) {
    currAccount.movements.push(-amount);
    reciverAcc.movements.push(amount);
    //update UI
    updateUI(currAccount);
  }
});

//request loan
btnLoan.addEventListener("click", function (e) {
  e.preventDefault;
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currAccount.movements.some((mov) => mov >= amount * 0.1)) {
    //add movement
    currAccount.movements.push(amount);
    //update UI
    updateUI(currAccount);
  }
  //clear loan input field
  inputLoanAmount.value = "";
});

//close account
btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  //check input is correct
  if (
    inputCloseUsername.value === currAccount.usernane &&
    Number(inputClosePin.value) === currAccount.pin
  ) {
    //calculating the index
    const index = accounts.findIndex(
      (acc) => acc.usernane === currAccount.usernane
    );
    console.log(index);
    //delete account
    accounts.splice(index, 1); //delete 1 element at this index
    //hide UI
    containerApp.style.opacity = 0;
  }
  //clean delete field
  inputCloseUsername.value = "";
  inputClosePin.value = "";
});
