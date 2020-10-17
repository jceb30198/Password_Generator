// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
    
    var passwordLength = prompt("How long would you like the password to be? Please choose between 8 and 128 characters.")
    
    if (passwordLength === "" || passwordLength < 8 || passwordLength > 128) {
      alert("Please input a number between 8 and 128.");
      console.log("error");
    }
    else if (passwordLength >= 8 || passwordLength <= 128) {
      console.log("Good");
    }
    
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
