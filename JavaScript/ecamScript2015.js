// ======================================
// Modern JavaScript - EcmaStript 2015
//=======================================

// ======================================
// Let and Const : ecmascript 2015
//=======================================
// Let Keyword : The let keyword is used to declare variables with block scope. Variables declared with let are mutable, meaning their values can be reassigned.
// Const Keyword : the const keyword is used to declare variable with block scope but once a value is assigned to a const variable, its cannot be reassigned. Const variables are immutable.

// ======================================
// Template Strings : ecamscript 2015
//=======================================
//--> In EcmaScript 6 (ES6), template strings, also known as template literals, provide a convenient and flexble way create string in JavaScript. Template strings are enclosed in backticks(``) rether than single or double quotes.

// String Interpolation : Template String support String interpolation, allowing you to embed expressions directly within the String. Interpolated Expression are enclosed in ${}

// Expression Evaluation : Template expression can include any valid JavaScript expression.

// ======================================
// Default Parameter :
//=======================================
//--> In ECMAScript 6 (ES6), default parameters were introduced, providing a more concise way to handle function parameter defaults. Default parameters allow you to specify default value for function parameter in the function declaration itself. If a parameter is not provided when the function is called, the default value is used.
//--> Default function parameters alloe named parameters to be initialized with default values if no value or underfined is passed.

// function sum(a,b=10){
//     return a+b;
// }
// console.log(sum(14+45));

// ======================================
// Fat Arrow Function :
//=======================================
//--> In ECMAScript 6 (ES6), arrow function, also known as fat arrow function, were introduced as a concise way to write anonymous functions.
//Example :
// const sum = function(a,b){
//     let result = `The Sum of ${a} & ${b} is ${a+b}`;
//     console.log(result);
// }
// sum(15,85);

//Syntax :
// const functionName=(para1,para2,...) =>{
// return result;
// };

// const sum=(a,b)=>{
//     let result = `The Sum of ${a} & ${b} is ${a+b}`;
//     console.log(result);
// };
// sum(78,96);

//=================================================
// TODO Notes :
//================================================

// 1. If the function body consists of a single expression, the braces {} and the return keyword can be omitted.
// const sum = (a,b) => `The sum of ${a} and ${b} is ${a+b}`;
// console.log(sum(45,87)); 

// 2. If There is only one parameter, the parentheses () around the parameter list can be omitted.
// const square = (a) => `The square of ${a} is ${a*a}`;
// console.log(square(5)); 

// 3. If there are no parameters, user an empty set of parentheses ().
// const greet =()=> console.log(`Please be Focused`);
// greet();