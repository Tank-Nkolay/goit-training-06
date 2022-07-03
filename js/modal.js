// const temps = [14, -4, 25, 8, 11];
// console.log(...temps);
// console.log(Math.max(...temps));

// function multiply(...args) {
//   console.log(args);
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значение первого аргумента
//   console.log(secondNumber); // Значение второго аргумента
//   console.log(otherArgs); // Массив остальных аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const accessType = book.isPublic ? "публичном" : "закрытом";
// const message = `Книга ${book.title} автора ${book.author} с рейтингом ${book.rating} находится в ${accessType} доступе.`;
// console.log(message);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// // Деструктуризируем
// const { title, author, isPublic, rating, coverImage } = book;
// console.log(coverImage); // undefined

// const accessType = isPublic ? "публичном" : "закрытом";
// const message = `Книга ${title} автора ${author} с рейтингом ${rating} находится в ${accessType} доступе.`;
// console.log(message);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
// };

// // Добавим картинку обложки если её нет в объекте книги
// const {
//   title,
//   coverImage = "https://via.placeholder.com/640/480",
//   author,
// } = book;

// console.log(title); // The Last Kingdom
// console.log(author); // Bernard Cornwell
// console.log(coverImage); // https://via.placeholder.com/640/480

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   // const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// ________________________________________________________________________

// Example 4 - Комплексные задачи
// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {
//     return {
//       id: this.transactions.length,
//       amount, // amount: amount,
//       type, // type: type,
//       date: Date.now(),
//     };
//   },

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {
//     this.balance += amount;

//     const newTranslation = this.createTransaction(amount, Transaction.DEPOSIT);

//     this.transactions.push(newTranslation);
//   },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.log('no money :(');
//     } else {
//       this.balance -= amount;

//       const newTranslation = this.createTransaction(
//         amount,
//         Transaction.WITHDRAW
//       );

//       this.transactions.push(newTranslation);
//     }
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     for (const item of this.transactions) {
//       if (item.id === id) {
//         return item;
//       }
//     }
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//     let sum = 0;

//     for (const item of this.transactions) {
//       if (item.type === type) {
//         sum += item.amount;
//       }
//     }

//     return sum;
//   },
// };

// console.log(account.balance); // 0

// account.deposit(100);
// account.deposit(50);
// console.log(account.balance); // 100

// account.withdraw(140);
// account.withdraw(50);
// console.log(account.balance); // 10

// console.log(account.transactions);

// console.log(account.getTransactionDetails(2));
// console.log(account.getTransactionDetails(20));

// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смешного человека",
//     author: "Федор Достоевский",
//     rating: 7.75,
//   },
// ];

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = number >= start && number <= end;
//   // Change this line

//   return isNotInRange;
// }

// isNumberNotInRange(10, 30, 17);
// isNumberNotInRange(10, 30, 5);
// isNumberNotInRange(20, 50, 24);
// isNumberNotInRange(20, 50, 76);

// console.log(!isNumberNotInRange(10, 30, 17));

// function getSubstring(string) {
//   // const substring = ${string}.slice(0, 4);

//   console.log(string.slice(0, 4));

//   return substring;
// }

// getSubstring("Hello world");
// // getSubstring("Hello world", 6);
// // getSubstring("Hello world", 8);
// // getSubstring("Hello world", 11);
// // getSubstring("Hello world", 0);

// console.log(substring);

// ____________________________________________________________

// const productName = "Repair droid";
// console.log(productName.slice(0, 4)); // "Repa"
// console.log(productName.slice(3, 9)); // "air dr"
// console.log(productName.slice(0, productName.length)); // "Repair droid"
// console.log(productName.slice(7, productName.length)); // "droid"

// ____________________________________________________________

// function getSubstring(string, length) {
//   const substring = string.slice(0, length);

//   return substring;
// }

// getSubstring("Hello world", 3);
// getSubstring("Hello world", 6);
// getSubstring("Hello world", 8);
// getSubstring("Hello world", 11);
// getSubstring("Hello world", 0);

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length > maxLength) {
//     const x = message.slice(0, maxLength);
//     result = `${x}...`;
//   } else {
//     result = message;
//   }

//   console.log(result);

//   /// Change code above this line
//   return result;
// }

// formatMessage("Curabitur ligula sapien", 16);
// formatMessage("Curabitur ligula sapien", 23);
// formatMessage("Vestibulum facilisis purus nec", 20);
// formatMessage("Vestibulum facilisis purus nec", 30);
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15);
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 41);

// function checkForName(fullName, name) {
//   const result = fullName.includes(name);

//   console.log(result);

//   return result;
// }

// checkForName("Egor Kolbasov", "Egor");
// checkForName("Egor Kolbasov", "egor");
// checkForName("Egor Kolbasov", "egOr");
// checkForName("Egor Kolbasov", "Zhenya");
// checkForName("Vadim Nekrasov", "Vadim");
// checkForName("Vadim Nekrasov", "vadim");
// checkForName("Vadim Nekrasov", "Dima");

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// console.log(firstElement);

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line

// // const lastElementIndex = ;

// const lastElement = fruits[fruits.length - 1];

// console.log(lastElement);

// function getExtremeElements(array) {
//   const getFirstLastElement = [array[0], array[array.length - 1]];
//   console.log(getFirstLastElement);
//   return getFirstLastElement;
// }

// getExtremeElements([1, 2, 3, 4, 5]); // [1, 5]
// getExtremeElements(["Earth", "Mars", "Venus"]); // ["Earth", "Venus"]
// getExtremeElements(["apple", "peach", "pear", "banana"]); // ["apple", "banana"]

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line

//   let splitArray;
//   let getCostWork;

//   splitArray = message.split(" ");

//   getCostWork = splitArray.length * pricePerWord;

//   console.log(getCostWork);

//   return getCostWork;

//   // Change code above this line
// }

// calculateEngravingPrice("JavaScript is in my blood", 10); // 50
// calculateEngravingPrice("JavaScript is in my blood", 20); // 100
// calculateEngravingPrice("Web-development is creative work", 40); // 160
// calculateEngravingPrice("Web-development is creative work", 20); // 80

// function slugify(title) {
//   // Change code below this line

//   let getLowerCase;
//   let getJoin;
//   let slug;

//   getLowerCase = title.toLowerCase();
//   getJoin = getLowerCase.split(" ");

//   slug = getJoin.join("-");

//   console.log(slug);

//   return slug;

//   // Change code above this line
// }

// slugify("Arrays for begginers");
// slugify("English for developer");
