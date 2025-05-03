// DESCRIPTION
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.


// naive approach --------------------------------------------------------------------
function isPalindrome(s) {
  let str = s.trim().toLowerCase();
  let cleaned = "";

  for (let i = 0; i < str.length; i++) {
    if (
      (str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122) ||
      (str[i].charCodeAt(0) >= 48 && str[i].charCodeAt(0) <= 57)
    ) {
      cleaned += str[i];
    }
  }

  if (cleaned === "") return true;

  let counter = cleaned.length - 1;
  for (let i = 0; i < counter; i++) {
    if (cleaned[i] === cleaned[counter]) {
      counter--;
    } else return false;
  }
  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome("   "));

// real two pointer approach ---------------------------------------------------------

function isPalindrome(s) {
  s = s.trim().toLowerCase();
  if (s === "") return true;
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphanumeric(s[left])) left++;
    while (left < right && !isAlphanumeric(s[right])) right--;
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}

function isAlphanumeric(character) {
  const code = character.charCodeAt(0);
  return (code >= 97 && code <= 122) || (code >= 48 && code <= 57);
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome("   "));

// note **************
// Check Using "Regex" (Remove non-alphanumeric characters and convert to lowercase) instead of function isAlphanumeric or not?
//
// const cleaned = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
// ---------------------------------
// ^ → negates the character set
// a-z → letters
// 0-9 → digits
// g → global (replace all matches)
// i → case-insensitive
// ---------------------------------
// ✅ Cleaner, more concise
// ❌ Slightly less efficient, since it creates a new string up front and does two full passes (clean + compare)
// --------------------------
