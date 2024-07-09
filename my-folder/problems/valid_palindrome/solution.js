var isPalindrome = function (s) {
  let newStr = ''
  for (let i = 0; i < s.length; i++) {
    if (isAlphanumeric(s[i].toLowerCase())) newStr += s[i].toLowerCase()
  }

  let left = 0, right = newStr.length - 1
  while (left < right) {
    if (newStr[left] !== newStr[right]) return false
    else {
      left++; right--
    }
  }
  return true
};
function isAlphanumeric(ch) {
  let set = new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])
  if (set.has(ch)) return true
  else return false
}
// self coding practice