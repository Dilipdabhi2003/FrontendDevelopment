/*
============================================
If Statement
=============================================
*/
// If Else : The if...else statement execute a statement if aspecified condition is truthy. If the condition is falsy, another statement in the optional else clause will be executed.
// var age = 15;
// if(age<18){
//     console.log("You are Younger");
// }
// else{
//     console.log("You are Adult");
// }

// We can also use an else if clause to check additional condition :
// var mark=95;
// if(mark>=90){
//     console.log("A");
// }
// else if(mark<=90 && mark>=60){
//     console.log("B");
// }
// else{
//     console.log("C");
// }


// Task :
//--> If the person is 18 years or older, a citizen, and registered to vote , display a ,essage saying they are eligible to vote.
//--> If the person is younger than 18, not a citizen, or not registered to vote , display a ,essage saying they are not eligible to vote.
//--> If the person is older than 18, not a citizen,display a message saying they aer not eligible due to citizenship status.
//--> If the person is 18 or older, a citizen, but registered to vote, display a message saying they are not eligible due to registration status.

// let userAge = 22;
// let isCitizen = true;
// let isRegistered = true;

// if(userAge>=18){

//     if(isCitizen){

//         if(isRegistered){

//             console.log("You are eligible to vote");
//         }else{
//             console.log("You are not eligible due to registration status");
//         }
//     }else{
//         console.log("You are not eligible due to citizenship status");
//     }
// }else{
//     console.log("You are not eligible to vote");
// }

// Check Number is Even or Odd
// var num = "8";
// if(num % 2===0){
//     console.log("Number is Even");
// }else{
//     console.log("Number is Odd");
// }

// check number is positive, negative or zero
// var num = 15;
// if(num===0){
//     console.log("Number is zero");
// }else if(num > 0){
//     console.log("Number is Positive");
// }else{
//     console.log("Number is Negative");
// }

/*
============================================
Switch Statement
=============================================
*/
//---> The Switch statement is used to perform different actions based on different condition.

// var areaOfShapes = "circle";
// var a = 5;
// var b = 10;
// var result;
// switch (areaOfShapes) {
//     case "square":
//         result = a * a;
//         console.log(result);
//         break;
        
//     case "rectangle":
//         result = a * b;
//         console.log(result);
//         break;
//     case "circle":
//         var r =2;
//         result = 3.14 *(r*r);
//         console.log(result);
//         break;

//     default:
//         console.log("No Shape Matches");
//         break;
// }


/*
============================================
While Loop
=============================================
*/
//--> A while loop in JavaScript is a control structure that repeatedly executes a block of code as long as a specifiend codition remains true. The loop continues iterating while the condition is true, and it terminates when the condition becomes false.

// Simple while loop to count from 1 to 10
//console.log("Using While loops");
//  var num = 1;
//  while(num<=10){
//     console.log(num);
//     num++;
//  }

// let's create a table of 5
// var num = 5;
// var i=1;
// while(i<=10){
//     console.log(num*i);
//     i++;
// }

/*
============================================
Do While Loop
=============================================
*/
// --> a Do__While loop in JavaStript is similar to a while loop, but it guarantees that the loop body will be executed at least once before checking the loop condition. The loop continues to execute while the specified condition is true, and it terminates when the condition becomes false.

// Simple while loop to count from 1 to 10
// console.log("Using Do While loops");
// var num = 1; 
// do{
//  console.log(num);
//  num++;
// }while(num<=10);

// let's create a table of 5
// var num=5;
// var i=1;
// do{
//     console.log(num*i);
//     i++;
// }while(i<=10);

/*
============================================
For Loop
=============================================
*/
//--> A for loop in javaScript is a control flow statement that allows you to repeatedly execute a block of code a specified number of times. It's particularly useful when you know the exact number of iteration needed.

// Simple for loop to count from 1 to 10
// console.log("Using For Loop");
// for(var num = 1;num<=10;num++){
//     console.log(num);
//}

// let's create a table of 5
// var num=5;
// for(var i=1;i<=10;i++){
//     console.log(num*i);
// }


// Task1 : Validating User Input with a Do...While Loop(user need  to write a valid number)
// let userInput;
// let positiveNumber;
// do{
//     userInput = prompt("Enter any positive Number :");
//     positiveNumber = parseFloat(userInput);
// }while(isNaN(positiveNumber)|| positiveNumber < 0);
// console.log(`you entered a valid positive number : ${positiveNumber}`);

//Task2 : Write  a Program to ckeck number is Prime or Not

// var num = 3;
// var isPrime = true;

// for(var i=2;i<num;i++){
//     if(num%i===0){
//         isPrime = false;
//         break;
//     }
// }
// if(isPrime){
//     console.log("Number is Prime");
// }
// else{
//     console.log("Number is Not Prime");
// }

//task 3 : check year is leap year or not following condition:
// If a Year is Divisible by 4 and not divisible By 100, or
// If a Year is Divisible by 400
// then it is a leap Year. Otherwise, It is Not a Leap year.

// var year = 2020;
// if((year % 4===0 && year % 100 !== 0) || (year % 400 ===0)){
//     console.log(year, "it's a leap year");
// }else{
//     console.log(year, "it's not a leap year");
// }


// The code for (;;){} represents an infinite loop in JavaStript. This constuct is commonly used when you want a loop to run indefinitely or until a break statement is encountered within the loop. It's equivalent to while(true){}

