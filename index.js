// age.js
age = 15

if age < 1:
    console.log("infant")
else if age < 3:
    console.log("toddler")
else if age < 12:
    console.log("child")
else if age < 13:
    console.log("preteen")
else if age < 20:
    console.log("teen")
else:
    consolee.log("young adult")


// pluralizer.js
let thing = 'cat';
let count = 5;
if (count === 1) {
  console.log(count + ' ' + thing);
} else {
  console.log(count + ' ' + thing + 's');
}


//tempConvert.js
const fahrenheit = 98;
const indicator = "c";
let result;
if (indicator === "c") {
  result = ((fahrenheit - 32) * 5) / 9;
} else if (indicator === "k") {
  result = ((fahrenheit - 32) * 5) / 9 + 273.15;
}
console.log(`${fahrenheit} degrees Fahrenheit is ${result} degrees ${indicator.toUpperCase()}`);


// larger.js
const num1 = 7;
const num2 = 3;
let largerNumber;
if (num1 > num2) {
  largerNumber = num1;
} else {
  largerNumber = num2;
}
console.log(`The larger number of ${num1} and ${num2} is ${largerNumber}`);


//translator.js
const languageCode = "es";

let translation;
switch (languageCode) {
  case "es":
    translation = "¡Hola Mundo!";
    break;
  case "de":
    translation = "Hallo Welt!";
    break;
  case "fr":
    translation = "Bonjour le monde!";
    break;
  default:
    translation = "Hello World!";
}
console.log(translation);


//Comparing Arrays
const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];

function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
console.log(areArraysEqual(arr1, arr2)); // true
console.log(areArraysEqual(arr1, arr3)); // false
console.log(areArraysEqual(arr1, arr4)); // false
