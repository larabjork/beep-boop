var robotWords = ["I'm sorry, Dave. I'm afraid I can't do that.", "Boop!", "Beep!"];
var robotArray = []
// business logic

var robotCounter = function(num) {
  if (num < 1) {
    return "DANGER! DANGER! Cannot compute! Enter a number greater than 0!";

  } else {

    for (var i = 0; i <=num; i+= 1) {
      if(i < num) {
        robotArray.push(num);
        return robotArray;
        console.log(robotArray)
      };
    };

// This was within the else statement and it worked to return the list of numbers without a comma at the end; before trying to substitute beep-boop etc. values.
//   for (var i = 0; i <=num; i+= 1) {
//     if(i < num) {
//       $(".result").append(i + ", ")
//     } else {
//       $(".result").append(i)
//     }
//
//
// }


    // return robotArray.join(' ');
    // return romanArray
  };
};






// user logic

$(document).ready(function() {
 $("form#user").submit(function(event) {
   event.preventDefault();

   $("div.result").show();
   // THE SECOND BUTTON DOESN'T WORK YET
   $("div.refresh").show();

   var num = parseInt($("input#entry").val());
   // THIS LINE WILL NEED TO BE ADJUSTED TO FIT
   var result = robotCounter(num);

       $(".outcome").text(result);
 });
});
