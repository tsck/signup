export function hasSpecialCharacter(str) {
  return /\W/.test(str);
}

export function hasLetter(str) {
  return /[a-zA-Z]/.test(str);
}

export function hasNumber(str) {
  return /\d/.test(str);
}

export function isValidPassword(str) {
  return hasSpecialCharacter(str) && hasLetter(str) && hasNumber(str);
}

export default {
  hasSpecialCharacter,
  hasLetter,
  hasNumber,
  isValidPassword,
};
