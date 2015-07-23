var color = "red"; // the starting player color

// all possible winning cases
var $resetButton = $("button")
var $topRow = $(".top td");
var $middleRow = $(".middle td");
var $bottomRow = $(".bottom td");
var $leftColumn = $(":first-child .one");
var $middleColumn = $(":nth-child(2) .two");
var $rightColumn = $(":nth-child(3) .three");
var $diagOne = [$(".top .one"), $(".middle .two"), $(".bottom .three")];
var $diagTwo = [$(".top .three"), $(".middle .two"), $(".bottom .one")];

// all possible winning cases stored in an array
var winArray = [$topRow, $middleRow, $bottomRow, 
                $leftColumn, $middleColumn, $rightColumn,
                $diagOne, $diagTwo]

var winCheck = function(color){
  var inArow = 0; // how many of each player's boxes in a row
  for(var f=0; f<winArray.length; f++) { // for every case in the array of winning cases
    for(var i=0; i<winArray[f].length; i++) { // go through and check the boxes 
      if($(winArray[f][i]).hasClass(color) === true) { // if that box has the sent color
        inArow++; // add to the in-a-row count
        console.log(color, inArow);
      }
    }
    if(inArow === 3) { // 3 in a row is a WINNER!
      $resetButton.removeClass("hidden");  // reveal the reset button
      alert(color + " wins!"); // tell the winner they're awesome!
      break;
    } else {
      inArow = 0;
    }
  }
};

$allGameBoxes = $("tbody td");

// set the pointer to look clickable when you mouse over a game box
$allGameBoxes.mouseenter(function(){
  $("body").css("cursor", "pointer");
});

// turn the clickable pointer back off
$allGameBoxes.mouseleave(function(){
  $("body").css("cursor", "default");
});

// set the clicked box to the player color & switch colors,
$allGameBoxes.click(function(event) {
  $("h1").addClass("hidden"); // hide the red goes first infotext
  event.preventDefault(); // don't reload the page >=(
  var clickedBox = $(this);
  if(clickedBox.hasClass("selected") === false) { // make sure the box isn't taken
    clickedBox.addClass(color + " selected"); // set the color & taken class
    winCheck(color);
    if(color === "red") {
      color = "blue";
    } else {
      color = "red";
    };
  };
});

$resetButton.click(function(){
  $allGameBoxes.removeClass("red blue selected"); // clear all our colors and taken classes
  color = "red"; // reset to the default color
  $(this).addClass("hidden"); // hide the reset button
  $("h1").removeClass("hidden"); // unhide the infotext
});

