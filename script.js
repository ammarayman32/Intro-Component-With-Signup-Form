const claimBtn = document.getElementById("claimBtn");
const inputs = document.querySelectorAll("input");
const validate = document.querySelectorAll(".validate");

const regexName = /^[A-Za-z]+$/;
const regexPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setError(input, messageElement) {
  input.classList.add("error");
  messageElement.style.display = "block";
  input.placeholder = "";
}

function setSuccess(input, messageElement) {
  input.classList.remove("error");
  messageElement.style.display = "none";
}

claimBtn.addEventListener("click", () => {
  for (let i = 0; i < inputs.length; i++) {
    const value = inputs[i].value.trim();
    let isValid = true;
    if (value === "") {
      isValid = false;
    } else if (inputs[i].dataset.type === "name") {
      isValid = regexName.test(value);
    } else if (inputs[i].dataset.type === "email") {
      isValid = regexEmail.test(value);
    } else if (inputs[i].dataset.type === "password") {
      isValid = regexPassword.test(value);
    }

    if (!isValid) {
      setError(inputs[i], validate[i]);
    } else {
      setSuccess(inputs[i], validate[i]);
    }
  }
});
