const pass = document.querySelector('#password');
const conPass = document.querySelector('#confirm-password');
const error = document.querySelector('.error');

conPass.addEventListener('keyup', () => {
  if (pass.value !== conPass.value) {
    error.textContent = "* Passwords do not match";
    pass.style.border = "solid 2px red";
    conPass.style.border = "solid 2px red";
  } else {
    error.textContent = '';
    pass.style.border = "solid 2px green";
    conPass.style.border = "solid 2px green";
  };
});

