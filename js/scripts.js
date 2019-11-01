var robotWords = ["I'm sorry, Dave. I'm afraid I can't do that.", "Boop!", "Beep!"];
var robotArray = []
// business logic

var robotCounter = function(num) {
  if (num < 1) {
    return "DANGER! DANGER! Cannot compute! Enter a number greater than 0!";
  }

  // while (num >= 1000){
  //   num = num - 1000;
  //   robotArray.push(robotWords[0]);
  //   if (num < 1000)
  //   break
  //   };
  //
  // while (num >= 900){
  //   num = num - 900;
  //   romanArray.push(romanSymbols[1]);
  //   if (num < 900)
  //   break
  //   };


    // return robotArray.join(' ');
    // return romanArray
};






// user logic

$(document).ready(function() {
 $("form#user").submit(function(event) {
   event.preventDefault();

   $("div.result").show();

   var num = parseInt($("input#entry").val());
   // THIS LINE WILL NEED TO BE ADJUSTED TO FIT
   var result = robotCounter(num);

       $(".outcome").text(result);
 });
});
