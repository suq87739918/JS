//task 1
const bills = [22, 195, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const total = []
for(let i = 0; i < bills.length; i++){
    if(bills[i] >= 50 && bills[i] <= 300){
        tips[i] = bills[i] * 0.15
    }else{
        tips[i] = bills[i] * 0.2
    }
    total[i] = tips[i] + bills[i]
}
console.log(tips)
console.log(total)


//task 2
//const arr = [22, 195, 176, 440, 37, 105, 10, 1100, 86, 52]
const calcAverage = function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    average = sum / arr.length
    return average;
}
console.log(calcAverage([22, 195, 176, 440, 37, 105, 10, 1100, 86, 52]));
console.log(calcAverage([2,3,7]))