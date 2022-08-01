let number = 0;
let string = '';

setInterval(fizzbuzz, 1000);

function fizzbuzz() {
  number++;

  if(number>100) {
    number = 1
  }
  
  if (number%3==0) {
    string = 'fizz';
  } else if (number%5==0) {
    string = 'buzz';
  } else {
    string = number;
  }

  let utterance = new SpeechSynthesisUtterance(string);
  utterance.pitch = Math.random()*2;
  speechSynthesis.speak(utterance);

  document.querySelector("span#number").innerHTML = string;

  
}