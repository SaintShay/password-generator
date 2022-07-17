// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // function has to be created before it can be called
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function generatePassword() {
    // passLength will hold the digit number of the password, and will be checked later.
     var passLength = window.prompt(" Hello! What length would you like your password to be? Please enter a number between 8 and 128.");

     if (!passLength) {
      alert("You must choose a password length to continue!")
      passLength = prompt("Try again, type down the desired length of your password. Between 8-128 characters.")
  
    }else if (passLength < 8 || passLength > 128) {
      alert("The password length must be at least 8 characters and no more than 128 characters.")
      passLength = prompt("Whoops, please type the desired length of your password. Between 8-128 characters.")
  
    }else
    alert(`Your desired password will have ${passLength} characters.`)

    passLower = window.confirm("Click OK if you would like your password to include lowercase characters.");
    passUpper = window.confirm("Click OK if you would like your password to include uppercase characters.");
    passNumber = window.confirm("Click OK if you would like your password to include numerical characters.");
    passSpecial = window.confirm("Click OK if you would like your password to include special characters.");

    if (!passNumber && !passSpecial && !passUpper && !passLower) {
      alert("You must confirm at least one of the options.")
      passLower = window.confirm("Click OK if you would like your password to include lowercase characters.");
      passUpper = window.confirm("Click OK if you would like your password to include uppercase characters.");
      passNumber = window.confirm("Click OK if you would like your password to include numerical characters.");
      passSpecial = window.confirm("Click OK if you would like your password to include special characters.");
    }
    var userPasswordChar = [];
  var passRandom = "";

  // The foor loop to generate password amongst the options that will be chosen
 

  if (passNumber) {
    userPasswordChar = userPasswordChar.concat(number)
  }
  
  if (passSpecial) {
    userPasswordChar = userPasswordChar.concat(special)
  }

  if (passUpper) {
    userPasswordChar = userPasswordChar.concat(upper)
  }

  if (passLower) {
    userPasswordChar = userPasswordChar.concat(lower)
  }

  for (var i = 0; i < passLength; i++) {
    passRandom = passRandom + userPasswordChar[Math.floor(Math.random() * userPasswordChar.length)];
}

  return passRandom;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
