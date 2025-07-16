// importera typer och moduler
import type { BucketListItem } from "../models/bucketListItems";
import { getUsername } from "../utils/user.js";
import { getSavedDreams, saveDreams } from "../utils/storage.js";
import { dreams as defaultDreams } from "../variables.js";

// drömmarna från LS, om tom - ta från variables.js
let dreams: BucketListItem[] = getSavedDreams() || defaultDreams;

// för att visa användarnamnet i header
const usernameSpan = document.getElementById("user-name");
const username = getUsername();

if (usernameSpan && username) {
  usernameSpan.textContent = username;
}

// Ul-element där drömmarna ska visas
const dreamListElement = document.querySelector(
  ".dream-list"
) as HTMLUListElement;

// REndera drömmar

function renderDreams(): void {
  dreamListElement.innerHTML = "";

  dreams.forEach((dream) => {
    const listItem = document.createElement("li");
    listItem.classList.add("dream-list_item");

    const checkbox = document.createElement("input");
    checkbox.classList.add(".dream-check");
    checkbox.type = "checkbox";

    // streck över checked dreams
    const label = document.createElement("label");
    label.htmlFor = checkbox.id;
    label.innerHTML = dream.checked
      ? `<s>${dream.name}</s>, <span class="dream-theme">${dream.theme}</span>`
      : `${dream.name}, <span class="dream-theme">${dream.theme}</span>`;

    checkbox.addEventListener("change", () => {
      dream.checked = checkbox.checked;
      saveDreams(dreams);
      renderDreams();
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    dreamListElement.appendChild(listItem);
  });
}

renderDreams();
