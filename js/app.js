/*
 * Create a list that holds all of your cards
 */
/*
 * Create a list that holds all of your cards
 */
let allcards = [...document.querySelectorAll(".card")];
let emptyArray = [];
var timer = 0;
var x;
var star = 3;
console.log(emptyArray);
for (var i in allcards) {
  allcards[i].addEventListener("click", displayCards);
}

function displayCards() {
  if (timer === 0) {
    timer = 1;
    timeFunction();
  }
  this.classList.add("open", "show", "disabled");
  emptyArray.push(this);
  matchCards();
}

// match cards
var matchCount = 0;

function matchCards() {
  setTimeout(function() {
    if (emptyArray.length === 2) {
      move();
      if (emptyArray[0].children[0].className == emptyArray[1].children[0].className) {
        emptyArray[0].classList.add("match", "disabled");
        emptyArray[1].classList.add("match", "disabled");
        emptyArray[0].classList.remove("open", "show");
        emptyArray[1].classList.remove("open", "show");
        matchCount += 1;
        if (matchCount == 8) {
          timerof();
        }
      } else {
        emptyArray[0].classList.remove("open", "show", "disabled");
        emptyArray[1].classList.remove("open", "show", "disabled");
      }
      emptyArray = [];
    }
  }, 200);
}

// move Counter
var moves = document.querySelector('.moves');
var sta = document.getElementsByClassName('.fa fa-star');
var moveCount = 0;
var p = document.querySelector('.stars');

function move() {
  moveCount++;
  moves.innerHTML = moveCount;
  if (moveCount === 10) {
    p.children[2].innerHTML = '<li><i class="fa fa-star-o"></i></li>';
    star -= 1;
  } else if (moveCount == 18) {
    p.children[1].innerHTML = '<li><i class="fa fa-star-o"></i></li>';
    star -= 1;
  }
}

// timerFUnction
var time = document.querySelector('.timer');
var mins = 0;
var secs = 0;

function timeFunction() {
  x = setInterval(function() {
    secs++;
    if (secs == 60) {
      mins++;
      secs = 0;
    } else if (mins == 59) {
      mins = 0;
    }
    time.innerHTML = mins + " : " + secs;
  }, 1000);
}

//shuffleCards
// var deck = document.querySelector('.deck');
// shuffle(allcards).map(() => {
//   [].filter.call(allcards, list => {
//     deck.appendChild(list);
//   });
// });
//
// function shuffle(array) {
//   var currentIndex = array.length,
//     temporaryValue, randomIndex;
//   while (currentIndex !== 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }
//   return array;
// }

// reload
function reload() {
  window.location.reload();
}

function playagain() {
  window.location.reload();
}

// TimerofFunction
function timerof() {
  clearInterval(x);
  swal({
    title: "congratulations! you won the Game",
    text: moveCount + " moves   " + "\n" + mins + " minutes   " + ":" + secs + " seconds   " + "\n" + star + "stars",
    confirmButtonColor: "green",
    confirmButtonText: "Play again"
  }, function() {
    location.reload();
  });
}
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
