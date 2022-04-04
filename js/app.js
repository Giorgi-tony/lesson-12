let myName = "Giorgi Orbeladze";
let myHobby = "billiards";
const yearOfBirth = 1995;
let	currentYear = 2022;
/*  not sure if I shoild use const or let for calculating age since the way it's calculated doesn't change 
    but value after calculation will change after currentYear changes.
*/
let age = currentYear - yearOfBirth;
// console.log(age);
let	myText = `My name is ${myName}, I am ${age} years old and my hobby is playing ${myHobby}`
console.log(myText);
console.log("My name is" + " " + myName + ", I am" + " " + age + " " + "years old and my hobby is playing" + " " + myHobby);