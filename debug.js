/**
 * generateIntegersArray(firstNumber, lastNumber):
 * - receives two numbers
 * - returns an array with the integers between the two numbers
 *
 * e.g.
 * generateIntegersArray(2, 5) -> [2, 3, 4, 5]
 * generateIntegersArray(4, 9) -> [4, 5, 6, 7, 8, 9]
 *
 */
function generateIntegersArray(firstNumber, lastNumber) {
  const integersArray = [];
  while (firstNumber <= lastNumber) {
    integersArray.push(firstNumber);
    firstNumber++;
  }
  return integersArray;
}

// console.log(generateIntegersArray(3, 7));
// console.log(generateIntegersArray(2, 5));
// console.log(generateIntegersArray(4, 9));

/**
 * noZeroes(numberString):
 * - receives a number as a string
 * - removes any zeroes at the beginning and the end of the number string
 * - returns the resulting number string without zeroes at the beginning or the end
 *
 * e.g.
 * noZeroes("0011000") -> "11"
 * noZeroes("0130401431400") -> "1304014314"
 *
 */
function noZeroes(numberString) {
  let beginIndex = 0;
  let endIndex = numberString.length - 1;

  while (numberString.charAt(beginIndex) === "0") beginIndex += 1;
  while (numberString.charAt(endIndex) === "0") endIndex -= 1;

  return numberString.slice(beginIndex, endIndex + 1);
}

console.log(noZeroes("001100"));

module.exports = {
  generateIntegersArray,
  noZeroes,
};
