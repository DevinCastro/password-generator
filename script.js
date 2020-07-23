// Assignment Code
var generateBtn = document.querySelector("#generate");


let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
let special = ['+', '-', '&', '!', '(', ')', '{', '}', '[', ']', '^', '~', '*', '?', ':']


function generatePassword() {
  let length = prompt('How many characters would you like the password to be? (Between 8-128)')
  let upperChoice = confirm('Would you like upper case characters?')
  let lowerChoice = confirm('Would you like lower case characters?')
  let numberChoice = confirm('Would you like numbers?')
  let specialChoice = confirm('Would you like special characters?')
  let password = ''

  if (upperChoice) {
    for (i = 1; i <= length; i++) {
      password += upperCase[Math.floor(Math.random() * upperCase.length)]
      console.log(i)
    }
  } else if (lowerChoice) {
    for (i = 1; i <= length; i++) {
      password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
      console.log(i)
    }
  } else if (numberChoice) {
    for (i = 1; i <= length; i++) {
      password += numbers[Math.floor(Math.random() * numbers.length)]
      console.log(i)
    }
  } else if (specialChoice) {
    for (i = 1; i <= length; i++) {
      password += special[Math.floor(Math.random() * special.length)]
      console.log(i)
    }
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
