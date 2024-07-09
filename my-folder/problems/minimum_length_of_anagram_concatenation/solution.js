const sortstr = (s) => s.split("").sort().join("");
const cutStrInKParts = (s, k) => { let d = [], cur = ""; for (const c of s) { cur += c; if (cur.length == k) { d.push(cur); cur = ""; } } return d; };

const minAnagramLength = (s) => {
  let n = s.length, factors = findAllFactors(n), res = Number.MAX_SAFE_INTEGER;
  for (const k of factors) {
    let d = cutStrInKParts(s, k);
    let ReArrange = new Set();
    for (const t of d) ReArrange.add(sortstr(t))
    if (ReArrange.size == 1) res = Math.min(res, k);  
  }
  return res;
}

const findAllFactors = (n) => {
  let res = new Set();
  for (let i = 1; i * i <= n; i++) {
    if (n % i == 0) {
      if (i == n / i) {
        res.add(i);
      } else {
        res.add(i);
        res.add(n / i);
      }
    }
  }
  return res;
};