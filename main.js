var fruits = ["apple", "banana", "cherry", "peach"];

// 1A: Write a function called outputFruitOld that consoles every fruit in a
// fruit array.

function outputFruitOld(array) {
    for (var i = 0; i < array.length; i++) {
        console.log("1A, List Fruits (for loop):", array[i]);
    }
}

outputFruitOld(fruits);

// 1B: Rewrite using forEach array method using callback/named function
fruits.forEach(listFruits);

function listFruits(fruit, index, array) {
    console.log("1B, List Fruits (named fxn):", fruit);
}

// using anonymous function

fruits
    .forEach(function (item) {
        console.log("1B, List Fruits (anonymous fxn):", item);
    })

// 2A: Write a function called backwardFruitsOld that reverses the letters in
// each word in the fruits array.

function backwardFruitsOld(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.push(array[i].split('').reverse().join(''));
    }
    return newArray;
}

console.log("2A, Backwards Fruit (for loop):", backwardFruitsOld(fruits));

// 2B: Rewrite using map array method using anonymous function

var secondNewArray = fruits.map(function (fruit) {
    return fruit
        .split('')
        .reverse()
        .join('');
});

console.log("2B, Backwards Fruit  (anonymous fxn):", secondNewArray);
console.log("2B, Original Array  (anonymous fxn):", fruits);

// unsing a callback/named function

function splitter(item) {
    return item
        .split('')
        .reverse()
        .join('');
}

console.log("2B, Backwards Fruit (named fxn):", fruits.map(splitter));

// 3A: Write a function called fiveLettersOnlyOld that only returns fruits that
// have 5 letters.

function fiveLettersOnlyOld(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i].length === 5) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log("3A, Five Letter Fruits (for loop):", fiveLettersOnlyOld(fruits));

// 3B: Rewrite using filter array method

var filteredFruits = fruits.filter(function (fruit) {
    if (fruit.length === 5) {
        return true;
    }
});

console.log("3B, Five Letter Fruits (anonymous fxn):", filteredFruits);
console.log("3B, Original Array (anonymous fxn):", fruits);

// 4A: Write a function called addzOld that returns the sum of an array.

var numbers = [77, 109, -8, 8008, 4];

function addzOld(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log("4A, Summation (for loop):", addzOld(numbers));

// 4B: Rewrite using reduce array method

var summation = numbers.reduce(function (prev, currentValue, index, array) {
    return prev + currentValue;
});

console.log("4B, Summation (anonymous fxn):", summation);
