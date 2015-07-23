var color = "red";
var winner = false;
var $topRow = $(".top td");
var $middleRow = $(".middle td");
var $bottomRow = $(".bottom td");
var $leftColumn = $(":first-child .one");
var $middleColumn = $(":nth-child(2) .two");
var $rightColumn = $(":nth-child(3) .three");
var $diagOne = $(".top .one", ".middle .two", ".bottom .three");
var $diagTwo = $(".top .three", ".middle .two", ".bottom .one");

var winCheck = function(color){
  var inArow = 0;
  for(var i=0; i<$topRow.length; i++) {
    if($topRow.hasClass(color) === true) {
      inArow++;
    }
    if(inArow === 3) {
      return true;
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
  event.preventDefault();
  var clickedBox = $(this);
  if(clickedBox.hasClass("selected") === false) { // make sure the box isn't taken
    clickedBox.addClass(color + " selected");
    if(color === "red") {
      color = "blue";
    } else {
      color = "red";
    };
    winner = winCheck(color);
  };
});

