'use strict';

function tFQuestions(answer){
  answer = answer.toLowerCase();

  if (answer === 'yes' || answer === 'y'){
    alert(uName + ', that\'s correct! Let\'s go to next question.');
    count = count+1;
  } else {
    alert('That\'s a wrong anwser! Let\'s go to next question.'); //dodać coś w stylu idżmy do nasteonego pytania
  }
}

var count = 0;
var uName = prompt('Hello, what is your name?');
console.log(uName);

if (confirm( uName + ' Would you like to play a guessing game?')) {
  alert('Let\'s play');}
else {
  alert('That\'s sad. Thanks for visiting my website');
}

function askfiveYnQuestions() {
// dodać coś w stylu, czy chcesz zagrać za mną w gre? Tak - fajnie! nie? - Dziękuje za wizytę na stronie

  var firstQ = prompt('Was I born in Torun?');
  tFQuestions(firstQ);
  console.log('User\'s anwser to first question');

  var secondQ = prompt(uName + ', have I ever eaten a gingerbread?');
  tFQuestions(secondQ);
  console.log('User\'s anwser to second question');

  var thirdQ = prompt(uName + ', did I know Copernicus?');
  tFQuestions(thirdQ);
  console.log('User\'s anwser to third question');

  var fourthQ = prompt(uName + ', did I studied in Warsaw?');
  tFQuestions(fourthQ);
  console.log('User\'s anwser to fourth question');

  var fifthQ = prompt('Am I from Poland?');
  tFQuestions(fifthQ);
  console.log('User\'s anwser to fifth question');
}


function numberOfCountries() {
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
      alert('It\'s too high. Try again!');
      console.log('Number too high ' + uAnswer);
    } else if (uAnswer < 12) {
      alert('It\'s too low. Try again!');
      console.log('Number too low ' + uAnswer);
    }
  }
  if (wasCorrectAnswer === false) {
    alert('You have used all you chances.');
  }
}


function guessCities() {
  var cities = ['Bellevue', 'Torun', 'Spokane'];
  var correctAnswer = false;

  var x = 0;
  var userAnswer = prompt('Where have I lived?');
  while (x < 6) { //gives user 6 chances to guess
    console.log('Guessing ' + x);
    userAnswer = userAnswer.toLowerCase();
    console.log('useranswer > ' + userAnswer);
    for (var y = 0; y < cities.length; y++) { //compares user's answer against the array
      console.log('Cheking ' + y);
      if (userAnswer === cities[y].toLowerCase()) {
        correctAnswer = true;
        count = count + 1;
        alert('You got it right. I\'ve lived in ' + cities[0] + ', ' + cities[1] + ' and ' + cities[2] + '.');
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
}

askfiveYnQuestions();
numberOfCountries();
guessCities();

alert('You got ' + count + ' out of 7 questions ' + uName);
