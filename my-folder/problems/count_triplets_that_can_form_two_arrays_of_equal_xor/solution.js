var countTriplets = function (arr) {
  const n = arr.length + 1;
  const prefix_xor = new Array(n).fill(0);

  for (let i = 1; i < n; i++) {
    prefix_xor[i] = prefix_xor[i - 1] ^ arr[i - 1];
  }

  let res = 0;

  for (let start = 0; start < n; start++) {
    for (let end = start + 1; end < n; end++) {
      if (prefix_xor[start] == prefix_xor[end]) {
        res += end - start - 1;
      }
    }
  }

  return res;
};