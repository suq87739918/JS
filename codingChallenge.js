const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `...${arr[i]} degree in ${i + 1} day`;
  }
  console.log(str);
};
printForecast([17, 21, 23]);
