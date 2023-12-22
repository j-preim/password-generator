// Assignment Code
var generateBtn = document.querySelector("#generate");

//Establish global variables
var alphaArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var numericArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialArray = [
  " ",
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

//Function to generate random numbers
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

//Function to generate random password
function generatePassword() {
  var password = "Try again!";

  var passwordLength = prompt(
    "Please enter the desired length of the password (between 8 and 128 characters)"
  );

  //Store the password length chosen by the user, if entered
  if (passwordLength == null) {
    return password;
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters!");
    return password;
  }

  var characterChoiceArray = [];

  //Store the character type(s) chosen by the user, if any selected
  var lowercase = confirm("Would you like to include lowercase characters?");
  if (lowercase) {
    characterChoiceArray.push("lowercase");
  }

  var uppercase = confirm("Would you like to include uppercase characters?");
  if (uppercase) {
    characterChoiceArray.push("uppercase");
  }

  var numeric = confirm("Would you like to include numeric characters?");
  if (numeric) {
    characterChoiceArray.push("numeric");
  }

  var special = confirm("Would you like to include special characters?");
  if (special) {
    characterChoiceArray.push("special");
  }

  if (!lowercase && !uppercase && !numeric && !special) {
    alert("You must include at least one type of character!");
    return password;
  }

  var passwordArray = [];

  //Loop through each password character, first establishing a random character type from those allowed, 
  //then choosing a random character from the character arrays above
  for (var i = 0; i < passwordLength; i++) {
    var characterType =
      characterChoiceArray[random(0, characterChoiceArray.length - 1)];

    if (characterType === "lowercase") {
      passwordArray.push(
        alphaArray[random(0, alphaArray.length - 1)].toLowerCase()
      );
    } else if (characterType === "uppercase") {
      passwordArray.push(alphaArray[random(0, alphaArray.length - 1)]);
    } else if (characterType === "numeric") {
      passwordArray.push(numericArray[random(0, numericArray.length - 1)]);
    } else if (characterType === "special") {
      passwordArray.push(specialArray[random(0, specialArray.length - 1)]);
    }
  }

  password = passwordArray.join("");

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
