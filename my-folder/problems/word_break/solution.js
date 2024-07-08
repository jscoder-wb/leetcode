var wordBreak = function(s, wordDict) {
  const memo = {}
  const helper = (str)=>{
    if (memo[str] !== undefined) return memo[str]
    if (str === '')
      return true
    for (let word of wordDict) {
      if (str.indexOf(word) === 0) {
        let newWord = str.slice(word.length)
        if (helper(newWord) === true)
          return memo[str] = true
      }
    }
    return memo[str] = false
  }
  return helper(s)
};