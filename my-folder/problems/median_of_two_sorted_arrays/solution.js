var findMedianSortedArrays = function (arr1, arr2) {
  let results = [],
    i = 0,
    j = 0
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i])
      i++
    } else {
      results.push(arr2[j])
      j++
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    results.push(arr2[j])
    j++
  }
  let length = results.length
  if (length % 2 == 0) {
    let upper = results[results.length / 2]
    let lower = results[results.length / 2 - 1]
    return (upper + lower) / 2
  } else return results[Math.floor(results.length / 2)]
}