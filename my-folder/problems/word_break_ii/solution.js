const wordBreak = (s, wordDict, cur = [], res = []) => {
  if (!s.length) return res.push(cur.join(' '));
  for (let word of wordDict) {
    if (!s.startsWith(word)) continue;
    cur.push(word);
    wordBreak(s.slice(word.length), wordDict, cur, res);
    cur.pop();
  }
  return res;
}