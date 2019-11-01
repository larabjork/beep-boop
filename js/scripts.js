var robotWords = ["I'm sorry, Dave. I'm afraid I can't do that.", "Boop!", "Beep!"];
var robotArray = []
// business logic

var robotCounter = function(num) {
  if (num < 1) {
    return "DANGER! DANGER! Cannot compute! Enter a number greater than 0!";

  } else {
    for (var i = 0; i <=num; i+= 1) {
      if (i < num) {
        $(".result").append(i + ", ")
      } else {
        $(".result").append(i)
      }
    };
    return i;
  };







// user logic

$(document).ready(function() {
 $("form#user").submit(function(event) {
   event.preventDefault();

   $("div.result").show();
   // THE SECOND BUTTON DOESN'T WORK YET
   $("div.refresh").show();

   var num = parseInt($("input#entry").val());
   var result = robotCounter(num);

   $(".outcome").text(result);
 });
});
};
