document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const loginLink = document.getElementById("login-link");
  const registerLink = document.getElementById("register-link");

  // loginLink.addEventListener("click", function (e) {
  //     e.preventDefault();
  //     loginForm.classList.add("active-form");
  //     registerForm.classList.remove("active-form");
  // });

  // registerLink.addEventListener("click", function (e) {
  //     e.preventDefault();
  //     registerForm.classList.add("active-form");
  //     loginForm.classList.remove("active-form");
  // });

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");

  registerForm.addEventListener("submit", function (e) {
      e.preventDefault();
      let hasError = false;

      if (nameInput.value.trim() === "") {
          nameError.style.display = "block";
          hasError = true;
      } else {
          nameError.style.display = "none";
      }

      if (emailInput.value.trim() === "") {
          emailError.style.display = "block";
          hasError = true;
      } else {
          emailError.style.display = "none";
      }

      if (passwordInput.value.trim() === "") {
          passwordError.style.display = "block";
          hasError = true;
      } else {
          passwordError.style.display = "none";
      }

      if (hasError) {
          e.preventDefault();
      }
  });

  // Add event listeners to input fields to hide error messages on input
  nameInput.addEventListener("input", function () {
      nameError.style.display = "none";
  });

  emailInput.addEventListener("input", function () {
      emailError.style.display = "none";
  });

  passwordInput.addEventListener("input", function () {
      passwordError.style.display = "none";
  });
});

