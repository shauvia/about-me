'use strict';



// function changingToLowerCase (question){
//   question = question.toLowerCase();

//   if (question === 'yes' || question === 'y'){
//     alert(uName + " that's awsome!");
//   } else {
//     alert("That's sad!");
//   }
//  }

// My answers:
// 1. I was able to make it work, but I need to work on CSS.
// 2. I tried to create a function above, bu got message "Parsing erorr: unexpected token eslint". TA's weren't able to help me

var count = 0;
var uName = prompt('Hello, what is your name?');
console.log(uName);

// dodać coś w stylu, czy chcesz zagrać za mną w gre? Tak - fajnie! nie? - Dziękuje za wizytę na stronie

var firstQ = prompt('Was I born in Torun?');

firstQ = firstQ.toLowerCase();

if (firstQ === 'yes' || firstQ === 'y'){
  alert(uName + ", that's correct!");
  count = count+1;
} else {
  alert('Wrong anwser!'); //dodać zcoś w stylu idżmy do nasteonego pytania
}
console.log("User's anwser to first question");

var secondQ = prompt(uName + ', have I ever eaten a gingerbread?');

secondQ = secondQ.toLowerCase();

if (secondQ === 'yes' || secondQ === 'y'){
  alert(uName + ", that's correct!");
  count = count+1;
} else {
  alert('Wrong anwser!');
}
console.log("User's anwser to second question");

var thirdQ = prompt(uName + ', did I know Copernicus?');
thirdQ = thirdQ.toLowerCase();

if (thirdQ === 'yes' || thirdQ === 'y'){
  alert(uName + ", that's correct!");
  count = count+1;
} else {
  alert('Wrong anwser!');
}
console.log("User's anwser to third question");

var fourthQ = prompt(uName + ', did I studied in Warsaw?');
fourthQ = fourthQ.toLowerCase();

if (fourthQ === 'yes' || fourthQ === 'y'){
  alert(uName + ", that's correct!");
  count = count+1;
} else {
  alert('Wrong anwser!');
}
console.log("User's anwser to third question");

var fifthQ = prompt('Am I from Poland?');

fifthQ = fifthQ.toLowerCase();

if (fifthQ === 'yes' || fifthQ === 'y'){
  alert(uName + ", that's correct!");
  count = count+1;
} else {
  alert('Wrong anwser!');
}
console.log("User's anwser to fifth question"); 

// Asking user for numeric input 4 times.


var wasCorrectAnswer = false; 

for ( var i = 0; i < 4; i++) {
  var uAnswer = parseInt(prompt('How many countries have I visited?'));
  console.log('Number of tries ' + i);
  if (uAnswer === 12) {
    alert('Congratulation! You got it!');
    wasCorrectAnswer = true;
    console.log('Correct answer');
    count = count+1;
    break;
  } else if (uAnswer > 12) {
    alert("It's too high. Try again!");
    console.log('Number too high ' + uAnswer);
  } else if (uAnswer < 12) {
    alert("It's too low. Try again!");
    console.log('Number too low ' + uAnswer);
  }
}
if (wasCorrectAnswer === false) {
  alert('You have used all you chances.');
}

var cities = ["Bellevue", "Torun", "Spokane"];
var correctAnswer = false;

var x = 0;
var userAnswer = prompt('Where have I lived?');
userAnswer.toLowerCase();

while (x < 6) { //gives user 6 chances to guess
  console.log('Guessing ' + x); 
  for (var y = 0; y < cities.length; y++) { //compares user's answer against the array
    console.log('Cheking ' + y); 
    if (userAnswer === cities[y].toLowerCase()){
      var correctAnswer = true;
      count = count + 1;
      alert("You got it right. I've lived in " + cities[0] + ', ' + cities[1] + ' and ' + cities[2] + '.');
      console.log('User got answer right');
      break;
    }
  }
  if (correctAnswer) {
    break;
  } else {
    userAnswer = prompt('Where have I lived?');
    userAnswer.toLowerCase();
    x = x+1;
  }
}

alert('You got ' + count + ' out of 7 questions ' + uName);

