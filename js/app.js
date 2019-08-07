'use strict';


// function changingToLowerCase (question){
//   question = question.toLowerCase();

//   if (question === "yes" || question === "y"){
//     alert(uName + " that's awsome!");
//   } else {
//     alert("That's sad!");
//   }

//My answers:
//1. I was able to make it work, but I need to work on CSS.
//2. I tried to create a function above, bu got message "Parsing erorr: unexpected token eslint". TA's weren't able to help me 


var uName = prompt("What is your name?");
console.log(uName);

var firstQ = prompt( uName + ', have you heard that Torun is a gingerbread city?');

firstQ = firstQ.toLowerCase();

if (firstQ === "yes" || firstQ === "y"){
  alert(uName + ", that's awsome!");
} else {
  alert("That's sad!");
}
console.log("User's anwser to first question");

var secondQ = prompt(uName + ', have you ever eaten a gingerbread?');

secondQ = secondQ.toLowerCase();

if (secondQ === "yes" || secondQ === "y"){
  alert(uName + ", that's awsome!");
} else {
  alert("That's sad!");
}
console.log("User's anwser to second question");

var thirdQ = prompt(uName + ', did you know Copernicus?');
thirdQ = thirdQ.toLowerCase();

if (thirdQ === "yes" || thirdQ === "y"){
  alert(uName + ", that's awsome!");
} else {
  alert("That's sad!");
}
console.log("User's anwser to third question");

var fourthQ = prompt(uName + ', did you know that Earth is not a center of universe?');
fourthQ = fourthQ.toLowerCase();

if (fourthQ === "yes" || fourthQ === "y"){
  alert(uName + ", that's awsome!");
} else {
  alert("That's sad!");
}
console.log("User's anwser to third question");

var fifthQ = prompt(uName + ', did you know that Copernicus was a fun of gingerbreads?');

fifthQ = fifthQ.toLowerCase();

if (fifthQ === "yes" || fifthQ === "y"){
  alert(uName + ", that's awsome!");
} else {
  alert("That's sad!");
}
console.log("User's anwser to fifth question");