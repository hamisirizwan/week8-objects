console.log("This is from the array file");

// Arrays are datatypes that can hold multiple values at the same time.

let item1 = "Buy potatoes";

// const item2 = "Go to the butchery"

const shoppingList = [
  "Buy patotoes",
  "Go to the butchery",
  "Play football",
  "Go to sleep",
];

// listing items in html
const body = document.getElementById("thebody");

const theList = document.createElement("div");
body.appendChild(theList);
// loops
for (let item = 0; item < shoppingList.length; item++) {
  const listItem = document.createElement("div");

  listItem.innerHTML = `  <div style="padding: 40px;margin-bottom:10px; background-color: aqua; display: flex;align-items: center; justify-content: center;">
        <h1>${shoppingList[item]}</h1>
    </div>`;
  theList.appendChild(listItem);
}

const teachers = [
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
];

const students = [
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
];

// length
const howManyTeachers = teachers.length;
const howManyStudents = students.length;

// pascal case , camel case , snake case

console.log(howManyTeachers);
console.log(howManyStudents);
// teachers[0] = {
//     name:"Steve",
//     class: "f4 e",
//     subject:"Physics"
// }

// teachers[1] = {
//     name:"Edwin",
//     class: "f4 w",
//     subject:"Geography"
// }

// teachers[5] = {
//     name:"Mapendo",
//     class:"F2 E",
//     subject: "Kiswahili"
// }

console.log(teachers);
const theLastTeacher = teachers[5];

console.log(theLastTeacher); //undefined

console.log(typeof shoppingList);

// const students = new Array("Kevin" , "Maina" , "Laboso")

// strings , numbers , booleans , objects , arrays
// loosely typed
