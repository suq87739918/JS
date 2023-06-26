const calcAge = birthYear => 2037 - birthYear;
const age = calcAge(1991);
console.log(age);

const yearsUntilRetirment = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirment = 65 - age;
    //return retirment;
    return `${firstName} retires in ${retirment} years`
}
console.log(yearsUntilRetirment(1991, 'Yueqian'));