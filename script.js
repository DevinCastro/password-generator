// Assignment Code
var generateBtn = document.querySelector("#generate");




function generatePassword() {

  let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  let special = ['+', '-', '&', '!', '(', ')', '{', '}', '[', ']', '^', '~', '*', '?', ':']
  let totalPossibleCharacters = []
  let length = prompt('How many characters would you like the password to be? (Between 8-128)')
  let upperChoice = confirm('Would you like upper case characters?')
  let lowerChoice = confirm('Would you like lower case characters?')
  let numberChoice = confirm('Would you like numbers?')
  let specialChoice = confirm('Would you like special characters?')
  let password = ''

  if (length < 8 || length > 128) {
    return 'Error: Please choose a password between 8 and 128 characters.'
  }

  if (upperChoice) {
    totalPossibleCharacters.push.apply(totalPossibleCharacters, upperCase)
  }
  if (lowerChoice) {
    totalPossibleCharacters.push.apply(totalPossibleCharacters, lowerCase)
  }
  if (numberChoice) {
    totalPossibleCharacters.push.apply(totalPossibleCharacters, numbers)
  }
  if (specialChoice) {
    totalPossibleCharacters.push.apply(totalPossibleCharacters, special)
  }


  if (totalPossibleCharacters.length === 0) {
    return 'Error: Please choose at least one character type.'
  }
  console.log(totalPossibleCharacters)

  for (i = 1; i <= length; i++) {
    password += totalPossibleCharacters[Math.floor(Math.random() * totalPossibleCharacters.length)]
  }

  return password
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
