var robotWords = ["I'm sorry, Dave. I'm afraid I can't do that", "Boop!", "Beep!"];
var threes = [3,13,23,30,33,43,53,63,73,83,93]
var twos = [2,12,20,22,42,52,62,72,82,92]
var ones = [1,10,11,14,15,16,17,18,19,41,51,61,71,81,91]
var robotArray = []


// business logic
var robotCounter = function(num) {
  if ((num < 1) || (num > 100)){
    return "DANGER! DANGER! Does not compute! You must enter a number greater than 0 and less than 101!";

  } else {
    for (var i = 0; i <=num; i+= 1) {
        if (i === 3 ) {
          robotArray.push(robotWords[0]);

        } else if (i === 2 ) {
          robotArray.push(robotWords[1]);

        } else if (i === 1 ) {
          robotArray.push(robotWords[2]);

        } else {
          robotArray.push(i)
        };
      };
    }

    return robotArray;

  };












// user logic

$(document).ready(function() {
 $(".clickable").click(function(event) {
   event.preventDefault();

   $("div#before").toggle();
   $("div.result").toggle();

   var num = parseInt($("input#entry").val());
   var result = robotCounter(num);

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

// THIS CODE WORDS TO REPLACE SINGLE DIGITS 1, 2, or 3 in the TEXT
// var robotCounter = function(num) {
//   if (num < 1) {
//     return "DANGER! DANGER! Does not compute! You must enter a number greater than 0!";
//   } else {
//     for (var i = 0; i <=num; i+= 1) {
//       if (i===3) {
//         robotArray.push(robotWords[0])
//       } else if (i===2){
//         robotArray.push(robotWords[1])
//       } else if (i===1){
//         robotArray.push(robotWords[2])
//       } else {
//         robotArray.push(i)
// //       };
// //     };
//   };
//   return robotArray;
// };


// THIS IS THE UNSUCCESSFUL MODULO ATTEMPT
//
