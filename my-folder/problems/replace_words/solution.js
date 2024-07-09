const replaceWords = (dictionary, sentence) => {
  const dict = new Set(dictionary);
  const words = sentence.split(' ');
 
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (dict.has(words[i].substring(0, j)))
        words[i] = words[i].substring(0, j);
    }
  }
  return words.join(' ')
};