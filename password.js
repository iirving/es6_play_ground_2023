function checkPassword(password) {
  const valid = password.length > 6;
  let message = "";
  if (valid) {
    message = "Password is valid";
    console.log(message);
    return true;
  } else {
    message = "Password is not valid";
    console.log(message);
    return false;
  }
}

checkPassword("1234567"); // Password is valid
checkPassword("123"); // Password is not valid`
