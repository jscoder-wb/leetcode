var countKConstraintSubstrings = function (s, k) {
  let allSubstrings = [];
  for (let i = 0; i < s.length; i++)
    for (let j = i + 1; j <= s.length; j++)
      allSubstrings.push(s.substring(i, j));
  function check(str) {
    let map = {}
    for (let ch of str) {
      map[ch] ? map[ch]++ : map[ch] = 1
      if (map["1"] > k && map["0"] > k) // demorgan law
        return false
    }
    return true
  }
  let count = 0
  for (let str of allSubstrings) {
    if (check(str))
      count++
  }
  return count
};