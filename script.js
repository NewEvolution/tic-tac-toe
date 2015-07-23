var color = "red";
var $resetButton = $("button")
var $topRow = $(".top td");
var $middleRow = $(".middle td");
var $bottomRow = $(".bottom td");
var $leftColumn = $(":first-child .one");
var $middleColumn = $(":nth-child(2) .two");
var $rightColumn = $(":nth-child(3) .three");
var $diagOne = $(".top .one", ".middle .two", ".bottom .three");
var $diagTwo = $(".top .three", ".middle .two", ".bottom .one");
var winArray = [$topRow, $middleRow, $bottomRow, 
                $leftColumn, $middleColumn, $rightColumn,
                $diagOne, $diagTwo]

var winCheck = function(color){
  var inArow = 0;
  for(var f=0; f<winArray.length; f++) {
    for(var i=0; i<winArray[f].length; i++) {
      if($(winArray[f][i]).hasClass(color) === true) {
        inArow++;
        console.log(color, inArow);
      }
    }
    if(inArow === 3) {
      $resetButton.removeClass("hidden");
      alert(color + " wins!");
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
  $("h1").addClass("hidden");
  event.preventDefault();
  var clickedBox = $(this);
  if(clickedBox.hasClass("selected") === false) { // make sure the box isn't taken
    clickedBox.addClass(color + " selected");
    winCheck(color);
    if(color === "red") {
      color = "blue";
    } else {
      color = "red";
    };
  };
});

$resetButton.click(function(){
  $allGameBoxes.removeClass("red blue selected");
  color = "red";
  $(this).addClass("hidden");
  $("h1").removeClass("hidden");
});

