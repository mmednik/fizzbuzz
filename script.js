let number = 0;
let string = '';
const body = document.querySelector("body");

addEventListener('keyup', (e) => {
  if(e.key=="Enter") {
    fizzbuzz();
    body.style.backgroundColor = randomHexColor();
    console.log(randomHexColor());
  }
});

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

function randomInteger(max) {
  return Math.floor(Math.random()*(max + 1));
}

function randomRgbColor() {
  let r = randomInteger(255);
  let g = randomInteger(255);
  let b = randomInteger(255);
  return [r,g,b];
}

function randomHexColor() {
  let [r,g,b] =randomRgbColor();

  let hr = r.toString(16).padStart(2, '0');
  let hg = g.toString(16).padStart(2, '0');
  let hb = b.toString(16).padStart(2, '0');

  return "#" + hr + hg + hb;
}