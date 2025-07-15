// En konstant nyckel som används som "etikett" i localStorage
// Det här gör att vi enkelt kan ändra nyckeln på ett ställe om det behövs
const USERNAME_KEY = "bucketlist_username";

//  Spara användarnamnet i localStorage
export function saveUsername(name: string): void {
  localStorage.setItem(USERNAME_KEY, name);
}

// Hämta det sparade användarnamnet från localStorage
export function getUsername(): string | null {
  return localStorage.getItem(USERNAME_KEY);
}

// Rensa användarnamnet från localStorage (t.ex. vid utloggning)
export function clearUsername(): void {
  localStorage.removeItem(USERNAME_KEY);
}
