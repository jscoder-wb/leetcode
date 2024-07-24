const getRealValue = (mapping, value) => +(('' + value).split('').map(v => mapping[v]).join(''));

const sortJumbled = (mapping, nums) => {
  const cache = {};
  for (const num of nums) {
    cache[num] = getRealValue(mapping, num);
  }
  return nums.sort((a, b) => cache[a] - cache[b]);
};