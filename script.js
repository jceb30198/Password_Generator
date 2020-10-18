// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password character bank.
var uppercaseCharacter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberCharacter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharacter = ["!", "@", "#", "$", "%", "&", "*", "(", ")", "{", "}"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
  
function generatePassword() {

  // Prompt to determine password length.
  var passwordLength = parseInt(prompt("How long would you like the password to be? Please choose between 8 and 128 characters."));
    
  // If else statement for determining length of password.
  if (passwordLength === "" || passwordLength < 8 || passwordLength > 128) {
    alert("Please input a number between 8 and 128.");
    console.log("error"); // Test Point
  }
  else {
    // Booleans to confirm whether to put variables into generator. Only if password is between 8 and 128.
    var confirmNumber = confirm("Would you like numbers in the password?");
    var confirmSpecial = confirm("Would you like special characters in the password?");
    var confirmLowercase = confirm("Would you like lowercase letters in the password?");
    var confirmUppercase = confirm("Would you like uppercase letters in the password?");
  }

  // Booleans confirm check.
  if (confirmNumber == false && confirmSpecial == false && confirmUppercase == false && confirmLowercase == false) {
    alert("Must accept at least one of the criteria.");

    console.log("error"); // Test Point
  }

  // Collection of the different characters.
  var passwordArray = [];
  
  // Character Selection.
  if (confirmNumber) {
    var passwordArray = passwordArray.concat(numberCharacter);

    console.log("success_1"); // Test Point
  }

  if (confirmSpecial) {
    var passwordArray = passwordArray.concat(specialCharacter);

    console.log("success_2"); // Test Point
  }

  if (confirmLowercase) {
    var passwordArray = passwordArray.concat(lowercaseCharacter);

    console.log("success_3"); // Test Point
  }

  if (confirmUppercase) {
    var passwordArray = passwordArray.concat(uppercaseCharacter);

    console.log("success_4"); // Test Point
  }
  
  // String must be outside of looop because it will show up as undefined if it is inside.
  var finalPassword = ""

  // Loop to make sure that the length of the password is met.
  for ( var i = 0; i < passwordLength; i++) {
    finalPassword = finalPassword + passwordArray[Math.floor(Math.random() * passwordArray.length)];

    console.log(finalPassword); // Test Point
  }

  return finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);