// Assignment Code
var generateBtn = document.querySelector("#generate");



// First lets create a function and call it generatePassword.
const generatePassword = _ => {


  // Create 4 arrays that contain each possible character for the corresponding type
  let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  let special = ['+', '-', '&', '!', '(', ')', '{', '}', '[', ']', '^', '~', '*', '?', ':']

  // create an array to contain the TYPES of characters that the user wants in the password
  let possibleTypes = []

  // create an array that will contain all possible types of characters for the length of the password the user wants
  let totalPossibleCharacters = []

  let password = ''
  // prompt the user to 
  let length = prompt('How many characters would you like the password to be? (Between 8-128)')

  // This is the fail safe for the length of Characters.  If user enters a number outisde of 8-128.  The Error message will display
  if (length < 8 || length > 128) {
    return 'Error: Please choose a password between 8 and 128 characters.'
  }



  // Prompt user to select different character types
  let upperChoice = confirm('Would you like upper case characters?')
  let lowerChoice = confirm('Would you like lower case characters?')
  let numberChoice = confirm('Would you like numbers?')
  let specialChoice = confirm('Would you like special characters?')

  // This series of if statements pushes the "types" of characters that that user chooses into the array called possibleTypes
  if (upperChoice) {
    possibleTypes.push('upperCase')
  }
  if (lowerChoice) {
    possibleTypes.push('lowerCase')
  }
  if (numberChoice) {
    possibleTypes.push('numbers')
  }
  if (specialChoice) {
    possibleTypes.push('special')
  }

  // this is the fail safe to make sure the user chooses at least one character type or spits out an error
  if (possibleTypes.length === 0) {
    return 'Error: Please choose at least one character type.'
  }
  console.log(possibleTypes)

  //randomly assign a character type to each character of the password and store those values in totalPossibleCharacters
  for (i = 0; i < length; i++) {
    totalPossibleCharacters.push(possibleTypes[Math.floor(Math.random() * possibleTypes.length)])
  }

  //check if password will have at least one of each type of requested character before moving forward, notice i must start at 0 because the possibleType array index starts at 0!!!
  for (i = 0; i < possibleTypes.length; i++) {

    if (totalPossibleCharacters.includes(possibleTypes[i])) {
      console.log('Got at least one of each user selected element')
      //if it will have at least one of each type of requested character...

      // for (i = 1; i <= length; i++) {
      //   password += possibleTypes[Math.floor(Math.random() * possibleTypes.length)]
      // }

    } else {
      console.log('Didnt get one of each')

      // If the randomization fails to use at least one of each character type that the use chose, we reset the array and password;then try again
      totalPossibleCharacters = []
      // reset the loop
      i = 0
      //randomly assigns a character type to each character of the password, stored in array pwType
      for (i = 0; i < length; i++) {
        totalPossibleCharacters.push(possibleTypes[Math.floor(Math.random() * possibleTypes.length)])
      }
    }
  }



  // Create a loop that passes and index through the totalPossibleCharacters array ('length' many times) and concatenate our password string
  for (let i = 0; i < length; i++) {

    // these conditional statments cover the possible character types that 'totalPossibleCharacters" can be
    if (totalPossibleCharacters[i] === 'upperCase') {
      password += upperCase[Math.floor(Math.random() * upperCase.length)]
    } else if (totalPossibleCharacters[i] === 'lowerCase') {
      password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    } else if (totalPossibleCharacters[i] === 'numbers') {
      password += numbers[Math.floor(Math.random() * numbers.length)]
    } else if (totalPossibleCharacters[i] === 'special') {
      password += special[Math.floor(Math.random() * special.length)]
    }
  }

  // this ends the function and assigns the value of password to the function
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
