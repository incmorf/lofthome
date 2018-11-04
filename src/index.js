<<<<<<< HEAD
/* ДЗ 2 - работа с массивами и объеектами */
=======
/* ДЗ 1 - Функции */
>>>>>>> 4b4af092a9df3f453e68230e63d8ca94a2e46e00

/*
 Задание 1:

<<<<<<< HEAD
 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
    for(let i=0;i<array.length;i++){
        fn(array[i], i, array);
    }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    var newArray = [];
    for(let i=0;i<array.length;i++){
        newArray.push(fn(array[i], i, array));
    }
    return newArray;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array

 Кроме callback, методу можно передать «начальное значение» – аргумент initialValue. 
 Если он есть, то на первом вызове значение previousValue будет равно initialValue, 
 а если у reduce нет второго аргумента, то оно равно первому элементу массива, а перебор начинается со второго.
 */

function reduce(array, fn, initial) {
    var previousValue = initial || array[0];
    var i;
    (previousValue === array[0]) ? i=1 : i=0;

    for(;i<array.length;i++){
        previousValue = fn(previousValue, array[i], i, array);
    }
    return previousValue;

}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    var newArray = [];
    for(var key in obj){
        newArray.push(key.toUpperCase());
    }
    return newArray;
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from = 0, to) {
    var newArray = [];
 
    (Math.abs(from) > array.length && from < 0) ? from = 0:
    (from < 0) ? from += array.length:
	(from > array.length) ? from = array.length: 
    from;

    (Math.abs(to) > array.length && to < 0) ? to = 0:
    (to < 0) ? to += array.length:
	(to > array.length || to === undefined) ? to = array.length:
    to;
    for(let i = from; i<to; i++) {
        newArray.push(array[i]);
    }
    return newArray;
}
/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    

    let proxy = new Proxy(obj, {
   
      set(target, prop, value) {
        target[prop] = value*value;
        return true;
      }
    });
    return proxy;
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
=======
 1.1: Добавьте к функции параметр с любым именем
 1.2: Функция должна возвращать аргумент, переданный ей в качестве параметра

 Пример:
   returnFirstArgument(10) вернет 10
   returnFirstArgument('привет') вернет `привет`

 Другими словами: функция должна возвращать в неизменном виде то, что поступает ей на вход
 */
function returnFirstArgument(name) {
    return name;
}
/*
 Задание 2:
 
 2.1: Функция должна возвращать сумму переданных аргументов
 
 Пример:
   sumWithDefaults(10, 20) вернет 30
   sumWithDefaults(2, 4) вернет 6
 
 2.1 *: Значение по умолчанию для второго аргумента должно быть равно 100
 
 Пример:
   sumWithDefaults(10) вернет 110
 */
function sumWithDefaults(a, b = 100) {
    return a + b;
}
/*
 Задание 3:
 
 Функция должна принимать другую функцию и возвращать результат вызова этой функции
 
 Пример:
   returnFnResult(() => 'привет') вернет 'привет'
 */
function returnFnResult(fn) {
    return fn();
}
/*
 Задание 4:
 
 Функция должна принимать число и возвращать новую функцию (F)
 При вызове функции F, переданное ранее число должно быть увеличено на единицу и возвращено из F
 
 Пример:
   var f = returnCounter(10);
 
   console.log(f()); // выведет 11
   console.log(f()); // выведет 12
   console.log(f()); // выведет 13
 */
function returnCounter(number = 0) {
    return function () {
        return number = number + 1;
    };
}
/*
 Задание 5 *:
 
 Функция должна возвращать все переданные ей аргументы в виде массива
 Количество переданных аргументов заранее неизвестно
 
 Пример:
   returnArgumentsArray(1, 2, 3) вернет [1, 2, 3]
 */
function returnArgumentsArray() {
    var g = [];

    for (let i = 0; i < arguments.length; i++) {
        g.push(arguments[i]);
    }

    return g;
}
/*
 Задание 6 *:
 
 Функция должна принимать другую функцию (F) и некоторое количество дополнительных аргументов
 Функция должна привязать переданные аргументы к функции F и вернуть получившуюся функцию
 
 Пример:
   function sum(a, b) {
     return a + b;
   }
 
   var newSum = bindFunction(sum, 2, 4);
 
   console.log(newSum()) выведет 6
 */
function bindFunction(fn, ...rest) {
    var e = rest.slice();
    var g = fn.apply(null, e);

    return function () {
        return g;
    }
}

export {
    returnFirstArgument,
    sumWithDefaults,
    returnArgumentsArray,
    returnFnResult,
    returnCounter,
    bindFunction
}  
>>>>>>> 4b4af092a9df3f453e68230e63d8ca94a2e46e00
