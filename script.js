var color = "red";

$allGameBoxes = $("tbody td");

$allGameBoxes.mouseenter(function(){
  $("body").css("cursor", "pointer");
});


$allGameBoxes.click(function(color) {
  if($(this).hasClass("selected") === true) {
    $(this).addClass(color + " selected");
    if(color === "red") {
      color = "blue";
    } else {
      color = "red";
    };
  }
});

