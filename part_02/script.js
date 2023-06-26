'use strict'; //use strict mode. make code secure, to avoid accident code

/*let hasDeiverLicense = false;
const passTest = true;
if(passTest){
    hasDeiverLicense = true;
}
if(hasDeiverLicense){
    console.log('I can drive');
}



function logger(){
    console.log('my name is yueqian');
}
//calling/running/invoking the function
logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
const juices = fruitProcessor(2,3);
console.log(juices)
//or
console.log(fruitProcessor(3,4));


//function declearation
function calcAge1(birthYear){
    return 2037 - birthYear;
}
const age1 = calcAge1(1997);
//function expression
const calcAge2 = function (birthYear){
    return 2037 - birthYear
}
const age2 = calcAge2(1991);
console.log(age1, age2);



//calling function from another function
function cutFruitPicese(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePiceses = cutFruitPicese(apples);
    const orangePiceses = cutFruitPicese(oranges);
    const juice = `Juice with ${applePiceses} picese of apples and ${orangePiceses} pricese of oranges`;
    return juice;
}
console.log(fruitProcessor(1,2));


const calcAge = function (birthYear){
    return 2037 - birthYear;
}
const yearsUntilRetirment = function(birthYear, firstName){
    const age = calcAge(birthYear)
    const retirment = 65 - age;
    //return retirment;
    //return `${firstName} retires in ${retirment} years`
    if(retirment > 0){
        console.log(`${firstName} will retire in ${retirment}`)
        return retirment;
    }else{
        console.log(`${firstName} has already retired`);
        return -1;
    }
}
console.log(yearsUntilRetirment(1991, 'Yueqian'))



//data structure Array
const friends = ['Steven', 'Bob', 'Tobias'];
console.log(friends);

const years = new Array(1991,2000,2020,2023,2037,2039);
console.log(friends[0]); // should return steven and bob
console.log(years.length);
console.log(years[years.length - 1]);

const Name = 'Jonas'
const Jonas = [Name, 'Schmedtmann', 2037-1991, 'teacher', friends];
console.log(Jonas);

const calcAge3 = function(year){
    return 2037 - year
}
const year = new Array(1991,2000,2020,2023,2037,2039);
console.log(calcAge3(year));// this is no good, a number cant minus a array, it will return NaN
const age1 = calcAge3(year[0]);
const age2 = calcAge3(year[1]);
const age3 = calcAge3(year[2]);
console.log(age1,age2,age3);
//or we can use a foor loop to triverse the whole array



const friend = ['Bob', 'Alice', 'Steven'];
friend.push('Cathy'); //to add an element to the end of an array
console.log(friend);
friend.unshift('John');//add an element to the beginning of an array
console.log(friend);
const popped = friend.pop()  //remove the last element
console.log(popped)
console.log(friend);
const shifted = friend.shift();   //remove the first element
console.log(shifted);
console.log(friend);

console.log(friend.indexOf('Steven'));
console.log(friend.indexOf('BOSS'))   //since BOSS is not in the array, it will return -1
//or we can do
console.log(friend.includes('Steven'));   //TRUE
console.log(friend.includes('BOSS'))   //FLASE



//Object
const jonasArray = [
    'Jonas',   
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Micheal', 'Peter', 'Steven']
]   //in Array, we can only address them by its index, we couldnt address them by its name.
//in object, we could define key : value pair
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Micheal', 'Peter', 'Steven']
}
console.log(jonas);
console.log(jonas.lastName)   //for getting lastName

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);

const userInput = prompt("what do want to know? choose between firstName, lastName, age, job, friends")
// console.log(jonas[userInput]);
if(jonas[userInput]){
    console.log(jonas[userInput])
}else{
    console.log('wrong request');
}

jonas.location = 'Portugal'
jonas['twitter'] = '@jonasschmedtmann'
console.log(jonas);

//challenge: 
console.log(`${jonas.firstName} has ${jonas.friends.length} friedns, and ${jonas.friends[0]} is his best friend`)


//we can also add function to the object
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Micheal', 'Peter', 'Steven'],
    hasDriverLisence: true,

    // calcAge: function(birthYear){
    //     return 2037 - birthYear;
    // }

    // calcAge: function(){
    //     // console.log(this)
    //     return 2037 - this.birthYear;
    // }//this is still no good, as if we need to do this calculation multiply times, it waste time

    calcAge: function(){
        this.age = 2037 - this.birthYear   
        //this.age   is to create a new key : value pair in this(jonas) called age and assign 2037 - birthYear to it
        return this.age;
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()} ${this.job}, and he ${this.hasDriverLisence ? 'has' : 'does not have'} a driver's lisence`
    }
}
//console.log(jonas.calcAge(1991));   //this is no good, cuz we already defined birthYear in the jonas object
// console.log(jonas.calcAge())
// console.log(jonas.age)
// console.log(jonas.age)
// console.log(jonas.age)

//challenge:
//console.log(`${jonas.firstName} is a ${jonas.age} ${jonas.job}, and he ${} a driver's lisence`)
console.log(jonas.getSummary());




//for loop
for(let rep = 1; rep <= 10; rep++){
    console.log(`lift weights reptetion ${rep}`);
}





const jonasArray = [
    'Jonas',   
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Micheal', 'Peter', 'Steven']
] 
// const type = [];
// for(let i = 0; i < jonasArray.length; i++){
//     console.log(jonasArray[i]);
//     //type[i] = typeof(jonasArray[i]);
//     //or we can do
//     type.push(typeof(jonasArray[i]));
// }
// console.log(type);


const years = [1991, 2007, 1969, 2020];
const ages = [];
for(let i = 0; i < years.length; i++){
    ages[i] = 2037 - years[i];
}
console.log(ages);


//continue and break
console.log('--- ONLY STRING ---')
for(let i = 0; i < jonasArray.length; i++){
    if(typeof jonasArray[i] !== 'string'){
        continue;
    }
    console.log(jonasArray[i],typeof(jonasArray[i]));
}
console.log('--- BREAK WITH NUMBER ---')
for(let i = 0; i < jonasArray.length; i++){
    if(typeof jonasArray[i] === 'number'){
        break;
    }
    console.log(jonasArray[i],typeof(jonasArray[i]));
}




//loop backwards
const jonasArray = [
    'Jonas',   
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Micheal', 'Peter', 'Steven'],
    true
] 
for(let i = jonasArray.length - 1; i >= 0; i--){
    console.log(i, jonasArray[i])
}


for(let exercise = 1; exercise < 4; exercise++){
    console.log(`---------- Starting Exercise ${exercise} ----------`)
    for(let rep = 1; rep < 6; rep++){
        console.log(`Exercise ${exercise}: lifting weights reprtition ${rep}`);
    }
}




//while loop
for(let rep =1; rep <= 10; rep++){
    console.log(`lifting weight repetiton ${rep}`)
}

let rep = 1;
while(rep <= 10){
    console.log(`lifting weight repetiton ${rep}`)
    rep++;
}

//keep rolling the dics if is not 6
let dics = Math.trunc(Math.random() * 6) + 1;
console.log(dics)//generate a random value between 1 to 6
while(dics !== 6){
    console.log(`you roll a ${dics}`)
    dics = Math.trunc(Math.random() * 6) + 1;
    if(dics === 6){
        console.log('the loop is about to end')
    }
}
*/