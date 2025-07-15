/* login validering/logik*/

import { saveUsername } from "../utils/user.js";
import { isUsernameValid, isPasswordValid } from "../utils/validators.js";

// elementreferenser
const form = document.querySelector("form") as HTMLFormElement;
const usernameInput = document.getElementById("username") as HTMLInputElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;
const togglePasswordBtn = document.querySelector(
  ".toggle-password"
) as HTMLButtonElement;
const usernameError = document.getElementById(
  "username-error-message"
) as HTMLParagraphElement;
const passwordError = document.getElementById(
  "password-error-message"
) as HTMLParagraphElement;

// Togglar lösenordsynlighet
togglePasswordBtn.addEventListener("click", () => {
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});

//  Huvudfunktion för att hantera inloggning
function handleLoginSubmit(e: SubmitEvent): void {
  e.preventDefault(); // Förhindrar att formuläret skickas direkt

  const username = usernameInput.value.trim();
  const password = passwordInput.value;
  let isValid = true;

  // Validering: användarnanm
  if (!isUsernameValid(username)) {
    usernameError.style.display = "block";
    isValid = false;
  } else {
    usernameError.style.display = "none";
  }

  // Validering: lösenord
  if (!isPasswordValid(password)) {
    passwordError.textContent = "Lösenordet måste vara minst 4 tecken.";
    passwordError.style.display = "block";
    isValid = false;
  } else {
    passwordError.style.display = "none";
  }

  // Avbryt om ogiltig input
  if (!isValid) return;

  // Spara användarnamn i localStorage
  saveUsername(username);

  // Tillåt navigering till dashboard (form har action="dashboard.html")
  form.submit(); // <- Viktigt nu när vi preventDefault ovan!
}

form.addEventListener("submit", handleLoginSubmit);

// form.addEventListener("submit", (e) => {
//   const username = usernameInput.value.trim();
//   const password = passwordInput.value;

//   let isValid = true;

//   if (!isUsernameValid(username)) {
//     usernameError.style.display = "block";
//     isValid = false;
//   } else {
//     usernameError.style.display = "none";
//   }

//   if (!isPasswordValid(password)) {
//     passwordError.textContent = "Lösenordet måste vara minst 4 tecken.";
//     passwordError.style.display = "block";
//     isValid = false;
//   } else {
//     passwordError.style.display = "none";
//   }

//   if (!isValid) {
//     e.preventDefault();
//     return;
//   }
//   saveUsername(username);
// });
