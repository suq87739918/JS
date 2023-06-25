//tip is 15% if price is between 50 - 300 and 20% for else price
const price = prompt('bill price');
const tip = price >= 50 && price <= 300 ? 0.15 * price : 0.2 * price;
const totalBill = Number(price) + Number(tip);
console.log(`The total bill is ${price}, so the tip is ${tip}, and the total bill with tips is ${totalBill}`);
