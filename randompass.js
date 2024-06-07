function generatePassword(
  length,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includeSpecialChars
) {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()_+-=";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowerCase ? lowerCase : "";
  allowedChars += includeUpperCase ? upperCase : "";
  allowedChars += includeNumbers ? numbers : "";
  allowedChars += includeSpecialChars ? specialChars : "";

  if (length < 0) {
    return `Password length should be greater than 0`;
  }
  if (allowedChars.length === 0) {
    return `At least 1 set of character needs to be selected`;
  }
  for (let i = 0; i < length; i++) {
    const val = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[val];
  }
  console.log(password);
  document.getElementById("pass").textContent = password;
}

const passwordlength = 10;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSpecialChars = true;

generatePassword(
  passwordlength,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includeSpecialChars
);
