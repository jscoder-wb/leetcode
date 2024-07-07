var isSubsequence = function(s, t) {
  let sPointer = 0
  for(let tPointer = 0; tPointer < t.length; tPointer++ ) 
    if(s[sPointer] === t[tPointer]) sPointer++   
  return sPointer === s.length
};