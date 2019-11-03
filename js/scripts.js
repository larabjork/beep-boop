var robotWords = ["I'm sorry, Dave. I'm afraid I can't do that", "Boop!", "Beep!"];
var robotArray = [];

// function robotCounter(num) {
//   var analyzer = robotAnalyzer(num)
//   robotAnalyzer.forEach (function (num){
//     var banana = robotAnalyzer(num);
//     robotArray.push(banana);
//   });
// };


// business logic

var robotCounter = function robotizer(num) {
  if (num.match(/\d*3\d*/g)){
    return robotThree(num)
  } else if (num.match(/\d*2\d*/g)) {
      return robotTwo(num)
  } else if (num.match(/\d*1|d*/g)) {
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
 $("form#user").submit(function(event) {
   event.preventDefault();

   // $("div#before").toggle();
   // $("div.result").toggle();

   var num = $("input#entry").val();
   var result = robotCounter(num);

   $(".outcome").text(result);
 });
});


// GRAVEYARD / CLIPBOARD
// THIS CODE WORKS TO REPLACE SINGLE DIGIT OF 3 WITH THE TEXT.

// THIS CODE WORDS TO REPLACE SINGLE DIGITS 1, 2, or 3 in the TEXT==where I left off on Friday
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
