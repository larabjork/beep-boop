var robotWords = ["I'm sorry, Dave. I'm afraid I can't do that", "Boop!", "Beep!"];
var robotArray = []



// business logic



// var reg3 = /\d*3\d*/g;
// var reg2 = /\d*2\d*/g;
// var reg1 = /\d*1\d*/g;
// var robotCounter = reg3.replace(humanCounter);


var humanCounter = function(num) {
  if (num < 1) {
    return "DANGER! DANGER! Does not compute! You must enter a number greater than 0!";
  } else {
    for (var i = 0; i <=num; i+= 1) {
      if (i>=1) {
        robotArray.push(i)
      }
    };
    return robotArray;
    };
};


var outputArray = robotArray
// user logic

$(document).ready(function() {
 $(".clickable").click(function(event) {
   event.preventDefault();

   $("div#before").toggle();
   $("div.result").toggle();

   var num = parseInt($("input#entry").val());
   var result = humanCounter(num);

   $(".outcome").text(result);
 });
});


// GRAVEYARD / CLIPBOARD
// THIS CODE WORKS TO REPLACE SINGLE DIGIT OF 3 WITH THE TEXT.
// var robotCounter = function(num) {
//   if (num < 1) {
//     return "DANGER! DANGER! Does not compute! You must enter a number greater than 0!";
//   } else {
//     for (var i = 0; i <=num; i+= 1) {
//       if (i <= num && i !==3) {
//         robotArray.push(i)
//       } else {
//         robotArray.push(robotWords[0])
//       };
//       console.log(robotArray)
//     };
//   };
//   return robotArray;
// };

// THIS CODE WORDS TO REPLACE SINGLE DIGITS 1, 2, or 3 in the TEXT==where I left off on Friday
