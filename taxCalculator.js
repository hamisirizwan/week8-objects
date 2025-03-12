const grossPay = 80000

// calculate the tax applied based on the salary

let netSalary = 0

if(grossPay <= 10000){
    const taxCharged = (10/100) * 10000
    netSalary = grossPay - taxCharged
}else if(grossPay > 10000 && grossPay <= 20000){
    const taxCharged = (12/100) * 20000
    netSalary = grossPay - taxCharged
}else {
    const taxCharged = (14/100) * grossPay
    netSalary = grossPay - taxCharged
}


console.log(netSalary)