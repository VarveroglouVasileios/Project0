const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const passwordInput = document.querySelector("#password");
const validations = document.querySelectorAll(".validation");
const submitButton = document.querySelector("#submit-button");

emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);

function validateEmail() {
  const email = emailInput.value;
  console.log(email);
  if (/^\S+@\S+\.\S+$/.test(email)) {
    emailInput.style.borderColor = "green";
    emailError.textContent = "";
  } else {
    emailInput.style.borderColor = "red";
    emailError.textContent = "Please enter a valid email address";
  }
  checkFormValidity();
}

function validatePassword() {
  const password = passwordInput.value;
  let validCount = 0;

  if (password.length >= 8 && password.length <= 15) {
    validations[0].classList.remove("invalid");
    validations[0].classList.add("valid");
    validCount++;
  } else {
    validations[0].classList.remove("valid");
    validations[0].classList.add("invalid");
  }

  if (/\d/.test(password)) {
    validations[1].classList.remove("invalid");
    validations[1].classList.add("valid");
    validCount++;
  } else {
    validations[1].classList.remove("valid");
    validations[1].classList.add("invalid");
  }

  if (/[a-z]/.test(password)) {
    validations[2].classList.remove("invalid");
    validations[2].classList.add("valid");
    validCount++;
  } else {
    validations[2].classList.remove("valid");
    validations[2].classList.add("invalid");
  }

  if (/[A-Z]/.test(password)) {
    validations[3].classList.remove("invalid");
    validations[3].classList.add("valid");
    validCount++;
  } else {
    validations[3].classList.remove("valid");
    validations[3].classList.add("invalid");
  }

  if (/[#@$&*!|,.^/\+\-_]/.test(password)) {
    validations[4].classList.remove("invalid");
    validations[4].classList.add("valid");
    validCount++;
  } else {
    validations[4].classList.remove("valid");
    validations[4].classList.add("invalid");
  }

  if (validCount === 5) {
    passwordInput.style.borderColor = "green";
  } else {
    passwordInput.style.borderColor = "red";
  }

  checkFormValidity();
}

// function validatePassword() {
//   const password = passwordInput.value;
//   console.log(password);
//   let validCount = 0;
//   if (password.length >= 8 && password.length <= 15) {
//     validations[0].classList.remove("invalid");
//     validations[0].classList.add("valid");
//     validCount++;
//   } else {
//     validations[0].classList.remove("valid");
//     validations[0].classList.add("invalid");
//   }
//   if (/\d+/.test(password)) {
//     validations[1].classList.remove("invalid");
//     validations[1].classList.add("valid");
//     validCount++;
//   } else {
//     validations[1].classList.remove("valid");
//     validations[1].classList.add("invalid");
//   }
//   if (/[a-z]+/.test(password)) {
//     validations[2].classList.remove("invalid");
//     validations[2].classList.add("valid");
//     validCount++;
//   } else {
//     validations[2].classList.remove("valid");
//     validations[2].classList.add("invalid");
//   }
//   if (/[A-Z]/.test(password) && password.match(/[A-Z]/g).length >= 1) {
//     validations[3].classList.remove("invalid");
//     validations[3].classList.add("valid");
//     validCount++;
//   } else {
//     validations[3].classList.remove("valid");
//     validations[3].classList.add("invalid");
//   }
//   if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?#]+/.test(password)) {
//     validations[4].classList.remove("invalid");
//     validations[4].classList.add("valid");
//     validCount++;
//   } else {
//     validations[4].classList.remove("valid");
//     validations[4].classList.add("invalid");
//   }
//   if (validCount === 5) {
//     passwordInput.style.borderColor = "green";
//   } else {
//     passwordInput.style.borderColor = "red";
//   }
//   checkFormValidity();
// }

function checkFormValidity() {
  if (
    emailInput.style.borderColor === "green" &&
    passwordInput.style.borderColor === "green"
  ) {
    submitButton.disabled = false;
    submitButton.style.backgroundColor = "green";
  } else {
    submitButton.disabled = true;
    submitButton.style.backgroundColor = "gray";
  }
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const btn = document.querySelector(".register__successful-message");
  btn.style.display = "block";
});
