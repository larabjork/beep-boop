var robotWords = ["I'm sorry, Dave. I'm afraid I can't do that.", "Boop!", "Beep!"];
var robotArray = []
// business logic

var robotCounter = function(num) {
  if (num < 1) {
    return "DANGER! DANGER! Does not compute! You must enter a number greater than 0!";
  } else {
    for (var i = 0; i <=num; i+= 1) {
      if (i <= num && i !==3) {
        robotArray.push(i)
      } else {
        robotArray.push(robotWords[0])
      };
    console.log(robotArray)
    };
  };
};


// Original version of second spec - with user logic mixed in?
// } else {
//   for (var i = 0; i <=num; i+= 1) {
//     if (i < num) {
//       $(".result").append(i + ", ")
//     } else {
//       $(".result").append(i)
//     }





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
