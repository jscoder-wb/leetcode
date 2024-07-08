var reversePrefix = function(word, ch) {
  let chIndex = word.indexOf(ch)
  if (chIndex < 0) return word
  let result = ''
  for (let i = chIndex; i >= 0; i--) 
    result += word[i]   
  for (let i = chIndex + 1; i < word.length; i++) 
    result += word[i] 
  return result
};