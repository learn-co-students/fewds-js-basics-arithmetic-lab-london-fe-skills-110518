/*
Variables defined in the test suite:
- currentAge

You should NOT try to redefine any of the above variables.
*/
let newID = 1000000000 + oldID;

// Write your code below this line!

  
randomNumber = Math.random() * 20

randomInteger = Math.floor(randomNumber) 

randomUserID = randomInteger + 1000000000

// const ageIsValid = Number.isInteger(currentAge);
let ageIsValid;
if (Number.isInteger(currentAge)) {
  ageIsValid = true;
} else {
  ageIsValid = false;
}
