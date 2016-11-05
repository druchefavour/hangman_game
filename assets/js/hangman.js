
window.onload = function () {
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var categories;         // Array of topics
var chosenCategory;     // Selected category
var getHint ;          // Word getHint
var word ;              // Selected word
var guess ;             // Guess
var guesses = [ ];      // Stored guesses
var leftGuesses ;       // Lives
var counter ;           // Count correct guesses
var space;              // Number of spaces in word '-'

// Get elements
var showLeftGuesses = document.getElementById("myLeftGuesses");
var showCategory = document.getElementById("scategory");
var getHint = document.getElementById("hint");
var showClue = document.getElementById("clue");

// create alphabet ul
var buttons = function () {
myButtons = document.getElementById('buttons');
letters = document.createElement('ul');

for (var i = 0; i < alphabet.length; i++) {
letters.id = 'alphabet';
list = document.createElement('li');
list.id = 'letter';
list.innerHTML = alphabet[i];
check();
myButtons.appendChild(letters);
letters.appendChild(list);
}
}

// Select Category
var selectCat = function () {
if (chosenCategory === categories[0]) {
categoryName.innerHTML = "The Chosen Category Is A Country that Qualified for Rio 2014";
} else if (chosenCategory === categories[1]) {
categoryName.innerHTML = "The Chosen Category Is A Country that Qualified the for Round of 16 in Rio 2014";
} else if (chosenCategory === categories[2]) {
categoryName.innerHTML = "The Chosen Category Is A Country that Qualified for the Quater final in Rio 2014";
}else if (chosenCategory === categories[3]) {
categoryName.innerHTML = "The Chosen Category Is A Country that Qualified for the Semi final in Rio 2014";
}else if (chosenCategory === categories[4]) {
categoryName.innerHTML = "The Chosen Category Is A Country that Qualified for the final in Rio 2014";
}
}

// Create guesses ul
result = function () {
wordHolder = document.getElementById('hold');
correct = document.createElement('ul');

for (var i = 0; i < word.length; i++) {
correct.setAttribute('id', 'my-word');
guess = document.createElement('li');
guess.setAttribute('class', 'guess');
if (word[i] === "-") {
guess.innerHTML = "-";
space = 1;
} else {
guess.innerHTML = "_";
}

guesses.push(guess);
wordHolder.appendChild(correct);
correct.appendChild(guess);
}
}

var x = document.getElementById("music");
function playAudio() {
x.play();
}
// Show left guesses
comments = function () {
showLeftGuesses.innerHTML = "You have " + leftGuesses + " guesses left";
if (leftGuesses < 1) {
showLeftGuesses.innerHTML = "You Have Lost";
}
for (var i = 0; i < guesses.length; i++) {
if (counter + space === guesses.length) {
showLeftGuesses.innerHTML = "You Win!";
playAudio()
}
}
}
  
// Animate man
  var animate = function () {
    var drawMe = leftGuesses ;
    drawArray[drawMe]();
  }
//************************************************************************************
//should not need to modify these functions or add any calls to them
//************************************************************************************
//prepares the canvas for writing  

// Hangman
  canvas =  function(){
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = '#ff0000';
    context.lineWidth = 2;
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

canvasR = function() {
    myballHeader = document.getElementById("ballHeader");
    cxt = ballHeader.getContext('2d');
    };

head = function(){
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      var img = document.getElementById("tongue");
      context.drawImage(img,50,15, 25, 25);
      context.beginPath();
     // context.arc(60, 25, 10, 0, Math.PI*2, true);
      context.stroke();
    }

 soccer = function(){     
      myballHeader = document.getElementById("ballHeader");
      cxt = myballHeader.getContext('2d');
      var img1 = document.getElementById("soccer");
      cxt.drawImage(img,50,15, 25, 25);
      cxt.beginPath();
     // context.arc(60, 25, 10, 0, Math.PI*2, true);
      cxt.stroke();

    }
    
//called when an object needs to be drawn on the canvas
draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
       myStickman = document.getElementById("stickman");
       context = myStickman.getContext('2d');
        context.moveTo($pathFromx, $pathFromy);
        context.lineTo($pathTox, $pathToy);
        context.stroke();

        myballHeader = document.getElementById("ballHeader");
       cxt = myballHeader.getContext('2d');
        cxt.moveTo($pathFromx, $pathFromy);
        cxt.lineTo($pathTox, $pathToy);
        cxt.stroke();
}

   frame1 = function() {
     draw (0, 150, 150, 150);
   };
   
   frame2 = function() {
     draw (10, 0, 10, 600);
   };
  
   frame3 = function() {
     draw (0, 5, 70, 5);
   };
  
   frame4 = function() {
     draw (60, 5, 60, 15);
   };
  
   torso = function() {
     draw (60, 36, 60, 70);
   };
  
   rightArm = function() {
     draw (60, 46, 100, 50);
   };
  
   leftArm = function() {
     draw (60, 46, 20, 50);
   };
  
   rightLeg = function() {
     draw (60, 70, 100, 100);
   };
  
   leftLeg = function() {
     draw (60, 70, 20, 100);
   };
  
  drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, soccer, frame4, frame3, frame2, frame1]; 


// OnClick Function
check = function () {
list.onclick = function () {
var guess = (this.innerHTML);
this.setAttribute("class", "active");
this.onclick = null;
for (var i = 0; i < word.length; i++) {
if (word[i] === guess) {
guesses[i].innerHTML = guess;
counter += 1;
} 
}

var j = (word.indexOf(guess));
if (j === -1) {
leftGuesses -= 1;
comments();
animate();
} else {
comments();
}
}
}

 // Play
play = function () {
categories = [
        ["australia", "iran", "japan", "south korea", "cameroun", "ghana", "ivory coast","Nigeria", "Costa Rica", "Honduras","Mexico", "United States", "Argentina", "Brazil", "Chile", "Colombia", "Ecuador", "Uruguay", "Belgium", "Bosnia and Herzegovina", "Croatia", "England", "France", "Germany", "Greece", "Italy", "Netherlands", "Portugal", "Russia", "Spain", "Switzerland"],
        ["algeria", "nigeria", "costa rica", "mexico", "united states", "argentina", "brazil", "chile", "colombia", "uruguay", "Belgium", "france", "germany", "netherlands", "greece", "switzerland"],
        ["costa rica", "argentina", "brazil", "colombia", "Belgium", "france", "germany", "netherlands"],
        ["argentina", "brazil", "Belgium", "germany"],
        ["argentina",   "germany"]
    ];
// Choose a categoryName
chosenCategory = categories[Math.floor(Math.random() * categories.length)];
word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
word = word.toLowerCase();
word = word.replace(/\s/g, "-");
console.log(word);
buttons();

guesses = [ ];
leftGuesses = 10;
counter = 0;
space = 0;
result();
comments();
selectCat();
}

play ();

hint.onclick = function() {

hints = [
        ["socceroos", "team melli", "Samurai Blue", "Taegeuk Warriors", "indomitable lion", "black stars", "elephants", "super eagles", "Los Ticos", "Los Catrachos","Los Ticos", "Los Catrachos", "El Tri", "The Yanks", "la albiceleste", "selecao", "la roja", "los cafeteros", "amarillos", "la celeste", "les diables", "zmajevi", "vatreni", "the three lions", "les bleus", "die mannschaft", "to piratiko", "azzurri", "oranje", "seleccao das quinas", "sbornaya", "la furia roja", "nati"],
        ["les fennecs", "super eagles", "la roja", "El Tri", "The Yanks", "La Albiceleste", "Seleccao", "La Rojac", "los cafeteros", "la celeste", "les diables", "les blues", "die mannschaft", "oranje", "to piratiko", "nati"],
        ["la roja", "La Albiceleste", "Seleccao", "la celeste", "les diables", "les blues", "die mannschaft", "oranje"],
        ["La Albiceleste", "Seleccao", "les diables", "die mannschaft"],
        ["La Albiceleste", "die mannschaft"]
    ];

var categoryIndex = categories.indexOf(chosenCategory);
var hintIndex = chosenCategory.indexOf(word);
alert ("clues" + chosenCategory.indexOf(word));
showClue.innerHTML = "Clue: - " +  hints[categoryIndex][hintIndex];
};

// Reset
document.getElementById('reset').onclick = function() {
correct.parentNode.removeChild(correct);
letters.parentNode.removeChild(letters);
music.parentNode.removeChild(music);
showClue.innerHTML = "";
context.clearRect(0, 0, 400, 400);
play();
}
}