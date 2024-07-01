// ======================================
// Function in JavaScript :
//=======================================
//--> In JavaScript, a function is a bolck of reusable code that perform a specific task.
//Function are used to organize code into modular abd manageable pieces, promte code reuse, and make programs are readable.

/* 3 student at a same time wants to find the sum of two numbers:*/
// 1st student: 
// var a=5,b=10;
// let sum1 = a+b;
// console.log(sum1);

// // 2nd student: 
// var a=15,b=10;
// let sum2 = a+b;
// console.log(sum2);

// // 3rd student: 
// var a=5,b=50;
// let sum3 = a+b;
// console.log(sum3);

// function sum(a,b) {
//     return a+b;
// }

// console.log(sum(5,5));

// console.log(sum(15,50));

// ======================================
// Function in Decalaration :
//======================================= 
//--> Declare a function useing the function keyword, followed by the function name, parameters (if any), and the function body.
//--> This step defines the function and specifies what code should be executed when the function is called.
// Example :
// function greet(){
//     console.log("Hello Guys, Welcome to Function Topic");
// }

// ======================================
// Function invocation (Calling a Function) :
//=======================================
//--> After declaring a function, you can invoke or call it by using its name followed by parentheses.
//--> If the function has parameters, provide values(arguments) for those parameter inside the parentheses.

// How to call a function?
//  greet()

// ======================================
// Function Parameter :
//=======================================
//--> A Function parameter is a variable that is lited as a part of a function declaration. It acts as a placeholder for a value that will be provided when the function is called. Parameter allow you to pass information into a function, making it more versatile and reusable.

// Task :
// function greet(name){
//     return `Hello ${name}, Welocme to Thapa Technical JS Course`;
// }
// console.log(greet("Dilip"));

// ======================================
// Function expressions :
//=======================================
//--> A function expression is a way to define a function as part of an expression. It can be either named or anonymous. If it's named, it becomes a named function expression
// Example :
// var result = function sum(a,b){
//     console.log(a+b);
// };
// result(10,15); 



// ======================================
// Anonymous Function :
//=======================================
//--> An anonymous function is a function without a name. It can be created using either a function expression or a function declaration without a specified name.
// Example : 
// var result = function (a,b){
//         console.log(a+b);
//     };
// result(10,15); 
    
// ======================================
// Return Statement :
//=======================================
//--> return statement iss used within a function to specify the value that the function should produce or provide back to the code that called it. The return statement stops the execution of a function and sends a value back to the caller

// ===============================================
// IIFE : immediately invoked function expression
//=================================================
//--> An IIFE, or Immediately Invoked Function Expression, is a javaScript function that is defined and executed immediately after its creation. It is way to create a self-contained block of code that doesn't interfere with the surrounding code and executes immediately.
// Syntex :
// (function(){
//     // code to be executed;
// })();

// Example:
// var result = (function (a,b){
//     console.log(a+b);
// })(5,10);


// ======================================
// Interview Task :
//=======================================

// Q.1 Calculator Function
//--> Write a JavaStript function calculator that takes two numbers and an operator as parameter and return the result of the operation. The function should support addition, subtraction, multiplication, and division.

// function calculator(a,b,operator){
//     let result;
//     switch(operator){
//         case "+":
//             return a+b;

//         case "-":
//             return a-b;

//         case "*":
//             return a*b;

//         case "/":
//             return a/b ;
            
//         default:
//             return "No Operator Found";    
//         }
// }
// console.log(calculator(151,252,"-"));



//Q.2 Reverse a String :
// --> Write a function to reverse a given String without using built-in reverse methods.

// const isReverse = (str) => {
//     let reverse ="";
//     for(let i=str.length-1;i>=0;i--){
//         reverse = reverse + str[i];
//     }
//     return reverse
// }
// console.log(isReverse("Dilip Dabhi"));



//Q.3 Palindrome Check :
//--> create a Function to determine if a given String is a palidrome(Read the same backword as forword)

// function isPalindrome  (str){
//     let reverse = "";
//     for(let i=str.length-1;i>=0;i--){
//         reverse = reverse + str[i];
//     }
//     if(str===reverse){
//         return `${reverse} is Palidrome String`;
//    }
// }
// console.log(isPalindrome("madam"))