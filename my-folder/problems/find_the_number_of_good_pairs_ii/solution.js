const numberOfPairs = (a, b, k) => {
  let sa = new Set(a), ma = new Map(), mb = new Map(), res = 0;
  for (const x of a) ma.set(x, ma.get(x) + 1 || 1)
  for (const x of b) mb.set(x, mb.get(x) + 1 || 1)
  for (const x of sa) {
    let factors = findAllFactors(x), cnt = 0;
    for (const f of factors) {
      cnt += mb.get(f / k) || 0;
    }
    res += cnt * ma.get(x); // compute repeated value count
  }
  return res;
};

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