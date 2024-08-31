var stringHash = function (s, k) {
  const getHashValue = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0);
  let result = '';

  for (let i = 0; i < s.length; i += k) {
    const substring = s.slice(i, i + k);
    let sum = 0;
    for (const char of substring) {
      sum += getHashValue(char);
    }
    const hashedChar = sum % 26;
    const resultChar = String.fromCharCode('a'.charCodeAt(0) + hashedChar);
    result += resultChar;
  }
  return result;
};