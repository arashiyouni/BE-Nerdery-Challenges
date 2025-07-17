/* 
Challenge: "Find Majority Element";

The function findMajorityElement accepts an array of numbers and returns the majority element if it exists, otherwise returns null. The majority element is the element that appears more than n/2 (floor of that division) times in the array.

Requirements:
- The function should handle arrays of any length.
- The function should return the majority element if it exists, otherwise return null.
- The function should be efficient and handle large arrays.
- The function should not modify the original array.

Example:
findMajorityElement([1, 2, 3, 1, 1]); // Expected output: 1
findMajorityElement([1, 2, 3, 4]); // Expected output: null
findMajorityElement([1, 1, 2, 2, 2]); // Expected output: 2
findMajorityElement([1, 2, 2, 3, 3, 3]); // Expected output: null
findMajorityElement([1, 2, 3, 4, 5]); // Expected output: null


*/

const findMajorityElement = (arr) => {
  const long = arr.length;

  if (arr.length === 1) return arr[0];

  if (!arr.length) return null;

  for (let i = 0; i < long; i++) {
    let count = 0;
    for (let l = 0; l < long; l++) {
      if (arr[i] === arr[l]) {
        count++;
      }
    }
    if (count > long / 2) {
      return arr[i];
    }
  }
  return null;
};
// const r = findMajorityElement([1, 2, 3, 4]);
// console.log(r); //null

// const r2 = findMajorityElement([1]);
// console.log(r2); //1

const r3 = findMajorityElement([1, 2, 2, 2, 3]);
console.log(r3); //null

// const r4 = findMajorityElement([1, 2, 2, 3, 3, 3]);
// console.log(r4); //null

const r5 = findMajorityElement([1, 2, 3, 1, 1]);
console.log(r5); //1
module.exports = findMajorityElement;
