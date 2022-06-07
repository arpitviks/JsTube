/* const cards = document.querySelectorAll(".card");
console.log(cards);
 
//variables
var isFlipped = false;
var firstCard;
var secondCard;

cards.forEach((card) => card.addEventListener("click", flip));

function flip() {
  //   console.log("Card flipped");
  // console.log(this);
  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);

    checkIt();
  }
}

function checkIt() {
  //   console.log("Checking...");
  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
  } else {
    fail();
  }
}

function success() {
  //   console.log("Success");
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  reset();
}

function fail() {
  //   console.log("Failed");
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 1000);
}

function reset() {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}

//TODO: shuffle

(function shuffle() {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
})();
 */


//////////////////////////////////////////////////////////////////////////////////////////

const cards = document.querySelectorAll(".card");
//console.log(cards);
cards.forEach((card) => card.addEventListener("click", flip))

//Variables
var isFlipped = false;
var firstCard;
var secondCard;


//To flip the card
function flip() {
  //console.log(this);
  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);
    checkIt();
  }

}

function checkIt() {
  //console.log("Checking");
  var res = (firstCard.dataset.image === secondCard.dataset.image) ? true : false;
  if (res) success();
  else fail();
}

function success() {
  console.log("Success");
  firstCard.removeEventListner('click', flip);
  secondCard.removeEventListner('click', flip);
  firstCard = null;
  secondCard = null;
}

function fail() {
  console.log("Fail");

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 1000)

}

function reset() {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}

(function shuffle() {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
})();