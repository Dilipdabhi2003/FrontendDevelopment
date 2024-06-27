/*
=====================================
EXPRESSIONS AND OPERATORS Section:
=====================================
*/

// types of Operators in JS
/* 1.Assigment operators :*/
//--> Assignment operators in programming are symbol used to  assign values to variables. They take the value on the rigth side of operator an assign it to the variable on the left side.
// Example : var myFavNum = 1307;


/* 2.Arithmetic operators */
//--> Arithmetic operators in programming perform basic mathematical operation on variables or values. They include addition, subtraction, multiplication, division, and modulus.

//Addition(+):
//Example :
// let x = 5;
// let y = 10;
// let sum = x + y;
// console.log(sum);

//Subtraction (-)
//Example :
// let x = 5;
// let y = 10;
// let sub = x - y;
// console.log(sub);

//Multiolication(*)
//Example :
// let x = 5;
// let y = 10;
// let mul = x * y;
// console.log(mul);

//Divisional(/):
// let x = 10;
// let y = 5;
// let div = x / y;
// console.log(div);

//Modulus(%):
// let x = 10;
// let y = 2;
// let mod = x % y;
// console.log(mod);

/*3.In Arithmeticwe increment and decrement */

/* 4.Comparison operators */
//--> Comparison operators in JavaScript are used to compare value and return a Boolean result (true or false)

//Equal(==) : Checks if two values are equal, performing type coercion if necessary.
// console.log(5==5);

// String Equal (===) : Checks if two values are equal without performing type corecion
// console.log(5==="5");

//Not Equal(!=) : Checks if two values are not equal, performing type corecion if necessary 
// console.log(5 != "5");

// Greater Than(>) : Check if the value on the left is greater than value on the right.
// console.log(10>2);

// Less Than(<) : Check if the value on the left is less than the value on the right.
// console.log(5<10);

// Greater Than or Equal To(>=): Checks if the value on the left is greater than or equal to the value on the right
// console.log(10>=10);

// Less Than or Equal To(=<): Checks if the value on the left is less than or equal  to the value on the right.
// console.log(50<=50);

// What is the diffrtence between == and === operators in JavaScript???
//--> The == operator is a comparison operator that compares two values and returns true if they are equal. The Strict === operator is also a comparsion operation, but it compares two values and returns true only if they are equal and of the same type.
//Example :
// let num1 = 1;
// let num2 = "1";
// if(num1===num2){
//     console.log("equal");
// }else{
//     console.log("not equal");
// }

/* 5.Logical operators */
//--> There are three main logical operators: && (Logical AND) , || (Logical OR) , ! (Logical NOT).

// Logical AND : Returns true if both operands are true,otherwise, it returns false.
//Example:
// var x = 5;
// var y = 10;
// console.log(x>0 && x<y);

// Logical OR : Returns true if at least one of the operands is true, otherwise, it returns false.
//Example :
// var x = 5;
// var y = 10;
// console.log(x>0 || x>y);

// Logical NOT : Returns true if the operand is false, and false if the operand is true.
//Example: 
// var isOpen = false;
// console.log(!isOpen);




/* 6.String operators */
//--> There are a few ways to concatenate string in JavaScript. The most common way is to use the + operator. For example, to concatenate the strings "Hello" and "World" , you would, use the following code :
// var str1 = "Hello";
// var str2 = "World";
// console.log(str1+str2);

/* 7.Conditional (ternary) Operator */
// SYNTAX : condition ? expressionIftrue : expressionIfFalse .

// console.log("5"-3);
// console.log(2<12<5);
// console.log("20"+10+10);