//logic
const calcTip = function(price){
    let tip;
    if(price >= 50 && price <= 300){
        tip = 0.15 * price;
    }else{
        tip = 0.2 * price;
    }
    return tip;
}
console.log(calcTip(100));
//Q1
const bills = [125, 555, 44];
console.log(bills)
//Q2
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
//Q3
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);



// const bill = Number(prompt("input the bill"));
// //let tip;
// if(bill >= 50 && bill <= 300){
//     tip = 0.15 * bill;
// }else{
//     tip = 0.2 * bill;
// }
// console.log(tip);

