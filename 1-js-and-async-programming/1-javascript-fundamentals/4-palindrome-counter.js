/*
Challenge: "Palindrome Counter"

A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).

Implement a function palindromeCounter that accepts two parameters:
- text: a string containing multiple words
- minLength: a number representing the minimum length for a word to be considered

The function should count how many words in the text are palindromes with a length greater than or equal to minLength.

Examples:

palindromeCounter("level radar mom", 3); // Expected output: 3

Explanation: "level", "radar", and "mom" are all palindromes with length >= 3

palindromeCounter("hello world", 3); // Expected output: 0

Explanation: No palindromes found

palindromeCounter("Madam level Civic noon", 5);
Expected output: 3
Explanation: "Madam", "level", and "Civic" are palindromes with length >= 5, "noon" has length < 5

Requirements:
- The function should ignore case when checking if a word is a palindrome (e.g., "Level" is a palindrome).
- The function should ignore all punctuation and spaces when identifying words.
- Words are defined as sequences of letters separated by spaces.
- Only count palindromes with length greater than or equal to the specified minLength.
- Return the count as a number.
*/
const isPolindrome = (word) => {
  const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedWord = cleanedWord.split("").reverse().join("");
  return cleanedWord === reversedWord;
};

const palindromeCounter = (text, minLength) => {
  const phrase = text.split(" ");
  let count = 0;

  phrase.forEach((words) => {
    if (isPolindrome(words) && words.length >= minLength) {
      count += 1;
    }
  });
  return count;
};
// const p = palindromeCounter("level radar mom", 3); //3
// console.log(p);
// const p2 = palindromeCounter("hello world", 3); //0
// console.log(p2);
// const p3 = palindromeCounter("abc def", 2); //0
// console.log(p3);
// const p4 = palindromeCounter("Madam level Civic noon", 5); //3
// console.log(p4);
module.exports = palindromeCounter;
