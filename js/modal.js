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

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line

  // Change code above this line
  return numbers;
}

createArrayOfNumbers(1, 3); // возвращает [1, 2, 3]
createArrayOfNumbers(14, 17); // возвращает [14, 15, 16, 17]
createArrayOfNumbers(29, 34); // возвращает [29, 30, 31, 32, 33, 34]
