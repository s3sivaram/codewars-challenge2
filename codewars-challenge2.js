// ------------solved by s3sivaram----on 21-Jul-21
// Write a function that accepts an array of 10 integers (between 0 and 9),
// that returns a string of those numbers in the form of a phone number.
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

function phoneFormat(array) {
  let length = array.length;

  let part1 = `${array[0]}${array[1]}${array[2]}`;

  let part2 = `${array[3]}${array[4]}${array[5]}`;
  let part3 = `${array[6]}${array[7]}${array[8]}${array[9]}`;

  let res = `(${part1}) ${part2}-${part3}`;
  return res;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let ans = phoneFormat(array);
console.log(ans);
