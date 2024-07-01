//============================================
// Math Object in JavaScript :
//=============================================

// Math : The Math namespace object contains static properties and methods for methematical constants and functions.
//--> Math works with the Number type. It doesn't work with BigInt.

// a.Constants :
//--> Math.PI : Respresents the mathematical constant PI .
// const piValue = Math.PI;
// console.log(piValue);

//======================================
// Basic Operations :
//=====================================


// Math.abs():
//--> The Math.abs() static method returns the absolute value of a number.
// or in simple, how far the number is from 0. Its will be always positive.

// console.log(Math.abs(5));
// console.log(Math.abs(-5));


// Math.round(x) :
// --> Rounds a number to the nearest integer.
// console.log(Math.round(5.3))
// console.log(Math.round(3.7));

// Math.ceil(x) :
// --> Returns the value of x rounded up to its nearest integer :
// console.log(Math.ceil(3.7));
// console.log(Math.ceil(5.2));

// Math.floor(x) :
// --> Returns the value of x rouned down to its nearest interger :
// console.log(Math.floor(3.7));
// console.log(Math.floor(3.2));

// Math.trunc(x) :
// --> Returns the integer part of x;
// console.log(Math.trunc(3.2));
// console.log(Math.trunc(3.7));

/* Math.turnc() and Math.sign() were added to JavaScript 2015 - ES6. */
// const truncValue1 = Math.trunc(3.7);
// console.log(truncValue1);
// const floorValue1 = Math.floor(3.7);
// console.log(floorValue1);
// const truncValue2 = Math.trunc(-3.7);
// console.log(truncValue2);
// const floorValue2 = Math.floor(-3.7);
// console.log(floorValue2);


// Notes :
// --> No matter how many chars are there after decimal, they all will always return only number before the decimal.
// round rounds to the nearest integer.
// floor always rounds down.
// ceil always rounds up. 


//==============================================
// Exponential and Logarithmic Function :
//==============================================

// Math.pow(x,y) :
//--> Returns the value of x to the poer of y.
// console.log(Math.pow(2,3));
// console.log(2 ** 3);

// Math.sqrt() :
//--> Returns the square root of x :
// let squareRoot = Math.sqrt(25);
// console.log(squareRoot);

// Math.log(x) :
//--> Returns the natural logarithm of x.
// let logResult = Math.log(1);
// let logResult = Math.log(2);
// console.log(logResult);


//============================================
// Interview Question :
//===========================================

// Generate Random number :
// --> Math.random() returns a random number between 0 (inclusive), and 1 (exclusive).

// let generateNumber = Math.random();
// console.log(generateNumber);