const inputYear = '1991';
//type cpnversion   手动转换
console.log(inputYear +  18); //this will output 199118 as result
console.log(Number(inputYear) + 18); // this will output 2009;
console.log(Number('Jonas')); //will output NaN which indicate this is not a number

console.log(String(23),23); //will change a number 23 to string 23

//type coercion   自动转换
console.log("I am " + 23 + " yesrs old"); //number 23 to string
console.log('23' + 2 - '10');  // string to number
console.log('2' * '3', '4' / 2); 

let n = '1' + 1;
console.log(n); //11
n = n - 1;
console.log(n); //10

console.log("the answer is: " + '10' - '5');   //Nan
console.log('10' - '5');  //5

