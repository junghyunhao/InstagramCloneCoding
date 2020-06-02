const bothValue = document.querySelector(".formcontainer");
const logInBtn = document.querySelector("#login-form-submit");


bothValue.addEventListener('keypress', function() {
  const IdValue = document.querySelector("#username-field").value;
  const PwValue = document.querySelector("#password-field").value;


  if (IdValue&&PwValue) {
    logInBtn.style.backgroundColor = "#0095f6";
  }
})


logInBtn.addEventListener("click", function () {
  location = window.open('main.html');
})