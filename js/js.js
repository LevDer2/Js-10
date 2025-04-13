//1 Створіть функцію processArray(array, callback), яка приймає масив та функцію-колбек. Викличте processArray з різними масивами та функціями-колбеками, щоб виконати наступні операції:
// Порахувати суму всіх елементів масиву.
// Знайти мінімальний елемент масиву.
// Знайти максимальний елемент масиву.
// Перепишіть колбек-функції на стрілки

const numbers = [1, 2, 3, 4, 5, 7, 9];

const processArray = function (array, callback) {
    return callback(array)
}

const samMasiv = function (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i += 1){
        sum += array[i]
    }
    return sum
}
console.log(processArray(numbers, samMasiv));

const minMasiv = function (array) {
    let min = array[0]
    for (let i = 0; i < array.length; i += 1){
        if (min > array[i]) {
            min = array[i]
        }
    }
    return min 
}

console.log(processArray(numbers, minMasiv));

const maxMasiv = function (array) {
    let max = array[0]
    for (let i = 0; i < array.length; i += 1){
        if (max < array[i]) {
          max = array[i]
      }
        
    }
    return max
}
console.log(processArray(numbers, maxMasiv));

const number = [1, 2, 3, 4, 5, 7, 9];

const processArra = (array, callback) => callback(array);
const getSum = function (arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i += 1){
        sum += arr[i]
    }
    return sum
}
const getMin = (arr) => Math.min(...arr);
const getMax = (arr) => Math.max(...arr);
console.log(processArray(number, getSum));
console.log(processArray(number, getMin));
console.log(processArray(number, getMax));

// 2. Створіть функцію operate(a, b, callback), яка приймає два числа та колбек для виконання операції над ними. Використайте її для виконання наступних операцій:
const operate = function (a, b, callback) {
    return callback(a,b)
}
const plusNumbers = function (a, b) {
    return a + b
}
const minesNumbers = function (a, b) {
    return a - b
}
const multiplicationNumbers = function (a, b) {
    return a * b
}
const divisionNumbers = function (a, b) {
    return a / b
}
console.log(operate(9, 3, plusNumbers));
console.log(operate(9, 3, minesNumbers));
console.log(operate(9, 3, multiplicationNumbers));
console.log(operate(9, 3, divisionNumbers));

const oparate = (a, b, callback) => callback(a, b);
console.log(oparate(9, 3, (a, b) => a + b));
console.log(oparate(9, 3, (a, b) => a - b)); 
console.log(oparate(9, 3, (a, b) => a * b)); 
console.log(oparate(9, 3, (a, b) => a / b));