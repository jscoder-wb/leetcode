var minWindow = function (s, t) {
  let map = {}, uniqueChars = 0
  for (let char of t) {
    if (char in map) map[char]++
    else {
      map[char] = 1
      uniqueChars++
    }
  }
  let ans = "", left = 0, match = 0
  for (let right = 0; right < s.length; right++) {
    let rightChar = s[right]
    if (rightChar in map) {
      map[rightChar]--
      if (map[rightChar] === 0) match++
    }
    if (match === uniqueChars) {
      while (match === uniqueChars) {
        let leftChar = s[left++]
        map[leftChar]++
        if (map[leftChar] > 0) match--
      }
      let solution = s.slice(left - 1, right + 1)
      ans =
        ans === "" ? solution : ans.length > solution.length ? solution : ans
    }
  }
  return ans
}