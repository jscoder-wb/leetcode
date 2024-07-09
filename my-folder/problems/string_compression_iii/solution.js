var compressedString = function (word) {
  let compressed = '';

  while (word.length > 0) {
    let char = word[0];
    let count = 1;
    while (count < 9 && count < word.length && word[count] === char) {
      count++;
    }
    compressed += count.toString() + char;
    word = word.slice(count);
  }

  return compressed;
};