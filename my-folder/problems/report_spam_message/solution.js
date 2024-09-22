var reportSpam = function (message, bannedWords) {
  const bannedSet = new Set(bannedWords);
  let count = 0; 
  for (let word of message) { 
    if (bannedSet.has(word)) {
      count++;
    } 
    if (count >= 2) {
      return true;
    }
  } 
  return false;
};