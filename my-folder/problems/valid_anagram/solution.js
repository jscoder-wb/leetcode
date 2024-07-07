// hashmap solution, frequency counter pattern
var isAnagram = function (string1, string2) {
  if (string1.length !== string2.length) return false;
  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < string1.length; i++) {
    obj1[string1.charAt(i)] = (obj1[string1.charAt(i)] || 0) + 1;
  }
  for (let i = 0; i < string2.length; i++) {
    obj2[string2.charAt(i)] = (obj2[string2.charAt(i)] || 0) + 1;
  }
  for (let key in obj1) {
    if (!(key in obj2)) return false;
    if (obj2[key] !== obj1[key]) return false;
  }
  return true;
};