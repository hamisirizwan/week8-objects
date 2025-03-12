console.log("this is from conditionals file")

// comparison operators

console.log(7 > 7)    // false
console.log(7 == "7")  // true
console.log(7 === "7")  //false
console.log(7 < 7)  // false
console.log(7 >= 7)  // true
console.log(7 <= 7)  //true
console.log(7 != 7) // false
console.log(7 !== 7) // false

// AND &&

// OR ||

const student = {
    name:"Kevin",
    math: 10,
    eng: 50,
    phy: 50
}

// total - operators(arithmetic operators)

const total = student.math + student.eng + student.phy

console.log(total)

if(total >= 150){
    console.log("You have scored above avarage")
}else {
    console.log("you have failed")
}


// age of a user to enter a club

const age = 18

const displayHeading = document.getElementById("heading")

if(age < 18){
    displayHeading.innerHTML = "You should be at home"
    console.log("You should be at home") //A
}else if(age >= 18 && age <= 50){
    displayHeading.innerHTML = "You are allowed to have fun"
    console.log("You are allowed to have fun") //B
}else {
     displayHeading.innerHTML = "You should be helping your grandchildren with homework"
    console.log("You should be helping your grandchildren with homework") //C
}

console.log("hello world")
// if(condition){
//   what will be executed when the condition is met
// }


// if(codition1){

// }else if (condition2){

// }else if(condition3){

// }else {

// }
// if 
// else if
// else