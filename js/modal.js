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
// function add(...args) {
//   // Change code above this line
//   let x;

//   x = { ...args };
//   console.log(x);

//   // for (let i = 0; i < args.length; i += 1) {
//   //   console.log(i);
//   // }
//   console.log(args);
//   return x;
// }

// add(15, 27); // возвращает 42
// add(12, 4, 11, 48); // возвращает 75
// add(32, 6, 13, 19, 8); // возвращает 78
// add(74, 11, 62, 46, 12, 36); // возвращает 241

// Change code below this line
// function addOverNum(firstNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstNumber) {
//       total += arg;
//     }
//   }
//   console.log(total);
//   return total;
//   // Change code above this line
// }

// addOverNum(50, 15, 27); // возвращает 0
// addOverNum(10, 12, 4, 11, 48, 10, 8); // возвращает 71
// addOverNum(15, 32, 6, 13, 19, 8); // возвращает 51
// addOverNum(20, 74, 11, 62, 46, 12, 36); // возвращает 218

// ==========================================================================

// // Change code below this line
// function findMatches(args, ...arr) {
//   const matches = [];

//   for (const ar of arr) {
//     if (args.includes(ar)) {
//       matches.push(ar);
//     }
//   }

//   console.log(matches);
//   return matches;
// }

// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7); // возвращает [1, 2]
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2); // возвращает [17, 89, 2]
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41); // возвращает [24, 9, 41]
// findMatches([63, 11, 8, 29], 4, 7, 16); // возвращает []

// ==========================================================================

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
//   },
// };

// bookShelf.updateBook("Haze", "Dungeon chronicles"); // значение свойства books это массив ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

// bookShelf.updateBook("The last kingdom", "Dune"); // значение свойства books это массив ["Dune", "Haze", "The guardian of dreams"]

// console.log(bookShelf.books);

// ==========================================================================

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },
// };

// // atTheOldToad.addPotion("Invisibility"); // в свойстве potions будет массив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]

// // console.log(atTheOldToad.potions);

// // atTheOldToad.addPotion("Power potion"); // в свойстве potions будет массив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility", "Power potion"]

// // console.log(atTheOldToad.potions);

// // ==========================================================================

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (potionName === this.potions[i].name) {
//         this.potions.splice(i, 1);
//       }
//     }
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (oldName === this.potions[i].name) {
//         this.potions[i].name = newName;
//         return;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },

//   // Change code above this line
// };

// atTheOldToad.getPotions(); // для исходного объекта возвращает [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]

// atTheOldToad.addPotion({ name: "Power potion", price: 270 }); // в массиве potions последним элементом будет этот объект

// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }); // массив potions не изменяется

// atTheOldToad.addPotion({ name: "Stone skin", price: 240 }); //, массив potions не изменяется

// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }); // возвращает строку "Error! Potion Dragon breath is already in your inventory!"

// atTheOldToad.removePotion("Dragon breath"); // в свойстве potions будет массив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]

// atTheOldToad.removePotion("Speed potion"); // в свойстве potions будет массив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]

// atTheOldToad.updatePotionName("Dragon breath", "Polymorth"); // в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]

// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"); // в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   callback(pizzaName);
//   return;
// }

// console.log(makeMessage("Royal Grand", makePizza)); // возвращает строку "Pizza Royal Grand is being prepared, please wait..."
// console.log(makeMessage("Ultracheese", deliverPizza)); // возвращает строку "Delivering Ultracheese pizza."

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       onSuccess(pizzaName);
//       return onSuccess(pizzaName);
//     } else {
//       const error = `There is no pizza with a name ${pizzaName} in the assortment.`;
//       onError(error);
//       return onError(error);
//     }
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// // });

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   // calculateTotalPrice.forEach(function (number, index) {
//   //   console.log(`Индекс ${index}, значение ${number}`);
//   // });
//   // Change code above this line
//   // return totalPrice;
// }

// // console.log(calculateTotalPrice[orderedItems]);

// calculateTotalPrice([12, 85, 37, 4]); // возвращает 138
// calculateTotalPrice([164, 48, 291]); // возвращает 503
// calculateTotalPrice([412, 371, 94, 63, 176]); // возвращает 1116

// console.log(calculateTotalPrice(orderedItems));

// -----------------------------------------------------------------------------

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   // Change code below this line

//   numbers.forEach(function (number, index) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   console.log(filteredNumbers);

//   // Change code above this line
//   return filteredNumbers;
// }

// filterArray([1, 2, 3, 4, 5], 3); // возвращает [4, 5]
// filterArray([1, 2, 3, 4, 5], 4); // возвращает [5]
// filterArray([1, 2, 3, 4, 5], 5); // возвращает []
// filterArray([12, 24, 8, 41, 76], 38); // возвращает [41, 76]
// filterArray([12, 24, 8, 41, 76], 20); // возвращает [24, 41, 76]

// -----------------------------------------------------------------------------

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach(function (number, index) {
//     if (secondArray.includes(number)) {
//       commonElements.push(number);
//     }
//   });

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

//   console.log(commonElements);

//   return commonElements;
//   // Change code above this line
// }

// getCommonElements([1, 2, 3], [2, 4]); // возвращает [2]
// getCommonElements([1, 2, 3], [2, 1, 17, 19]); // возвращает [1, 2]
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]); // возвращает [12, 27, 3]
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]); // возвращает [10, 30, 40]
// getCommonElements([1, 2, 3], [10, 20, 30]); // возвращает []

// -----------------------------------------------------------------------------

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// };

// numbers.forEach(logMessage);

// -----------------------------------------------------------------------------

// function changeEven(numbers, value) {
//   // Change code below this line

//   const newArray = [];

//   numbers.forEach((number) => {
//     if (number % 2 === 0) {
//       newArray.push(number + value);
//     }
//     if (number % 2 !== 0) {
//       newArray.push(number);
//     }
//   });

//   console.log(newArray);

//   return newArray;

//   // Change code above this line
// }

// changeEven([1, 2, 3, 4, 5], 10); // возвращает новый массив [1, 12, 3, 14, 5]
// changeEven([2, 8, 3, 7, 4, 6], 10); // возвращает новый массив [12, 18, 3, 7, 14, 16]
// changeEven([17, 24, 68, 31, 42], 100); // возвращает новый массив [17, 124, 168, 31, 142]
// changeEven([44, 13, 81, 92, 36, 54], 100); // возвращает новый массив [144, 13, 81, 192, 136, 154]

// -----------------------------------------------------------------------------

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map((planet) => planet.length);

// console.log(planetsLengths);

// -----------------------------------------------------------------------------

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// const getUserNames = (users) => {
//   users.map((user) => user.name);
// };

// // const getUserNames = users.map((user) => user.name);

// console.log(getUserNames);

// -----------------------------------------------------------------------------

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const bigValues = numbers.filter((number) => number % 2 === 0);
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);

// console.log(bigValues);
// console.log(oddNumbers);

// Значение переменной evenNumbers это массив [24, 82, 36, 18, 52]
// Значение переменной oddNumbers это массив [17, 61, 47, 73]

// -----------------------------------------------------------------------------

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line

// const allGenres = books.flatMap((book) => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genr, index, array) => array.indexOf(genr) === index
// );

// console.log(allGenres);
// console.log(uniqueGenres);

// Значение переменной uniqueGenres это массив ["adventure", "history", "fiction", "mysticism", "horror"]
// Для вычисления значения переменной allGenders использован метод flatMap()
// Для вычисления значения переменной uniqueGenres использован метод filter()

// -----------------------------------------------------------------------------

// // Change code below this line
// const getUsersWithEyeColor = (users, color) => {

//   users.filter(
//      if (color === users.eyeColor) {
//      return users.name;
//      }

//   )
//   return users;

//  };
//  // Change code above this line

// -----------------------------------------------------------------------------

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//   return acc + player.name.length;
// }, 0);

// console.log(totalAveragePlaytimePerGame);

// -----------------------------------------------------------------------------

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books

//   .filter((element) => element.rating > MIN_BOOK_RATING)
//   .sort((a, b) => a.author.localeCompare(b.author))
//   .map((book) => book.author);

// console.log(names);

// -----------------------------------------------------------------------------

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: [
//       "Jacklyn Lucas",
//       "Linda Chapman",
//       "Adrian Cross",
//       "Solomon Fokes",
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const getSortedFriends = (users) =>
//   users
//     .flatMap((user) => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index)
//     .sort((a, b) => a.localeCompare(b));

// console.log(getSortedFriends(users));

// // -----------------------------------------------------------------------------

// // const listWithId = document.querySelector("#menu");
// // listWithId.style.textTransform = "uppercase";
// // listWithId.style.fontSize = "24px";
// // console.log(listWithId);

// // const listWithClass = document.querySelector(".menu");
// // console.log(listWithClass);

// // const menuItemsByTagName = document.querySelectorAll("li");
// // console.log(menuItemsByTagName);

// // const menuItemsByClass = document.querySelectorAll(".menu-item");
// // console.log(menuItemsByClass);

// // const firstMenuItem = document.querySelector(".menu-item");
// // firstMenuItem.style.color = "tomato";
// // console.log(firstMenuItem);

// // -----------------------------------------------------------------------------

// import todoItemTemplate from "./todoItemTemplate.js";
// import mockData from "./mockData.js";

// const items = mockData;

// const refs = {
//   todoList: document.querySelector(".todo-list"),
// };

// const render = () => {
//   const list = items.map(todoItemTemplate).join("");

//   refs.todoList.innerHTML = "";
//   refs.todoList.insertAdjacentHTML("beforeend", list);
// };

// const handleAddItem = () => {
//   const newTodo = {
//     id: uuid.v4(),
//     text: "dfgsdg stset wetwetwe tw",
//     isDone: false,
//   };

//   items.push(newTodo);
//   render();
// };

// const handleRemoveItem = () => {
//   items.shift();
//   render();
// };

// render();

// setTimeout(handleAddItem, 2000);
// setTimeout(handleRemoveItem, 4000);

// -----------------------------------------------------------------------------

// render();

// setTimeout(handleAddItem, 2000);
// setTimeout(handleRemoveItem, 4000);

// // const menuItemsByTagName = document.querySelectorAll("li");
// // console.log(menuItemsByTagName);

// // const menuItemsByClass = document.querySelectorAll(".menu-item");
// // console.log(menuItemsByClass);

// // const firstMenuItem = document.querySelector(".menu-item");
// // firstMenuItem.style.color = "tomato";
// // console.log(firstMenuItem);
