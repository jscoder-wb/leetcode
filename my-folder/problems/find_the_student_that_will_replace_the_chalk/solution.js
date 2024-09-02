var chalkReplacer = function (chalk, initialChalkPieces) {
  let totalChalk = chalk.reduce((sum, studentChalkUse) => sum + studentChalkUse, 0);
  let remainingChalk = initialChalkPieces % totalChalk;

  for (let i = 0; i < chalk.length; i++) {
    if (remainingChalk < chalk[i]) {
      return i;
    }
    remainingChalk -= chalk[i];
  }
  return 0;
};