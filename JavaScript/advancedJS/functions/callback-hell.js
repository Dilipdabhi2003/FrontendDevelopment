//* ================================
//*  Callback hell
//* ================================

//? Callback hell, also known as the Pyramid of Doom, refers to a situation in asynchronous JavaScript programming where multiple nested callbacks are used to handle asynchronous operations. This often results in code that is difficult to read, understand, and maintain due to its deeply nested structure.

const getStudentData = () => {
  setTimeout(() => {
    console.log("Hi, My name is Dilip");
    setTimeout(() => {
      console.log("Hi, My lastName is Dabhi");
      setTimeout(() => {
        console.log("Hi, Nickname is MAHADEV");
        setTimeout(() => {
          console.log("Hi, I like to code ");
          setTimeout(() => {
            console.log("Hi, I live in Ahmedabad");
            setTimeout(() => {
              console.log("Hi, I was born in Mota Khokhara, Bhavnagar");
              setTimeout(() => {
                console.log("Hi, I love to play football");
                setTimeout(() => {
                  console.log("Hi,I was a national Player in athletics ");
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};

getStudentData();
