/*
Challenge 1

"Time difference calculator"

The function timeDifference accepts two positive numbers representing time in seconds. You should modify the function to return the difference between the two times in a human-readable format HH:MM:SS.

Requirements:
- The function should accept two positive numbers representing time in seconds.
- The function should return the absolute difference between the two times.
- The result should be formatted as HH:MM:SS.

Example:

timeDifference(7200, 3400); // Expected output: "01:03:20"

*/

const timeDifference = (a, b) => {
  const secondMax = Math.max(a, b);
  const secondMin = Math.min(a, b);

  const diffInSecond = secondMin - secondMax;

  const timeSecond = 3600;
  const timeMinutes = 60;

  const hoursTime = Math.ceil(diffInSecond / timeSecond);
  const minutesTime = Math.ceil(diffInSecond / timeMinutes) % 60;
  const secondTime = Math.ceil(diffInSecond % 60);

  console.log(hoursTime, minutesTime, secondTime);

  return `${Math.abs(hoursTime) <= 9 ? `0${Math.abs(hoursTime)}` : Math.abs(hoursTime)}:${Math.abs(minutesTime) <= 9 ? `0${Math.abs(minutesTime)}` : Math.abs(minutesTime)}:${Math.abs(secondTime) <= 9 ? `0${Math.abs(secondTime)}` : Math.abs(secondTime)}`;
};

module.exports = timeDifference;
