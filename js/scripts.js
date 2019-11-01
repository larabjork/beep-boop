var romanSymbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX","V", "IV","I"];
var romanArray = []
// business logic

var roman = function(num) {
  if ((num < 1) || (num > 3999)) {
    return "please enter a number between 1 and 3999";
  }
  while (num >= 1000){
    num = num - 1000;
    romanArray.push(romanSymbols[0]);
    if (num < 1000)
    break
    };

  while (num >= 900){
    num = num - 900;
    romanArray.push(romanSymbols[1]);
    if (num < 900)
    break
    };

  while (num >= 500){
    num = num - 500;
    romanArray.push(romanSymbols[2]);
    if (num < 500)
    break
    };

  while (num >= 400){
    num = num - 400;
    romanArray.push(romanSymbols[3]);
    if (num < 400)
    break
    };

  while (num >= 100){
    num = num - 100;
    romanArray.push(romanSymbols[4]);
    if (num < 100)
    break
    };

  while (num >= 90){
    num = num - 90;
    romanArray.push(romanSymbols[5]);
    if (num < 90)
    break
    };

  while (num >= 50){
    num = num - 50;
    romanArray.push(romanSymbols[6]);
    if (num < 50)
    break
    };

  while (num >= 40){
    num = num - 40;
    romanArray.push(romanSymbols[7]);
    if (num < 40)
    break
    };

  while (num >= 10){
    num = num - 10;
    romanArray.push(romanSymbols[8]);
    if (num < 10)
    break
    };

  while (num >= 9){
    num = num - 9;
    romanArray.push(romanSymbols[9]);
    if (num < 9)
    break
    };

  while (num >= 5){
    num = num - 5;
    romanArray.push(romanSymbols[10]);
    if (num < 5)
    break
    };

  while (num >= 4){
    num = num - 4;
    romanArray.push(romanSymbols[11]);
    if (num < 4)
    break
    };

  while (num >= 1){
    num = num - 1;
    romanArray.push(romanSymbols[12]);
    if (num < 1)
    break
    };
    return romanArray.join('');
    // return romanArray
};






// user logic

$(document).ready(function() {
 $("form#user").submit(function(event) {
   event.preventDefault();

   $("div.result").show();

   var num = parseInt($("input#entry").val());

   THIS LINE WILL NEED TO BE ADJUSTED TO FIT
   var result = roman(num);

       $(".outcome").text(result);
 });
});
