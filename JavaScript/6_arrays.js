// ======================================
// Arrays in JavaScript :
//=======================================
// iterable : object where you can the for-of loop
// Array - like Object : any object with length property and indexes to access items.
// Arrays as Object : Arrays in JavaScript are a specific type of object that has numeric key (indices) and a length property. The indices are automatically maintained, and the length property is automatically updated when you add or remove elements from the array.
// typeof operator : The typeof operator in JavaScript return "object" for both arrays and regular objects.

/*JavaScript Array is a data stucture that allows you to store and organize multiple value within a single variable. It is a versatile and dynamic object. It can hold harious data types, including numbers, String , Object and even other arrays. Arrays in JavaScript in JavaScript are zero-indexed i.e. the first element is accessed with an index 0, the second element with an index of 1, and so forth. */

/* 
====================================
Creating Arrays :
====================================
*/

//Using Array constructor
// let fruits = new Array("apple","orange","banana");
// console.log(fruits);

// Using array literal
// let fruits = ["apple","orange","banana"];
// console.log(fruits);


// We can also create an ematy array

// let arr = [];
// console.log(arr);

/* 
====================================
Accessing Elements :
====================================
*/
//--> accessing Elements : Array elements are accessed using zero-based indices.
// let fruits =["apple","orange","banana"];
// console.log(fruits[2]);

/* 
====================================
Modifying Elements :
====================================
*/
//--> Modifying element : You can modify array element by assigning new values to specific indices.
// let fruits =["apple","orange","banana"];
// fruits[2]="mango";
// console.log(fruits);

/* 
==========================================
Array Traversal / Iterating Over Arrays :
==========================================
*/

//let fruits =["apple","orange","mango","grapes","banana"];


//1. for of loop , also known as iterable
//-->The for...of loop is used to iterate over the value of an iterable object, such as arrays, strings, or other iterable objects.
// for(let item of fruits){
//     console.log(item);
// }

//2. for in loop :
//-->The for...in loop is used to iterate over the properties (including indices) of an object.
// for(let item in fruits){
//     console.log(item);
// }

//3. foeEach Method :
//--> The array.forEach() method calls the provided function once for ench element of the array. The provided function may perform any kind of opertion on the elements os the given array.
// fruits.forEach((curElement, index, array)=>{
//     console.log(`value : ${curElement} & Index : ${index}`);
// });


//4. map function
//--> map() create a new array from calling a function for every array element. map() does not change the original array.

// fruits.map((curElement,index,arr)=>{
//     console.log(arr);
// });

/* 
===================================================
How to Insert, Add , Replace and Delete Element in Array
===================================================
*/
// let fruits =["apple","orange","mango","grapes","banana"];

//1. push() : Method that adda one or more element to the end of an array.
// fruits.push("guava");
// console.log(fruits);

//2. pop() : Method that removes the last element from array
// fruits.pop();
// console.log(fruits);

//3.unshift() : Method that adds one or more element to the beginning of an array
// fruits.unshift("gauva");
// console.log(fruits);

//4. shift() : Method that removes the first element from an array.
// fruits.shift();
// console.log(fruits);

/* 
===================================================
What if, We want to add or remove anywhere in an element - p2
===================================================
*/
//--> The splice() method of Array instances changes the contents of array by removing or replacing exidting elemrnt and/ or adding new element in place.
//syntax : splice(start, deleteCount, item1, item2,...)
// let fruits =["apple","orange","mango","grapes","banana"];

// fruits.splice(0,1,"watermenol","Papaya");
// console.log(fruits);

/* 
====================================
Searching in an Array :
====================================
*/

//For Search we have - indexOf, lastIndexOf & includes
// const num = [1,2,3,4,5,7,4,5,6,7,8,9,6];
//1.indexOf() method: it's returns the first index at which a  given element can be found in the array, or -1 if it is not present.
// console.log(num.indexOf(4,4));


//2.Includea() method : it's method check whether an array include a certain element, returning true or false.

// const result = num.includes(7);
// console.log(result);

//3. lastIndexOf method : it's method of array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.f
// const result = num.indexOf(6);
// console.log(result);

// const result1 =num.lastIndexOf(6);
// console.log(result1)

//TASK :
//1. Add Dec at the end of an array?
//2. What is the return value of splice method?
//3. Update march to March (update)?
//4. Delete June from an array ?

// const months = ["Jan", "march", "April", "June", "July"];
//1.
// months.splice(months.length,0,"Dec");
// console.log(months);
//2.--> return an empty array([]).
//3.
// const indexToUpdate = months.indexOf("march");
// months.splice(indexToUpdate,1,"March");
// console.log(months);
//4
// const indexToDelete = months.indexOf("June");
// months.splice(indexToDelete,1);
// console.log(months);


/* 
====================================
Filter in an Array :
====================================
*/
// Search + Filter
// const numbers =[1,2,3,4,5,9,7,8,9,3,7];

// 1. Find Method : the find method is used to find the first element in an array that satisfies a provided testing function. It return the first matching element or underfined if no element is found.
// const result = numbers.find((curElement)=>{
//     return curElement>6;
// });
// console.log(result);

// 2. findIndex Method : The findIndex() method of TypedArray instances return index of the first element in a typed array that satisfies the provied test function. If no elements satisfy the testing function, -1 is returned.
// const result = numbers.findIndex((curElement)=>{
//     return curElement>6;
// });
// console.log(result);


//3. filter method : The filter method create a new array with all element pass the test implement by the provided function.
// const result = numbers.filter((curElement)=>{
//     return curElement > 4;
// });
// console.log(result);

/* 
====================================
Most IMP Task :
====================================
*/
//1. le'ts say user want to delete value 6.
// let value = 6;
// const numbers = [1,2,3,4,5,6,7,8,9,6];
// let result = numbers.filter((curElement)=>{
//     return curElement!==value;
// });
// console.log(result);

//2. Given an Array of products where each product has a name and price, write a function that uses the filter method to return an array containing only the products with a price less than or equal to 500.
// const products =[
//     {name : "Laptop",price:1200},
//     {name : "Phone",price:800},
//     {name : "Tablet",price:300},
//     {name : "Smartwatch",price:150}
// ];
// const result = products.filter((curElement)=>{
//     return curElement.price<=500;
// });
// console.log(result);

//3. Filter unique value :
// const numbers = [1, 2, 3, 4, 5, 6, 7, 6, 8, 9];
// let uniqueValue = numbers.filter((curElement, index, arr) => {
//     return arr.indexOf(curElement) === index;
// });
// console.log(uniqueValue);

/* 
====================================
How to Sort and Compare an Array :
====================================
*/
//--> The sort method sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as Strings.

// const fruits = ["Banana","Apple","Orange","Mango"];
// fruits.sort();
// console.log(fruits);

// Compare Callback Function :
//Syntex :
// const sortedNumber = numbers.sort((a,b)=>a-b);
//if(a>b) return 1 => switch the order
// if(b>a) return -1 => keep the order

// const numbers = [1,2,3,4,5,6,7,4,8,9];




/* 
====================================
Very Important Array Methods :
====================================
*/

// Map(), Filter(), Reduce(),
//--> map() creates a new array from calling a function for every array element.
//-->map() does not execute the function for empty elements.
//--> map() does not change the original array.

// Reduce method :
//--> The reduce method in JavaScript is used to accumulate or reduce an array to a single value . It iterates over the element, updating an accumlator value with the result. The reduce method takes a callback function as its first argument and an optional initial value for the accumulator as the second argment.

const productPrice = [100,200,300,400,500];
const totalPrice = productPrice.reduce((accum,curElement)=>{
    return accum+curElement;
},0);
console.log(totalPrice);