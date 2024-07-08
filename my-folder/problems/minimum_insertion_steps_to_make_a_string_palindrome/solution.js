var minInsertions = function (s) {
  var longestPalindromeSubseq = function (s) {
    let longestCommonSubsequence = function (text1, text2) {
      const memo = new Map()
      function recursion(text1, text2, index1, index2) {
        if (index1 < 0 || index2 < 0) return 0
        const key = index1 + "#" + index2
        if (memo.has(key)) return memo.get(key)
        let result
        if (text1.charAt(index1) === text2.charAt(index2)) {
          result = recursion(text1, text2, index1 - 1, index2 - 1) + 1
        } else {
          result = Math.max(
            recursion(text1, text2, index1, index2 - 1),
            recursion(text1, text2, index1 - 1, index2)
          )
        }
        memo.set(key, result)
        return result
      }
      return recursion(text1, text2, text1.length - 1, text2.length - 1)
    }
    let reverseString = function (s) {
      s = s.split("")
      let start = 0,
        end = s.length - 1
      while (start < end) {
        ;[s[start], s[end]] = [s[end], s[start]]
        start++
        end--
      }
      return s.join("")
    }
    let first = s,
      second = reverseString(s)
    return longestCommonSubsequence(first, second)
  }
  let lpsub = longestPalindromeSubseq(s)
  return s.length - lpsub
}