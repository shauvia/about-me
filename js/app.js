'use strict';

function answerIsYes (answer){
  answer = answer.toLowerCase();
  if (answer === 'yes' || answer === 'y'){
    alert(uName + ' that\'s awsome!');
  } else {
    alert('That\'s sad!');
  }
}



var uName = prompt('What is your name?');
console.log(uName);

var firstQ = prompt( uName + ', have you heard that Torun is a gingerbread city?');
answerIsYes(firstQ);
console.log('User\'s anwser to first question, ' + firstQ);

var secondQ = prompt(uName + ', have you ever eaten a gingerbread?');
answerIsYes(secondQ);
console.log('User\'s anwser to second question, ' + secondQ);

var thirdQ = prompt(uName + ', did you know that Copernicus was born in Torun?');
answerIsYes(thirdQ);
console.log('User\'s anwser to third question, ' + thirdQ);

var fourthQ = prompt(uName + ', did you know that Earth is not a center of universe?');
answerIsYes(fourthQ);
console.log('User\'s anwser to third question, ' + fourthQ);

var fifthQ = prompt(uName + ', did you know that Copernicus liked gingerbreads?');
answerIsYes(fifthQ);
console.log('User\'s anwser to fifth question, ' + fifthQ);
