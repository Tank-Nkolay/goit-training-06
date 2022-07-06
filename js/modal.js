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

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[length - 1];
// // Change code above this line

// console.log(apartment.tags[apartment.tags.length - 1]);

// ================================================================

// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
//   // Change code above this line
// }
// =================================================
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   // Ключ
//   values.push(apartment[key]);

// }

// console.log(values);
// =================================================

// function countProps(object) {
//   // Change code below this line
//   let propCount = [];

//   const keys = Object.keys(object);

//   for (const key of keys) {
//     propCount.push(object[key]);
//   }

//   console.log(propCount);

//   return propCount.length;
//   // Change code above this line
// }

// countProps({}); // возвращает 0
// countProps({ name: "Mango", age: 2 }); // возвращает 2
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }); // возвращает 3

// =================================================

// function countTotalSalary(salaries) {
//   let totalSalary = 0;

//   const keys = Object.keys(salaries);

//   // console.log(keys);

//   for (const key of keys) {
//     totalSalary += salaries[key];

//     console.log(totalSalary);
//   }

//   return totalSalary;
// }

// countTotalSalary({}); // возвращает 0
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 }); // возвращает 330
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }); // возвращает 400

// =================================================

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// // const keys = Object.keys(colors);

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// =================================================

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   let val = null;
//   for (const product of products) {
//     if (product.name === productName) {
//       val = product.price;
//     }
//   }
//   return val;
// }

// getProductPrice("Radar"); // возвращает 1300.
// getProductPrice("Grip"); // возвращает 1200.
// getProductPrice("Scanner"); // возвращает 2700.
// getProductPrice("Droid"); // возвращает 400.
// getProductPrice("Engine"); // возвращает null.

// =================================================

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const val = [];
//   for (const product of products) {
//     if (product.hasOwnProperty([propName])) {
//       val.push(product[propName]);
//     }
//   }
//   console.log(val);
//   return val;
// }

// getAllPropValues("name"); // возвращает ["Radar", "Scanner", "Droid", "Grip"]
// getAllPropValues("quantity"); // возвращает [4, 3, 7, 9]
// getAllPropValues("price"); // возвращает [1300, 2700, 400, 1200]
// getAllPropValues("category"); // возвращает []

// =================================================

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let calc = 0;

//   for (const product of products) {
//     if (product.name === productName) {
//       calc = product.price * product.quantity;
//     }
//   }
//   console.log(calc);
//   return calc;
// }

// calculateTotalPrice("Blaster"); // возвращает 0
// calculateTotalPrice("Radar"); // возвращает 5200
// calculateTotalPrice("Droid"); // возвращает 2800
// calculateTotalPrice("Grip"); // возвращает 10800
// calculateTotalPrice("Scanner"); // возвращает 8100

// const forecast = {

//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },

//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {today: {low: lowToday, high; highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},
// tomorrow: {low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},} = forecast;

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";

//   let x;
//   x = { completed, category, priority, ...data };

//   console.log(x);

//   return x;
//   // Change code below this line

//   // Change code above this line
// }

// makeTask({}); // возвращает { category: "General", priority: "Normal", completed: false }
// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }); // возвращает { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
// makeTask({ category: "Finance", text: "Take interest" }); // возвращает { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
// makeTask({ priority: "Low", text: "Choose shampoo" }); // возвращает { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
// makeTask({ text: "Buy bread" }); // возвращает { category: "General", priority: "Normal", text: "Buy bread", completed: false }

// Change code below this line
function add(...args) {
  // Change code above this line
  let x;

  x = { ...args };
  console.log(x);

  // for (let i = 0; i < args.length; i += 1) {
  //   console.log(i);
  // }
  console.log(args);
  return x;
}

add(15, 27); // возвращает 42
add(12, 4, 11, 48); // возвращает 75
add(32, 6, 13, 19, 8); // возвращает 78
add(74, 11, 62, 46, 12, 36); // возвращает 241
