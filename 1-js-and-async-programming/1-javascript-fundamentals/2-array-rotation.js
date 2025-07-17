/*
Challenge 2

"Array rotation"
Given an array of numbers and a positive integer n, write a function that rotates the array n positions clockwise.

Requirements:
- The function should handle arrays of any length.
- The array should be rotated in a clockwise direction.
- The rotation should wrap around, meaning the elements at the end of the array should move to the beginning.
- The function should handle cases where n is greater than the length of the array.
- The function should return the rotated array.

Example:
rotateArray([1, 2, 3, 4, 5], 2); // Expected output: [3, 4, 5, 1, 2]
rotateArray([1, 2, 3, 4, 5], 7); // Expected output: [3, 4, 5, 1, 2]


*/

const rotateArray = (arr, n) => {
  //ref (Modular Addition): https://www.geeksforgeeks.org/engineering-mathematics/modular-arithmetic/
  const nRotation = n;
  const len = arr.length;
  let newArr = [];

  const totalRotationPerElement = ((nRotation % len) + len) % len;
  const rotationA = arr.slice(totalRotationPerElement); //first part of clock rotate
  const rotationB = arr.slice(0, totalRotationPerElement); //second part of clock rotate

  // for (let i = 0; i < len; i++) {
  //(i - rotateBy + len) % len
  //   const mod = (( i- nRotation +len) + len) % len; //position where value arr[i] should be in newArr
  //   newArr[mod] = arr[i];
  // }
  return newArr.concat(rotationA, rotationB);
};
// const r = rotateArray([1, 2, 3, 4, 5], 7); //output: [3, 4, 5, 1, 2]
// console.log(r);
module.exports = rotateArray;
