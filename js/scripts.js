var robotWords = ["I'm sorry, Dave. I'm afraid I can't do that", "Boop!", "Beep!"];
var robotArray = [];
var humanArray = [];

function mrRoboto(number) {
  if (number < 1 ) {
    return "DANGER! DANGER! DOES NOT COMPUTE! You must enter a number greater than 0!";
  } else {
    var roboSubstitution = humanCounter(number);
    roboSubstitution.forEach(function(num) {
      var bot = robotCounter(num);
      robotArray.push(bot);
    });
  return robotArray;
  };
};


//this is where I tell the program to start counting at 0, adding 1 each time, pushing to an array of NUMBERS, stopping at the number that the user entered
var humanCounter = function(number) {
      for (var i = 0; i <=number; i+= 1) {
        humanArray.push(i)
        var numToString = humanArray.toString().split(",");
      };
  return numToString;
}



// this is where I tell the program to look for special cases and return appropriate values--this needs to examine STRINGS (see functions below).

var robotCounter = function robotizer(num) {
  if (num.match(/\d*3\d*/g)){
    return robotThree(num)
  } else if (num.match(/\d*2\d*/g)) {
    return robotTwo(num)
  } else if (num.match(/\d*1\d*/g)) {
      return robotOne(num)
  } else {
      return num};
  };




function robotThree(num) {
  return "I'm sorry, Dave. I'm afraid I can't do that"
};

function robotTwo(num) {
  return "Boop!"
};

function robotOne(num) {
  return "beep!"
};




// user logic

$(document).ready(function() {
 $(".clickable").click(function(event) {
   event.preventDefault();

   $("div#before").toggle();
   $("div.result").toggle();


   var number = parseInt($("input#entry").val());
   var result = mrRoboto(number);

   $(".outcome").text(result);
 });
});


// GRAVEYARD / CLIPBOARD
// THIS CODE WORKS TO REPLACE SINGLE DIGIT OF 3 WITH THE TEXT.

// THIS CODE WORDS TO REPLACE SINGLE DIGITS 1, 2, or 3 in the TEXT==where I left off on Friday
// var robotCounter = function(num) {
//     if (num < 1) {
//         return "DANGER! DANGER! Does not compute! You must enter a number greater than 0!";
//       } else {
//           for (var i = 0; i <=num; i+= 1) {
//               if (i <= num && i !==3) {
//                   robotArray.push(i)
//                 } else {
//                     robotArray.push(robotWords[0])
//                   };
//                   console.log(robotArray)
//                 };
//               };
//               return robotArray;
//             };





// THIS IS A SNIPPET OF A DRAFT THAT DIDN'T GO ANYWHERE
// var reg3 = /\d*3\d*/g;
// var reg2 = /\d*2\d*/g;
// var reg1 = /\d*1\d*/g;
// var robotCounter = reg3.replace(humanCounter);


// var humanCounter = function(num) {
  //   if (num < 1) {
    //     return "DANGER! DANGER! Does not compute! You must enter a number greater than 0!";
    //   } else {
      //     while (num )
      //         robotArray.push(i)
      //       }
      //     };
      //     return robotArray;
      //     };
      // };
      //
      //
      // var outputArray = robotArray
