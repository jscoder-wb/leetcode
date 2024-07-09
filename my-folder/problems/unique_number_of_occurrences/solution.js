/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  let map = {}
  arr.forEach(e => map[e] ? map[e]++ : map[e] = 1)

  let set = new Set(), counter = 0
  for (let [key, val] of Object.entries(map)) {
    set.add(val)
    counter++
  }
  return counter == set.size
};
// practice self coding