var compress = function (chars) {
  if (!chars.length) return 0;
  let j = 0;
  let currentCharacter = chars[0];
  let counter = 1;
  for (let i = 1; i <= chars.length; i++) {
    if (chars[i] === currentCharacter) counter++;
    else {
      chars[j] = currentCharacter;
      if (counter > 1) {
        const s = counter.toString();
        for (let k = 0; k < s.length; k++) chars[++j] = s[k];
      }
      j++;
      currentCharacter = chars[i];
      counter = 1;
    }
  }
  return j;
};