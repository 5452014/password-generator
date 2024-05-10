const generateBtn = document.querySelector(".button");
const inputField = document.querySelector(".input-field");
const copyIcon = document.querySelector(".copy-icon");

const generatePassword = (length = 8) => {
    const alphabetChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const specialChars = "@#$%^&";
  
    let password = "";
    // Generate alphabets
  for (let i = 0; i < length / 3; i++) {
    let randomNumber = Math.floor(Math.random() * alphabetChars.length);
    password += alphabetChars[randomNumber];
  }

   // Generate numbers
   for (let i = 0; i < length / 3; i++) {
    let randomNumber = Math.floor(Math.random() * numberChars.length);
    password += numberChars[randomNumber];
  }

  for (let i = 0; i < length / 3; i++) {
    let randomNumber = Math.floor(Math.random() * specialChars.length);
    password += specialChars[randomNumber];
  }
  password = password.split('').sort(() => Math.random() - 0.5).join('');

  return password;
};

generateBtn.addEventListener("click", function () {
    const generatedPassword = generatePassword(12);
    inputField.value = generatedPassword;
  });

  copyIcon.addEventListener("click", function () {
    inputField.select();
    document.execCommand("copy");
    setTimeout(() => {
      inputField.blur();
    }, 200);
  });