var clearStars = function (s) {
  const mp = new Map(), n = s.length;
  const v = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    if (s[i] !== '*') {
      if (!mp.has(s[i])) mp.set(s[i], []);
      mp.get(s[i]).push(i);
    } else {
      v[i] = 1;
      const sortedEntries = Array.from(mp.entries()).sort((a, b) => a[0].localeCompare(b[0]));
      for (let [key, indices] of sortedEntries) {
        const m = indices.length;
        v[indices[m - 1]] = 1;
        indices.pop();
        if (indices.length === 0) mp.delete(key);
        break;
      }
    }
  } 
  let ans = "";
  for (let i = 0; i < n; i++) if (v[i] !== 1) ans += s[i]; 
  return ans;
};