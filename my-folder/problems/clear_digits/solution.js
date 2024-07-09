function clearDigits(inputString) {
  while (true) {
    let digitFound = false;
    for (let i = 0; i < inputString.length; ++i) {
      if (/\d/.test(inputString[i])) {
        digitFound = true; 
        for (let j = i - 1; j >= 0; --j) {
          if (!/\d/.test(inputString[j])) { 
            inputString = inputString.slice(0, j) + inputString.slice(i + 1);
            break;
          }
        }
        break;
      }
    }
    if (!digitFound) break; 
  }
  return inputString;
} 