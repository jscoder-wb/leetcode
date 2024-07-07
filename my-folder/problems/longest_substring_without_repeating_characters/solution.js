let lengthOfLongestSubstring = function(s) {
  let longest = 0, maxStr = ''

  for( let i = 0 ; i < s.length; i++ ){
    let char = s[i];
    let prevIndex = maxStr.indexOf(char);

    if(prevIndex > -1) maxStr = maxStr.substring(prevIndex + 1);
    maxStr += char;
    longest = Math.max(longest, maxStr.length);
  }
  return longest;
};