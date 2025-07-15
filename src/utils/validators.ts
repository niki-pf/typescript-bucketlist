// Kontrollera att användarnamnet inte är tomt
export function isUsernameValid(name: string): boolean {
  // Tar bort mellanslag och kollar om längden > 0
  return name.trim().length > 0;
}

//  Kontrollera att lösenordet är minst 4 tecken långt
export function isPasswordValid(password: string): boolean {
  // Tar bort mellanslag och kollar om längden är >= 4
  return password.trim().length >= 4;
}
