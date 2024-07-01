//=========================================
// String in JavaScript :
//=========================================
//--> String in JavaScript are a fundamental data type that represents a sequence of character

// Note :
//String created with single or double quotes works the same.

// String Properties
// Length : Property that length of the string (number of character).

// const str = "Hello, World!";
// console.log(str.length);
// including space n all

//=========================================
// Escape Character :
//=========================================
//--> In JavaScript, the backslash "\" is used as an escape character. It allows you to include special characters in a string.

/*
Code      Result    Description
\'          '        Single quote
\"          "        Double quote
\\          \        Backslah
*/

//=========================================
// String Search Method :
//=========================================
//1.--> indexOf(): This method return the index(position) of the first occurrence of a string in a string, or it returns -1 if the string is not  found :
//Syntex :
// indexOf(searchString)
// indexOf(searchString, position)

//let text = "Dilip Dabhi";
// console.log(text.indexOf("D"));

//2--> lastIndexOf(): This method returns the index of the last occurrence of a specified text in a string:
//Syntax :
//lastIndexOf(searchString)
//lastIndexOf(searchString, position)

// let text = "Hello JavaScript, welcome to our world best JavaScript course";

// let index = text.lastIndexOf("JavaScript");
// let index1 = text.lastIndexOf("JavaScript",40);
// console.log(index1);

//3.--> search() : This is method searches a string for a string (or a regular expression) and returns the position of the match.
// Returns the number where the first match is found. Returns -1 if no match if found.

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.search(/javascript/i);
// console.log(result);

// Important Tips :
//--> The search() method cannot take a second start position argument.
//--> The indexOf() method cannot take powerful search value (regular expressions).
//--> They accept the same argument (parameters), and return the same value.

//=========================================
// match() Method :
//=========================================
//--> Return an array of the matched values or null if no match if found.

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.match("JavaScript");
// console.log(result);

// Todo tip : the JS converts the normal text into regular expression text.match(/JavaScript/); without the g flag
//let result = text.match(/JavaScript/g);
// let result = text.match(/Javacript/g);
// let result = text.match(/javascript/gi);
// console.log(result);

//=========================================
// matchAll() Method :
//=========================================
// --> Returns an iterator of all matches, providing detailed information about each match. Returns an empty iterator if no match is found.
// let text = "Hello JavaScript, welcome to our world best JavaScript course"
// let matchResult = text.matchAll("javascript")
// let matchResult1 = text.matchAll("JavaScript")
// console.log(matchResult);
// console.log(...matchResult1);
// for(let item of matchResult1){
    // console.log(item);
// }

//=========================================
// includes() method :
//=========================================
//--> Returns true if the String contains the specified value, and false otherwise.
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let includeResult = text.includes("Java")
// let includeResult = text.includes("JavaC")
// console.log(includeResult);

// Note : includes() is case sensitive. includes() is an ES6 feature


//=========================================
// startWith() method :
//=========================================
//--> this method returns trueif a String begins with a specified value. Otherwise it return false :
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.startsWith("welcome")
// let result = text.startsWith("Hello")

//Start position for the search can be specified 
// let result = text.startsWith("welcome",18)
// let result = text.startsWith("welcome",17)

// console.log(result);

//=========================================
// endsWith() Method :
//=========================================
//--> This method return true if a string end with a specified value. Otherwise it return false :

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.endsWith("welcome");
// let result = text.endsWith("course")
// console.log(result);


//=========================================
//=========================================
// Extracting String Parts :
//=========================================
//=========================================
// String.prototype.substr() it is deprecated

//1.--> slice() ectracts a part of a string and return the extracted part in a new string
// --> JavaScript counts positions from zero.
// --> slice() extracts up to but not including indexEnd.
//Syntex : slice(start, end)

// let text = "Hello JavaScript , welcome to our world best JavaScript course"
// let result = text.slice(6)
// let result = text.slice(6,15)
// console.log(result);

//2...: Substring : Extracts a portion of the string based on starting and ending indices.
//--> camelCase is used to separate words, substring is not to be intended as Sub String but as Subtring.
//Syntax :
// substring(indexStart) // index starts with 0
// substring(indexStart, indexEnd)

// substring() is similar to slice(). The difference is that start and values less that 0 are treated as 0 in substring().

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.substring(6);
// let result = text.substring(-6);
// let result = text.slice(-6);

// console.log(result);

//=========================================
// charAt() method :
//=========================================
//--> This is Method return the character at a specified index (position) in a String.

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.charAt(18);
// let result = text.charAt(11)
// console.log(result);
 
//=========================================
// charCodeAt() :
//=========================================
//--> This method return the code of the character at a specified index in a string. The method return a UTF-16 code (an integer between 0 and 65535).

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.charCodeAt(6);
// console.log(result);

//=========================================
// at() method : ES2022 introduced the string this method 
//=========================================
//--> This method returns the character at a specified index (position) in a string. The at() method returns the same as charAt().
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.at(-8)
// console.log(result);
//NOTE :
// The at() method is a new addition to JavaScript.
// It allows the use of negative indexes while charAt() do not.
// Now you can use myString at(-2) instead of charAt(myString : length-2)

//=========================================
// Replacing String Content :
//=========================================
// replace() : The replace method is used to replace a specified value with another value.
// const str = "Hello, World!";
//const newStr = str.replace("World","JavaScript");
// console.log(newStr); // Outputs : Hello, JavaScript!;

//=========================================
// Other Useful Method :
//=========================================

// toUpperCase and toLowerCase : Converts the string to uppercase or lowercase.
// const str = "JavaScript";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// trim : Removes whitespace from both ends of the string.
// const str = "   Hello, World!   ";
// console.log(str.length);
// console.log(str.trim().length);

// split : Splits the string into an array of subStrings based on a specified delimiter.

// const str = "apple,orange,banana";
// let strArr = str.split(",");
// console.log(strArr); 

//=========================================
// Interview Questions :
//=========================================

// 1 . Write a JavaScript function that prints the letters 'a' through 'z' in the console. You should use a loop to iterate through the letters and print each one on a new line.

// console.log("a".charCodeAt(0));
// console.log("z".charCodeAt(0));
// for(let char = 97 ; char<= 122 ; char++){
//     console.log(String.fromCharCode(char));
// }



// 2 . Write a function to count the number of vowels in a String.
// console.log(countVowels("Hello world"));













// 3 . Write a function to check if all the vowels presents in a String or not?
// const checkAllVowelPresentOrNot = (str) => {
//     const vowels = "aeiou";
//     str = str.toLowerCase(); // Convert the string to lowercase to handle case insensitivity
//     for (let char of vowels) {
//         if (!str.includes(char)) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(checkAllVowelPresentOrNot("Hello My Name is Dilip Dabhi. What is Your name")); 


// 4 . Write a JavaScript function to check if the given string is Pangram or not ?

// const pangramChecker = (str) => {
//     let inputArr = str.toLowerCase().split("");
//     const values = inputArr.filter((curEle) => 
//         curEle.charCodeAt() >= "a".charCodeAt() && curEle.charCodeAt() <= "z".charCodeAt()
//     );
//     return new Set(values).size===26;
// };

// console.log(pangramChecker("The quick brown fox jumps over the lazy dog"));
