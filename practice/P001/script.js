// 1. Создайте функцию mergeArrays, которая принимает два
// массива и возвращает новый массив, содержащий все
// элементы из обоих массивов. Используйте spread
// оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1,
// 2, 3, 4, 5, 6]

// function mergeArrays(arr1, arr2) {
//   return [...arr1, ...arr2];
// }

// console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

// 2. Создайте функцию removeDuplicates, которая принимает
// любое количество аргументов и возвращает новый
// массив, содержащий только уникальные значения.
// Используйте rest оператор для сбора всех аргументов в
// массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый
// результат: [1, 2, 3, 4, 5]

// function removeDuplicates(...args) {
//   return args.filter((item, pos) => args.indexOf(item) == pos);
// }

// function removeDuplicates(...args) {
//     return [...new Set(args)];
//   }

// console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));

// Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа.

// function getEvenNumbers(arr) {
//   return arr.filter((num) => !(num % 2));
// }

// console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7]));

// Задача: Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел.

// function calculateAverage(arr) {
//   return arr.reduce((acc, value) => acc + value, 0) / arr.length;
// }

// console.log(calculateAverage([1, 2, 3]));

// Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной.

// function capitalizeFirstLetter(text) {
//   return text
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }

// console.log(
//   capitalizeFirstLetter(
//     "Преобразует все элементы массива в строки и объединяет их в одну большую строку. Элемент массива с типом undefined или null преобразуется в пустую строку."
//   )
// );

// Напишите функцию createCalculator, которая принимает начальное
// значение и возвращает объект с двумя методами: add и subtract.
// Метод add должен увеличивать значение на переданное число, а
// метод subtract должен уменьшать значение на переданное число.
// Значение должно быть доступно только через методы объекта, а не
// напрямую.

// function createCalculator(startValue) {
//   return {
//     add: (num) => {
//       startValue += num;
//     },
//     subtract: (num) => {
//       startValue -= num;
//     },
//     getValue: () => {
//       return startValue;
//     },
//   };
// }

// const calculator = createCalculator(10);
// calculator.add(5);
// calculator.subtract(5);
// console.log(calculator.getValue());

// const greeting = createGreeting('John');
// greeting(); // Ожидаемый результат: "Hello, John!"

// Задача: Напишите функцию createPasswordChecker, которая
// принимает допустимую длину пароля в качестве аргумента и
// возвращает функцию для проверки введенного пароля.
// Возвращаемая функция должна принимать пароль и возвращать
// true, если его длина соответствует допустимой, и false в противном
// случае.
// // Пример использования:
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); // Ожидаемый результат:
// false
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true

// Задание 4 (Лексический контекст 15 минут)
// 1. Напишите функцию createGreeting, которая принимает имя
// пользователя и возвращает функцию, которая будет выводить
// приветствие с использованием этого имени.
// // Пример использования:
// const greeting = createGreeting('John');
// greeting(); // Ожидаемый результат: "Hello, John!"

// function createGreeting(name) {
//   return () => {
//     console.log(`Hello, ${name}`);
//   };
// }

// const greeting = createGreeting("John");
// greeting(); // Ожидаемый результат: "Hello, John!"

// Задача: Напишите функцию createPasswordChecker, которая
// принимает допустимую длину пароля в качестве аргумента и
// возвращает функцию для проверки введенного пароля.
// Возвращаемая функция должна принимать пароль и возвращать
// true, если его длина соответствует допустимой, и false в противном
// случае.
// // Пример использования:

// function createPasswordChecker(passwordLength) {
//   return (password) => {
//     return password.length >= passwordLength;
//   };
// }

// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid("password")); // Ожидаемый результат: true
// console.log(isPasswordValid("secret")); // Ожидаемый результат: false

// Напишите рекурсивную функцию sumDigits, которая принимает
// положительное целое число в качестве аргумента и возвращает
// сумму его цифр.
// // Пример использования:
// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6
// + 7 + 8 + 9)

// function sumDigits(num) {
//   if (num < 10) return num;
//   return (num % 10) + sumDigits(Math.trunc(num / 10));
// }

// console.log(sumDigits(456789));
