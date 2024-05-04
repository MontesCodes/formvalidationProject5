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
    emailErr.removeAttribute('aria-label');
    return true;
  } else {
    email.setAttribute('style', 'border-bottom: 2px solid red');
    emailErr.setAttribute('class', 'fa-solid fa-circle-exclamation');
    emailErr.setAttribute('style', 'color: red');
    emailErr.setAttribute('aria-label', 'Please enter a valid email address');
    return false;
  }
}
function checkPassword() {
  if (password.value != '') {
    password.setAttribute('style', 'border-bottom: 2px solid green');
    passErr.setAttribute('class', 'fa-regular fa-circle-check');
    passErr.setAttribute('style', 'color: green');
    passErr.removeAttribute('aria-label');
    return true;
  } else {
    password.setAttribute('style', 'border-bottom: 2px solid red');
    passErr.setAttribute('class', 'fa-solid fa-circle-exclamation');
    passErr.setAttribute('style', 'color: red');
    passErr.setAttribute('aria-label', 'Please enter a valid password');
    return false;
  }
}
function doValidate() {
  let isLogIn = checkEmail();
  let isPassword = checkPassword();
  if (isLogIn && isPassword) {
    logIn.innerHTML = `Authenticating <span class="fa-solid fa-spinner fa-spin fa-xl"></span>`;
    setTimeout(function () {
      logIn.innerHTML = `Logged Successfully! &nbsp; <span class="fa-solid fa-check-circle fa-xl"></span>`;
      logIn.setAttribute('style', 'background-color: green');
      setTimeout(function () {
        email.value = '';
        email.classList.remove('valid');
        password.value = '';
        password.classList.remove('valid');

        logIn.removeAttribute('style');

        setTimeout(() => {
          logIn.innerHTML = 'Log In';
        }, 1000);
      }, 1000);
    }, 2000);
  }
}
