// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
    
    // Prompt to determine password length.
    var passwordLength = parseInt(prompt("How long would you like the password to be? Please choose between 8 and 128 characters."));
    
    // If else statement for determining length of password.
    if (passwordLength === "" || passwordLength < 8 || passwordLength > 128) {
      alert("Please input a number between 8 and 128.");
      console.log("error");
    }
    else {
      // Booleans to confirm whether to put variables into generator.
      var confirmNumber = confirm("Would you like numbers in the password?");
      var confirmSpecial = confirm("Would you like special characters in the password?");
      var confirmLowercase = confirm("Would you like lowercase letters in the password?");
      var confirmUppercase = confirm("Would you like uppercase letters in the password?");
    }
    console.log(confirmNumber);
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
