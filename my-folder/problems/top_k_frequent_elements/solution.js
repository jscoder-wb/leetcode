// bucket sort solution from neetcode video
var topKFrequent = function (nums, k) {
  const myMap = {}
  for(const num of nums)  myMap[num] ? myMap[num]++ : myMap[num] = 1
  let buckets = new Array(nums.length + 1).fill(0).map(() => new Array(0))
  for (const [num, count] of Object.entries(myMap)) buckets[count].push(num)
  const answer = []
  for (let i = buckets.length - 1; i >= 1; i--) answer.push(...buckets[i])
  return answer.slice(0, k)
}