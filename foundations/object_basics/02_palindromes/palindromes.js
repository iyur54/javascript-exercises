const palindromes = function (word) {
  const alphanumerical = "abcdefghijklmnopqrstuvwxyz"
    + "01234567890"
  
  const cleanedString = word
    .split("")
    .map(char => char.toLowerCase())
    .filter(char => alphanumerical.includes(char))
    .join("")
  
  const reversedString = cleanedString
    .split("")
    .reverse()
    .join("")
  
  return cleanedString === reversedString
};

'racecar'

// Do not edit below this line
module.exports = palindromes;
