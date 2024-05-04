// const email = document.getElementById('email'),
//   password = document.getElementById('password'),
//   emailErr = document.getElementById('emailError'),
//   passErr = document.getElementById('passwordError'),
//   logInArea = document.getElementById('logInArea'),
//   logIn = document.getElementById('logIn');

const email = document.getElementById('email');
const password = document.getElementById('password');
const emailErr = document.getElementById('emailError');
const passErr = document.getElementById('passwordError');
const logInArea = document.getElementById('logInArea');
const logIn = document.getElementById('logIn');

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
    emailErr.setAttribute('class', 'fa-regular fa-circle-check');
    emailErr.setAttribute('style', 'color: green');
    email.setAttribute('style', 'border-bottom: 2px solid green');
  } else {
    email.setAttribute('style', 'border-bottom: 2px solid red');
  }
}
function checkPassword() {
  if (password.value != '') {
    password.setAttribute('style', 'border-bottom: 2px solid green');
  } else {
    password.setAttribute('style', 'border-bottom: 2px solid red');
  }
}
function doValidate() {
  checkEmail();
  checkPassword();
}
