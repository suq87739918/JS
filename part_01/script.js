/*
let js = 'amazing';
//if(js === 'amazing') alert('JavaScript is FUN!')

//40 + 10 - 5;
//这个计算不会显示在网页，也不会显示在console，因为没有表明要在哪里显示 
console.log("jonas");
console.log(23);
console.log(40 + 10 - 5);
let firstName = "Jonas"
console.log(firstName + " this is the second name");
//let 3year = 3;    variable name cannot start with a NUMBER!!! this is ILLIGAL

//7 data type
let age = 23; //number
let secondName = "Bob" //String
let fullAge = true; //boolean
let children; //undefined value
let child = null; //empty value
//Symbol: value that is unique and cannot be change(not usefull)
//Bigint: larger integers than number type can hold

console.log(typeof(age));

//change data type
firstName = true;
console.log(typeof firstName);

//undefined
let year;
console.log(year);
console.log(typeof year);
//reassign the value
year = 2001;
console.log(year);
console.log(typeof year);

//null value, it should return "null", returning "object" seems like a bug
console.log(typeof null);

//let可以用于声明变量，这个值之后可以reassigning一个别的值, let is block scope
let age = 30;
age = 31;

//const is for immutable variable，const用于声明常量
const birthYear = 1999;

//var could also reassigning variable, and var is function scope
var job = "programmer";
job = "teacher"; 

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageSarah / 2, 2 ** 3);// 2 ** 3 means 2 to the power of 3 which is 8
const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);
console.log(firstName - lastName);

let x = 10 + 5;
x += 10; //15 + 10 = 25
x *= 4; // 25 * 4 = 100
x ++; //100 + 1 = 101
console.log(x); //25

//comparison
console.log(ageJonas >= ageSarah);
const isFullAge = ageSarah >= 18;


let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const currYear = 2037;
const jonas = "I'm " + firstName + ', a ' + (currYear - birthYear) + " yesr old " + job + "!";
console.log(jonas);

//by using template literal, 有效避免格式出现问题，比如上文jonas里的空格
const jonasNew = `I'm ${firstName}, a ${currYear - birthYear} year old ${job}!`;
console.log(jonasNew);

//they have the same output, `` is easier to use
console.log('String with \n\
multiple \n\
line');
console.log(`String with
multiple
line`);

const age = 12;
//const isOldEnough = age >= 18;
if(age >= 18){
    console.log('Sarah can start driving license 🚗');
}else{
    console.log('Sarah is not old enough for taking driver license 🚫');
    const yearLeft = 18 - age;
    console.log(`Sarah is too yound, wait another ${yearLeft} years`);
}
const birthYear = 1991;
let century;
if(birthYear <= 2000){
    century = 20;
}else{
    century = 21;
}
console.log(century);


//there are 5 falsy value: 
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

//== and ===
const age = 18;
if(age === 18){   //3个等于号是严格的判断，不带自动数据类型转换，而2个等于的带
    console.log("STRICT EQUAL _ age is exactly 18");
};
if(age == 18){   //3个等于号是严格的判断，不带自动数据类型转换，而2个等于的带
    console.log("LOOSE EQUAL _ age is exactly 18");
};

const favorite = prompt("What is your favorite number?");
console.log(favorite); //will return a number as string
console.log(typeof favorite);
if(favorite === 23){   //will return false
    console.log("23 is a great number")
}
if(favorite == 23){    //will return true
    console.log("23 is a great number")
}

//to return the favorite number as number
const favorite2 = Number(prompt("What is your favorite number?")); //will return as number
console.log(favorite); //will return a number as string
console.log(typeof favorite);
if(favorite2 !== 23){
    console.log("why not 23?")
}




//switch statement
const day = prompt("enter the day below:");

switch(day){
    case 'monday':   //day === monday   here use strict equal
        console.log('do leetcode');
        console.log('go shopping');
        break;
    case 'Tuesday':
        console.log('prepare videos')
        break;
    case 'Wednesday':
    case 'thurday':
        console.log('do some exercise');
        break;
    case 'Friday':
        console.log('go hotpot');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Enjoy weekend');
        break;
    default:
        console.log('not a valid day');
}


//condition way to using if/else
const age = 23;
age >= 18 ? console.log("you can drink") : console.log('you should drink water');
//better way of writing this
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);
//writing in if/else statement
let drink2;
if(age >= 18) {
    drink2 = 'wine';
}else{
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
*/

