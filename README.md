# Beep Boop

## Created by Lara Bjork on November 1, 2019

### Project Description
This project was completed as an independent project for week 3 of the Epicodus Introduction to Programming curriculum.

As stated in the prompt from Epicodus, the project objectives are to:

_Create a web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:_

* Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
* Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
* Numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, Dave. I'm afraid I can't do that."

_These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third. So, for example, in your finished program,_

* The number 13 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."
* The number 21 should be replaced with "Boop".
* The number 32 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."

_A user should be able to enter a new number and see new results over and over again._

I identified the following specifications (the second one came from the assignment instructions)
* Spec: The program alerts the user if they enter a negative number.
    * Input: "-111"
    * Output: Prompt to enter a number greater than 0, exact wording TBD.
* Spec: The program returns a range of numbers from 0 to the user's inputted number
    * Input: "4"
    * Output: "0, 1, 2, 3, 4"
* Spec: The program returns a range of numbers from 0 to the user's inputted number, substituting specified language for 1, 2, and 3.
    * Input: "54"
    * Output: "0, Beep!, Boop!, I'm sorry, Dave. I'm afraid I can't do that, 4, 5, ..."  
* Spec: If the digit 3 appears anywhere in a number that is part of the returned range, the program replaces all digits with "I'm sorry, Dave. I'm afraid I can't do that." in the correct position within the range of numbers.
    * Input: "4"
    * Output: "0, 1, 2, I'm sorry, Dave. I'm afraid I can't do that., 4"
    * Input: "15"
    * Output: "0, 1, 2, I'm sorry, Dave. I'm afraid I can't do that., 4, 5, 6, 7, 8, 9, 10, 11, 12, I'm sorry, Dave. I'm afraid I can't do that., 14, 15"
* Spec: If the digit 2 appears anywhere in a number that is part of the returned range, the program replaces all digits with "Boop!" in the correct position within the range of numbers.
    * Input: "4"
    * Output: "0, 1, Boop!, I'm sorry, Dave. I'm afraid I can't do that., 4"
    * Input: "15"
    * Output: "0, 1, Boop!, I'm sorry, Dave. I'm afraid I can't do that., 4, 5, 6, 7, 8, 9, 10, 11, Boop!', I'm sorry, Dave. I'm afraid I can't do that., 14, 15"    
* Spec: If the digit 1 appears anywhere in a number that is part of the returned range, the program replaces all digits with "Beep!" in the correct position within the range of numbers.
    * Input: "4"
    * Output: "0, Beep!, Boop!, I'm sorry, Dave. I'm afraid I can't do that., 4"
    * Input: "15"
    * Output: "0, Beep!, Boop!, I'm sorry, Dave. I'm afraid I can't do that., 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!', I'm sorry, Dave. I'm afraid I can't do that., Beep!, Beep!"   

### Technologies Used
HTML, CSS, Bootstrap 3.3.7, JavaScript, and jQuery v3.4.1 (uncompressed development version).
Project was written using Google Chrome; no other browsers were tested for compatibility.

### Project Setup instructions
There shouldn't be any special setup required. If something doesn't display correctly or goes wrong somehow, please contact me at  <lara.m.bjork@gmail.com> and I will do my best to troubleshoot for you.

### Known Issues
* The program can evaluate negative numbers, but does not return an error message if non-numerical entries (letters or punctuation, etc.) are entered.
* The program does not return an error message if nothing is entered.
* The user must refresh the page manually to enter a new number without the previous results being retained and added onto.


### Where to Find This project
GitHub repository: https://github.com/larabjork/beep-boop.git


### License
This software is licensed under the MIT license.

Copyright (c) 2019 Lara Bjork 
