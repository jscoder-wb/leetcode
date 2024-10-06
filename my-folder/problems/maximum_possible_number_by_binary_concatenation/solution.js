var maxGoodNumber = function (nums) {
  const toBinaryString = (num) => num.toString(2);

  function getPermutations(array) {
    if (array.length === 1) return [array];
    let perms = [];
    for (let i = 0; i < array.length; i++) {
      let rest = array.slice(0, i).concat(array.slice(i + 1));
      let restPerms = getPermutations(rest);
      for (let perm of restPerms) {
        perms.push([array[i], ...perm]);
      }
    }
    return perms;
  }
  const permutations = getPermutations(nums);
  let maxNumber = 0;
  for (let perm of permutations) {
    let binaryString = perm.map(toBinaryString).join('');
    let number = parseInt(binaryString, 2);
    maxNumber = Math.max(maxNumber, number);
  }
  return maxNumber;
};