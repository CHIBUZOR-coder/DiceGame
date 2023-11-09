// This Function bellow is used to generate random numbers for player 1&2. It will also be reused in other functions.
function radn() {
  const n = Math.floor(Math.random() * 6) + 1;
  return n;
}

function radb() {
  var b = Math.floor(Math.random() * 6) + 1;
  return b;
}

var emoji = document.querySelector("#emoji");
var emoji2 = document.querySelector("#emoji2");

// The bewlow function helps get click count
let clickCount = 1;
function count() {
  clickCount++;
  console.log(clickCount);
}


//   This function below is used to change the dice roll by changing image attribute. It works with the while loop functin.

function random() {
  var status = "player1";
  console.log(status);
  var n = radn();
  var b = radb();
  var all = n + b;

  // player1 random image Generator
  var img = document.querySelectorAll("img")[0];
  var imagesrc1 = "images/dice" + n + ".png";
  img.setAttribute("src", imagesrc1);

  // player2 random image Generator
  var img1 = document.querySelectorAll("img")[1];
  var imagesrc2 = "images/dice" + b + ".png";
  img1.setAttribute("src", imagesrc2);

  // player1score Generator
  function player1Score() {
    var player1Score = document.querySelector("#player1Score");
    console.log(player1Score.innerText);
    var score = parseInt(player1Score.innerText.split(" ")[2]); // Get the current score

    // Calculate the new score
    var newScore = score + all;
    console.log(newScore);

    // Update the score and display it
    player1Score.innerText = `Player1 Score: ${newScore}`;
    b = newScore;
    return b;
  }

  // player2score Generator
  function player2Score() {
    var player2Score = document.querySelector("#player2Score");
    console.log(player2Score.innerText);
    var score = parseInt(player2Score.innerText.split(" ")[2]); // Get the current score

    // Calculate the new score
    var new2Score = score + all;
    console.log(new2Score);

    // Update the score and display it
    player2Score.innerText = `Player2 Score: ${new2Score}`;

    b2 = new2Score;
    return b2;
  }

  if (clickCount % 2 != 0) {
    player1Score();
  } else {
    player2Score();
  }

  //EXtracting Player1 scores
  const extract1 = document.querySelector("#player1Score");
  const extractP1 = parseInt(extract1.innerText.split(" ")[2]);
  console.log(extractP1);

  //EXtracting Player2 scores
  const extract2 = document.querySelector("#player2Score");
  const extractP2 = parseInt(extract2.innerText.split(" ")[2]);
  console.log(extractP2);

  //emoji reactions
    if (extractP1 < extractP2) {
      emoji.innerText = "😰";
      emoji2.innerText = "😂";
    } else if (extractP1 > extractP2) {
      emoji.innerText = "😂";
      emoji2.innerText = "😰";
    } else {
      emoji.innerText = "😐";
      emoji2.innerText = "😐";
    }
  

}

// var results = [];
// var randomValue = n;  //Generate a random value
// results.push(randomValue); // Add the random value to the array
// console.log(results);

// Getting the button and adding event listeners using Dom.
var button = document.querySelector("button");
console.log(button);
button.addEventListener("click", random);
button.addEventListener("click", change);
button.addEventListener("click", count);
console.log(button);

// player color when playing
function player1() {
  var par = document.querySelector("#playColor1");
  par.style.color = "rgb(156, 11, 11)";
}

function player2() {
  var par = document.querySelector("#playColor2");
  par.style.color = "rgb(156, 11, 11)";
}

// player color when not playing
function defaultPlayer1() {
  var par = document.querySelector("#playColor1");
  console.log(par);
  par.style.color = " #4ECCA3";
}

function defaultPlayer2() {
  var par = document.querySelector("#playColor2");
  console.log(par);
  par.style.color = "#4ECCA3";
}

// This fuction below is the while loop that set conditions for the change(), player1(), player2(), defaultPlayer1() and defaultPlayer2() functions
player1();

function change() {
  defaultPlayer1();
  while (clickCount) {
    if (clickCount % 2 != 0) {
      player2();
      defaultPlayer1();
      break;
    } else {
      player1();
      defaultPlayer2();
      break;
    }
  }
}
