//1. Create a variable to store your name and display it in an alert.
var firstName = "Micheal";
console.log(firstName);

//2. Declare two number variables and show their sum, difference, product, and quotient.
let x = 3;
let t = 9;
console.log("product", x * t);
console.log("sum", x + t);
console.log("difference", x - t);
console.log("quotient", x / t);

//3. Write a program that converts Celsius to Fahrenheit.
let celsius = 30;
let fahrenheit = (celsius * 9) / 5 + 32;
console.log("Fahrenheit:", fahrenheit);

//4. Create a program that calculates the area of a rectangle using variables for length and width.
let length = 9;
let width = 9;
let area = length * width;
console.log("area of rect:", area);

//5. Write code that checks if a number is even or odd and displays the result.
let number = 7;
if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

//6. Create a program that determines if a year entered is a leap year.
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is NOT a leap year.");
}

//7. Write a function that returns the reverse of a string input.
function stringReverse(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
}
let w = "javascript";
let result = stringReverse(w);
console.log("Original:", w);
console.log("Reversed:", result);

//8. Create a function that counts the number of vowels in a string.
function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u" ||
      letter === "A" ||
      letter === "E" ||
      letter === "I" ||
      letter === "O" ||
      letter === "U"
    ) {
      count++;
    }
  }
  return count;
}
let word = "hello";
console.log("Vowel count:", countVowels(word)); // Output: 2

//9. Write a program that finds the largest number in an array of 5 numbers.
let numbers = [12, 45, 7, 89, 23];
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
console.log("The largest number is:", largest);

//11. Write code that calculates the factorial of a number.
let n = 5;
let factorial = 1;
for (let i = 1; i <= number; i++) {
  factorial = factorial * i;
}
console.log("Factorial of", n, "is", factorial);

//12. Create a function that generates a random number between two given values.
function getRandomNumber(min, max) {
  let random = Math.random() * (max - min) + min;
  return random;
}
let y = getRandomNumber(5, 10);
console.log("Random number between 5 and 10:", y);

//13. Write a program that converts a number of seconds into hours, minutes, and seconds.
let totalSeconds = 3675;
let hours = Math.floor(totalSeconds / 3600);
let remainingSeconds = totalSeconds % 3600;
let minutes = Math.floor(remainingSeconds / 60);
let seconds = remainingSeconds % 60;
console.log(
  hours + " hour(s), " + minutes + " minute(s), and " + seconds + " second(s)"
);

//14. Create a program that checks if a number is prime.
let j = 13;
let isPrime = true;

// Prime numbers must be greater than 1
if (j <= 1) {
  isPrime = false;
}
for (let i = 2; i < j; i++) {
  if (number % i === 0) {
    isPrime = false;
    break;
  }
}
if (isPrime) {
  console.log(j + " is a prime number.");
} else {
  console.log(j + " is NOT a prime number.");
}

// 15. Write a function that capitalizes the first letter of each word in a sentence.
function capitalizeWords(sentence) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > 0) {
      words[i] = word[0].toUpperCase() + word.slice(1);
    }
  }
  let capitalizedSentence = words.join(" ");
  return capitalizedSentence;
}
let input = "javascript is fun";
let r = capitalizeWords(input);
console.log(result);

// 16. Create a program that calculates the sum of all numbers from 1 to n.
let f = 5;
let sum = 0;
for (let i = 1; i <= f; i++) {
  sum = sum + i;
}
console.log("The sum from 1 to", f, "is", sum);

//17. Write code that finds the average of numbers in an array.
let digits = [10, 20, 30, 40, 50];
let add = 0;
for (let i = 0; i < digits.length; i++) {
  add = add + digits[i];
}
let average = add / digits.length;
console.log("Average is:", average);

//18. Create a function that removes duplicate values from an array.
function duplicateRemoval(items) {
  let cleanList = [];
  for (let i = 0; i < items.length; i++) {
    let value = items[i];
    if (!cleanList.includes(value)) {
      cleanList.push(value);
    }
  }
  return cleanList;
}
let fruits = ["apple", "banana", "apple", "orange", "banana"];
let uniqueFruits = duplicateRemoval(fruits);
console.log("Unique fruits:", uniqueFruits);

//19. Write a program that counts down from 10 to 1, then displays "Blast off!".
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("Blast off!");

//20. Create a function that determines if a string contains only numbers.
function isOnlyNumbers(text) {
  if (text.length === 0) {
    return false;
  }
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    let code = char.charCodeAt(0);
    if (code < 48 || code > 57) {
      return false;
    }
  }
  return true;
}
console.log(isOnlyNumbers("456")); // true
console.log(isOnlyNumbers("45a6")); // false
console.log(isOnlyNumbers("")); // false
console.log(isOnlyNumbers("012345")); // true

let age = 30;
const yearOfBirth = 1987;

console.log(firstName);
console.log(age);
console.log(yearOfBirth);
console.log(typeof yearOfBirth);

let course = {
  title: "HHLD",
  desciption: "projects",
  ratings: 6,
};
console.log(course[3]);
console.log(typeof course);
