var groupAnagrams = function(strs) {
  const obj = {}
  for (let anagram of strs) {
    let sortedAnagram = anagram.split('').sort().join('')
    obj[sortedAnagram] ? obj[sortedAnagram].push(anagram): obj[sortedAnagram] = [anagram]
  }  
  return Object.values(obj)  
};