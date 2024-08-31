var generateKey = function (num1, num2, num3) {
  const str1 = num1.toString().padStart(4, '0');
  const str2 = num2.toString().padStart(4, '0');
  const str3 = num3.toString().padStart(4, '0');

  let key = '';
  for (let i = 0; i < 4; i++) {
    const minDigit = Math.min(
      parseInt(str1[i], 10),
      parseInt(str2[i], 10),
      parseInt(str3[i], 10)
    );
    key += minDigit;
  }
  return parseInt(key, 10);
};