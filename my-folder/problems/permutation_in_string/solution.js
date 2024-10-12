function checkInclusion(s1, s2) {
  const cur = new Array(26).fill(0);
  const goal = new Array(26).fill(0);
  for (let c of s1) goal[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;

  for (let i = 0; i < s2.length; i++) {
    cur[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    if (i >= s1.length) {
      cur[s2.charCodeAt(i - s1.length) - 'a'.charCodeAt(0)]--;
    }
    if (arraysEqual(goal, cur)) return true;
  }
  return false;
}

function arraysEqual(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}