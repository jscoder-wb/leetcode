/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
   if (word.length < 3) return false;

  const vowels = "aeiouAEIOU";
  const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHIJKLMNPQRSTVWXYZ";
  const inValid = '@#$'
  let hasVowel = false;
  let hasConsonant = false;
  let hasInvalid = false 
  
  for (const char of word) { 
    if (vowels.includes(char)) {
      hasVowel = true;
    } else if (consonants.includes(char)) { 
      hasConsonant = true;
    } else if (inValid.includes(char)){
      hasInvalid = true
    }
  } 
  return hasInvalid ? false : hasVowel && hasConsonant; 
};