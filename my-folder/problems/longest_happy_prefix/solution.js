var longestPrefix = function (s) {
  for (let i = 1; i < s.length; i++) {
    let prefix = s.slice(0, s.length - i);
    let suffix = s.slice(i);
    if (suffix === prefix) return suffix;
  }
  return "";
};