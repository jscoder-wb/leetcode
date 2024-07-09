var commonChars = function (words) {
  let charFreqs = new Map();
  for (let char of words[0]) {
    charFreqs.set(char, (charFreqs.get(char) || 0) + 1);
  }
  for (let i = 1; i < words.length; i++) {
    let wordFreqs = new Map();
    for (let char of words[i]) {
      wordFreqs.set(char, (wordFreqs.get(char) || 0) + 1);
    }
    for (let [char, freq] of charFreqs) {
      if (wordFreqs.has(char))
        charFreqs.set(char, Math.min(freq, wordFreqs.get(char)));
      else charFreqs.delete(char)
    }
  }
  let result = [];
  for (let [char, freq] of charFreqs) {
    for (let i = 0; i < freq; i++) {
      result.push(char);
    }
  }
  return result;
};
// watch codestory for understanding