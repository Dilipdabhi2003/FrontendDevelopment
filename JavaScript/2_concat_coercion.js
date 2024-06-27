// Data Types Section - part 2

// Concatenation in JavaScript:
//--> In JavaScript, the + sign is not only used for arithmetic addition but also for String Concatenation. When the + operator is used with String, it concatenates the strings together.
//--> It's important to note that  if any operand of the + operator is a string, JavaScript will treat the other operands as Strings as well, resulting in string concatenation. If both operands are number, the + operator perform numeric addition.

//  const str= "Hello"+"World";
//  console.log(str);

// Type conrecion is the automatic conversion of "values" from one data type to another.
//--> It is a fundamental part of JavaScript and can be used to make code more reaadable and efficient.
//--> There are two types of coercion in JavaScript : implicit and explicit. Implicit coercion happens automatically, while explicit coercion is done manually by the programmer.
//--> It's worth nothing that type coercion can lead to unepected results, so it's essential to be awarw of how JavaScript handle these situation.

//=====================================
// Tricky Interview Questions :
//======================================
// console.log(10+"20");
// console.log(9-"5");
// console.log("Java"+"Script");
// console.log(" "+" ");
// console.log(" "+0);
// console.log("vinod"-"thapa");
// console.log(true+true);
// console.log(true+false);
// console.log(false+true);
// console.log(false-true);