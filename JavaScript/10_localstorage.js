//===========================================
//  "Lacal Storage"
//===========================================
//--> The localStorage object allows you to save key/value pairs in the browser.


// How to add the data from lacalStorage :
localStorage.setItem("jsCourseTest","addingData");

// How to get the data from lacalStorage :
localStorage.getItem("jsCourseTest");

// How to removethe data from lacalStorage :
localStorage.removeItem("jsCourseTest");

//* todo Lacal Storage can only store strings, so when you want to store a complex data structure like an array or an object, you need to convert it to a string using JSON.stringify :

// JSON.stringify :
//--> Converts a JavaScript object into a JSON string.
// --> Userful when you want to send data to a server or store it in a text file, as JSON is a common data interchange format.
// const data = {name : "Dilip", age : 20, city: "Bhavnagar"};
// const jsonString = JSON.stringfy(data);
// console.log(jsonString);
// Output : '{"name":"Dilip","age":20,"city":"Bhavnagar"}';


// JSON.parse :
//--> converts a JSON string into a JavaScript object.
//--> Useful when you receive JSON data from a server or read it from a file, and you want to work with it as a JavaScript object.

const jsonString = '{"name":"Dilip","age":20,"city":"Bhavnagar"}';
const parsedData = JSON.parse(jsonString);
console.log(parsedData);

// Output : {name : 'Vinod', age : 20, city : 'Bhavnagar'};
