//for test data 1:
const weightMarks = 78;
const heightMarks = 1.69;
const weightJohn = 92;
const heightJohn = 1.95;

const BMIForMarks = weightMarks / heightMarks ** 2;
const BMIForJohn = weightJohn / heightJohn ** 2;

const isHigher = BMIForMarks > BMIForJohn;
console.log(BMIForMarks, BMIForJohn, isHigher);
if(BMIForMarks > BMIForJohn){
    console.log(`Marks has higher BMI(${BMIForMarks}) than John(${BMIForJohn})`)
}else if(BMIForJohn == BMIForMarks){
    console.log("they have the same BMI")
}else{
    console.log("John has giher BMI")
}