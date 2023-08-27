
let userName = document.getElementsByName("username");
let passwordInput = document.getElementById("password");
let toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", () => {
    if (passwordInput.type == "password") {
      passwordInput.type = "text";
    }
    else {
      passwordInput.type = "password";
    }
  })