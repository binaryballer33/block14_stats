// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

// Convert the array of strings into an array of numbers.
const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);
  numbers.push(number);
}

// Peform some calculations on the numbers.
window.onload = function () {
  const length = getLength(numbers);
  const sum = getSum(numbers);
  const mean = getMean(numbers);
  const min = getMin(numbers);
  const max = getMax(numbers);
  const range = getRange(numbers);
  const evens = getEvens(numbers);
  const odds = getOdds(numbers);
  
  console.log(numbers);
  console.log(`You have given ${length} numbers.`);
  console.log(`The sum of your numbers is ${sum}.`);
  console.log(`The mean of your numbers is ${mean}.`);
  console.log(`The smallest of your numbers is ${min}.`);
  console.log(`The largest of your numbers is ${max}.`);
  console.log(`The range of your numbers is ${range}.`);
  console.log(`The even numbers you gave are ${evens}.`);
  console.log(`The odd numbers you gave are ${odds}.`);

  const mathematicsDiv = document.getElementById("mathematics");
  mathematicsDiv.innerHTML = `
    <h1 class="stats">You have given ${length} numbers.</h1>
    <h1 class="stats">The sum of your numbers is ${sum}.</h1>
    <h1 class="stats">The mean of your numbers is ${mean}.</h1>
    <h1 class="stats">The smallest of your numbers is ${min}.</h1>
    <h1 class="stats">The largest of your numbers is ${max}.</h1>
    <h1 class="stats">The range of your numbers is ${range}.</h1>
    <h1 class="stats">The even numbers you gave are ${evens}.</h1>
    <h1 class="stats">The odd numbers you gave are ${odds}.</h1>
  `;
}

// === EDIT THE CODE BELOW ===
// Complete the functions below to make the program work!

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  // get the size of the array
  return numbers.length;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  // add up all the numbers
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    sum += num;
  }
  return sum;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  // get the mean of the numbers
  return getSum(numbers) / getLength(numbers);
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
  // get the smallest number in the array
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) min = num;
  }
  return min;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
    // get the biggest number in the array
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) max = numbers[i];
    }
    return max;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  // get the range of the numbers
  return getMax(numbers) - getMin(numbers);
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  // get the even numbers in the array
  const evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) evenNumbers.push(numbers[i]);
  }
  return evenNumbers;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  // get the odd numbers in the array
  const oddNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) oddNumbers.push(numbers[i]);
  }
  return oddNumbers;
}


