const MM = {
    fullName: 'Mark Miller',
    weight: 78,
    height: 1.69,

    calcBMI: function(){
        this.BMI = this.weight / (this.height * this.height)
        return this.BMI;
    }
}
const JS = {
    fullName: "John Smith",
    weight: 92,
    height: 1.95,

    calcBMI: function(){
        this.BMI = this.weight / (this.height * this.height)
        return this.BMI;
    }
}

if(MM.calcBMI() > JS.calcBMI()){
    console.log(`${MM.fullName} has higher BMI(${MM.calcBMI()}) than ${JS.fullName}(${JS.calcBMI()})`)
}else if(JS.calcBMI() > MM.calcBMI()){
    console.log(`${JS.fullName} has higher BMI(${JS.calcBMI()}) than ${MM.fullName}(${MM.calcBMI()})`)
}

