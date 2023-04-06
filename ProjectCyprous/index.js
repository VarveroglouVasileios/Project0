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

fetch("https://api.coinlore.net/api/tickers/")
  .then((response) => response.json())
  .then((data) => showData(data));

function showData(data) {
  const markup = `
  <div class="feature__item">
  <div class="feature__item-1">
    <img
      src="./assets/fonts/BITCOIN.png"
      alt="Bitcoin logo"
      class="feature__logo--1"
    />
    <p class="feature__title">${data.data[0].symbol}</p>
    <p class="feature__text">${data.data[0].name.toUpperCase()}</p>
  </div>
  <div class="feature__divider"></div>
  <div class="feature__item-2">
    <p class="feature__price">
      <span class="currency">$</span>${data.data[0].price_usd}
    </p>
    <p class="feature__percent">
      <i class="fa-solid fa-circle-chevron-up"></i>${
        data.data[0].percent_change_24h
      }%
    </p>
  </div>
</div>


<div class="feature__item">
            <div class="feature__item-1">
              <img
                src="./assets/imgs/ethereum.png"
                alt="Ethereum logo"
                class="feature__logo--2"
              />
              <p class="feature__title">${data.data[1].symbol}</p>
              <p class="feature__text">${data.data[1].name.toUpperCase()}</p>
            </div>
            <div class="feature__divider"></div>
            <div class="feature__item-2">
              <p class="feature__price">
                <span class="currency">$</span>${data.data[1].price_usd}
              </p>
              <p class="feature__percent">
                <i class="fa-solid fa-circle-chevron-down"></i
                ><span class="down">${data.data[1].percent_change_24h}%</span>
              </p>
            </div>
          </div>

          <div class="feature__item">
            <div class="feature__item-1">
              <img
                src="./assets/imgs/XRP.png"
                alt="XRP logo"
                class="feature__logo--3"
              />
              <p class="feature__title">${data.data[5].symbol}</p>
              <p class="feature__text">${data.data[5].name.toUpperCase()}</p>
            </div>
            <div class="feature__divider"></div>
            <div class="feature__item-2">
              <p class="feature__price">
                <span class="currency">$</span>${data.data[5].price_usd}
              </p>
              <p class="feature__percent">
                <i class="fa-solid fa-circle-chevron-up"></i>${
                  data.data[5].percent_change_24h
                }%
              </p>
            </div>
          </div>



          <div class="feature__item">
          <div class="feature__item-1">
            <img
              src="./assets/imgs/LTC.png"
              alt="LTC logo"
              class="feature__logo--4"
            />
            <p class="feature__title">${data.data[12].symbol}</p>
            <p class="feature__text">${data.data[12].name.toUpperCase()}</p>
          </div>
          <div class="feature__divider"></div>
          <div class="feature__item-2">
            <p class="feature__price">
              <span class="currency">$</span>${data.data[12].price_usd}
            </p>
            <p class="feature__percent">
              <i class="fa-solid fa-circle-chevron-down"></i>
              <span class="down">${data.data[12].percent_change_24h}%</span>
            </p>
          </div>
        </div>


        <div class="feature__item">
            <div class="feature__item-1">
              <img
                src="./assets/imgs/BCH.png"
                alt="BCH logo"
                class="feature__logo--5"
              />
              <p class="feature__title">${data.data[27].symbol}</p>
              <p class="feature__text">${data.data[27].name.toUpperCase()}</p>
            </div>
            <div class="feature__divider"></div>
            <div class="feature__item-2">
              <p class="feature__price">
                <span class="currency">$</span>${data.data[27].price_usd}
              </p>
              <p class="feature__percent">
                <i class="fa-solid fa-circle-chevron-up"></i>${
                  data.data[27].percent_change_24h
                }%
              </p>
            </div>
          </div>
  `;
  document.querySelector(".features").innerHTML = markup;
}
