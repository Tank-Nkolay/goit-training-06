// function findLongestWord(string) {
//   let splitWords = string.split(" ");
//   let c = 0;
//   let v;

//   for (let i = 0; i < splitWords.length; i += 1) {
//     c = splitWords[1].length;

//     if (splitWords[i].length > c) {
//       c = splitWords[i].length;

//       // console.log(i);
//       console.log(c);
//       return c;
//     }

//     // console.log(x);
//     return c;
//   }
// }
// findLongestWord("The quick brown fox jumped over the lazy dog"); // возвращает jumped
// // findLongestWord("Google do a roll"); // возвращает Google
// // findLongestWord("May the force be with you"); // возвращает force

// const findLongestWord = function (str) {
//   let arrStr = str.split(" ");
//   let wordLength = 0;
//   let longestWord;

//   for (let i = 0; i < arrStr.length; i += 1) {
//     wordLength = arrStr[1].length;

//     if (arrStr[i].length > wordLength) {
//       longestWord = arrStr[i];

//       return longestWord;
//     }
//   }
// };

// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//   let x;

//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }

//   console.log(numbers);
//   return numbers;
// }

// createArrayOfNumbers(1, 3); // возвращает [1, 2, 3]
// createArrayOfNumbers(14, 17); // возвращает [14, 15, 16, 17]
// createArrayOfNumbers(29, 34); // возвращает [29, 30, 31, 32, 33, 34]

// function filterArray(numbers, value) {
//   const arr = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       arr.push(numbers[i]);
//     }
//   }

//   console.log(arr);
//   return arr;
// }

// filterArray([1, 2, 3, 4, 5], 3); // возвращает [4, 5]
// filterArray([1, 2, 3, 4, 5], 4); // возвращает [5]
// filterArray([1, 2, 3, 4, 5], 5); // возвращает []
// filterArray([12, 24, 8, 41, 76], 38); // возвращает [41, 76]
// filterArray([12, 24, 8, 41, 76], 20); // возвращает [24, 41, 76]

// function getCommonElements(array1, array2) {
//   const newArr = [];

//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       newArr.push(array1[i]);
//     }
//   }
//   console.log(newArr);

//   return newArr;
// }

// getCommonElements([1, 2, 3], [2, 4]); // возвращает [2]
// getCommonElements([1, 2, 3], [2, 1, 17, 19]); // возвращает [1, 2]
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]); // возвращает [12, 27, 3]
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]); // возвращает [10, 30, 40]
// getCommonElements([1, 2, 3], [10, 20, 30]); // возвращает []

// function getEvenNumbers(start, end) {
//   const arr = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       arr.push(i);
//     }
//   }
//   console.log(arr);
//   return arr;
// }

// getEvenNumbers(2, 5); // возвращает [2, 4]
// getEvenNumbers(3, 11); // возвращает [4, 6, 8, 10]
// getEvenNumbers(6, 12); // возвращает [6, 8, 10, 12]
// getEvenNumbers(8, 8); // возвращает [8]
// getEvenNumbers(7, 7); // возвращает []

// function includes(array, value) {
//   let x;

//   for (const arr of array) {
//     if (value === arr) {
//       x = true;
//       console.log(x);
//       return x;
//     }
//   }
//   x = false;
//   console.log(x);
//   return x;
// }

// includes([1, 2, 3, 4, 5], 3); // возвращает true
// includes([1, 2, 3, 4, 5], 17); // возвращает false
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"); // возвращает true
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"); // возвращает false
// includes(["apple", "plum", "pear", "orange"], "plum"); // возвращает true
// includes(["apple", "plum", "pear", "orange"], "kiwi"); // возвращает false

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[length - 1];
// Change code above this line

console.log(apartment.tags[apartment.tags.length - 1]);
