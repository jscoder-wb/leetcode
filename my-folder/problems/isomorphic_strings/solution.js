var isIsomorphic = function (s, t) {
  let mapST = {},
    mapTS = {}
  for (let i = 0; i < s.length; i++) {
    let c1 = s[i],
      c2 = t[i]
    if ((c1 in mapST && mapST[c1] != c2) || (c2 in mapTS && mapTS[c2] != c1))
      return false
    mapST[c1] = c2
    mapTS[c2] = c1
  }
  return true
}