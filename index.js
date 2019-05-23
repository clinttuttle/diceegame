// create random number for dice 1
var randomNumber1 = Math.random() * 6 + 1;
randomNumber1 = Math.floor(randomNumber1);

// create random number for dice 2
var randomNumber2 = Math.random() * 6 + 1;
randomNumber2 = Math.floor(randomNumber2);

var newSource1 = "images/dice" + randomNumber1 + ".png"
var newSource2 = "images/dice" + randomNumber2 + ".png"

var image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src",newSource1);

var image2 = document.querySelectorAll("img")[1]
image2.setAttribute("src",newSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
} else {
  document.querySelector("h1").innerHTML = "😋It's a tie😋";
}
