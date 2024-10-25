// backtracking solution
var letterCombinations = function(digits) {
    if ( !digits ) return []
    const map = {
      2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl', 6: 'mno', 7: 'pqrs', 8: 'tuv', 
      9: 'wxyz'
    }, res = []
  
    const go = (i, s) => {
      if (i === digits.length) {
        res.push(s)
        return
      }
      for (const c of map[digits[i]]) go(i + 1, s + c)
    }
    go(0, '')
    return res
};