"use strict";
// const totalExp = 900;
// const payment = 100;
// let discount = 0;

// if (totalExp >= 100 && totalExp < 1000) {
//   discount = 0.02;
//   console.log("Бронзовый партнёр, скидка 2%");
// } else if (totalExp >= 1000 && totalExp < 5000) {
//   discount = 0.05;
//   console.log("Серебряный партнёр, скидка 5%");
// } else if (totalExp >= 5000) {
//   discount = 0.1;
//   console.log("Золотой партнёр, скидка 10%");
// } else {
//   console.log("У вас ещё нет партнёрской скидки");
// }

// const finalAmount = payment - payment * discount;

// console.log(finalAmount);
// console.log(`Оформляем заказ со скидкой ${discount * 100}%`);
// console.log(`К оплате ${finalAmount} кредитов`);
// // alert(`Оформляем заказ со скидкой ${discount}%`);

// Task 1 --------------------------
// const name = "«Генератор защитного поля»";
// let price = 1000;
// const firstMessage = `Выбран ${name}, цена за штуку ${price} кредитов`;
// price = 2000;
// const secondMessage = `Выбран ${name}, цена за штуку ${price} кредитов`;

// console.log(firstMessage);

// console.log(secondMessage);

// Task 3 --------------------------
// const userPassword = 'jqueryismyjam';
// const ADMIN_PASSWORD = 'jqueryismyjam';
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
// const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
// let message;

// if (userPassword === ADMIN_PASSWORD) {
// message = ACCESS_IS_ALLOWED;
// }  else if (userPassword === null) {
// message = CANCELED_BY_USER;
// } else {
// message = ACCESS_DENIED;
// }

// console.log(message);

//Task 4 -----------------------------
// const orderPieces = 4;

// const credits = 23580;
// const pricePerDroid = 3000;
// const CANCELED_BY_USER = "Отменено пользователем!";
// const ACCESS_DENIED = "Недостаточно средств на счету!";

// let totalPrice;
// let balanceCredit;
// let message;

// totalPrice = orderPieces * pricePerDroid;
// balanceCredit = credits - totalPrice;
// if (orderPieces === null) {
//   message = CANCELED_BY_USER;
// } else if (totalPrice > credits) {
//   message = ACCESS_DENIED;
// } else {
//   message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
// }
// console.log(message);

// Task 5 ----------------------------
// const countryName = "КитаЙ";
// const CANCELED_BY_USER = "Отменено пользователем!";
// const NO_DELIVERY = "В выбранную страну доставка недоступна.";
// const CHINA = "Китай";
// const AUSTRALIA = "Австралия";
// const INDIA = "Индия";
// const JAMAICA = "Ямайка";
// let message;
// let price = 0;
// let country;
// if (countryName === null) {
//   message = CANCELED_BY_USER;
// } else {
//   country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();
//   switch (country) {
//     case CHINA:
//       price = 100;
//       break;
//     case AUSTRALIA:
//       price = 170;
//       break;
//     case INDIA:
//       price = 80;
//       break;
//     case JAMAICA:
//       price = 120;
//       break;
//     default:
//       message = NO_DELIVERY;
//   }
// }
// if (price > 0) {
//   message = `Доставка в ${country} будет стоить ${price} кредитов`;
// }
// console.log(message);

// - - - - - - - -

// let total = 0;

// while (true) {
//   let input = prompt("Введите чмсло");
//   if (input === null) {
//     break;
//   }
//   input = Number(input);
//   total += input;
// }
// console.log(`Общая сумма: ${total}`);
// --------------------
// const numberInputRef = document.querySelector('input[name="number"]');
// const powerInputRef = document.querySelector('input[name="power"]');
// const buttonRef = document.querySelector("button");
// buttonRef.addEventListener("click", function () {
//   console.log("numberInputRef.value: ", numberInputRef.value);
//   console.log("powerInputRef.value: ", powerInputRef.value);

//   const number = Number(numberInputRef.value);
//   const power = Number(powerInputRef.value);

//   const result = Math.pow(number, power);
//   //   console.log(result);
//   alert(result);
// });
// ------------------------
const names = ["ANdrey", "Tanya", "Inna", "Anna"];

let longestWord = "";
for (const name of names) {
  if (name.length > longestWord.length) {
    longestWord = name;
  }
}
console.log(longestWord);
//-----------------------------
