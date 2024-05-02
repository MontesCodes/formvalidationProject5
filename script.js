const email = document.getElementById('email'),
  password = document.getElementById('password'),
  emailErr = document.getElementById('emailError'),
  passErr = document.getElementById('passwordError'),
  logInArea = document.getElementById('logInArea'),
  logIn = document.getElementById('logIn');

function checkFieldEmpty(e) {
  if (e.value != '') {
    e.classList.add('valid');
  } else {
    e.classList.remove('valid');
  }
}

function checkEmail() {
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.value.match(pattern)) {
  } else {
  }
}
function checkPassword() {}
function doValidate() {}
