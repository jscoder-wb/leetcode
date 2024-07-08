// 3rd solution (https://www.youtube.com/watch?v=o8emK4ehhq0&list=LL&index=19)

var mincostToHireWorkers = function(quality, minWage, k) {
  let n = quality.length
    , result = Infinity
    , workers = []
  
  for (let worker = 0; worker < n; worker++) {
    workers[worker] = {
      ratio: minWage[worker] / quality[worker],
      quality: quality[worker]
    }
  }
  workers.sort((a,b)=>a.ratio - b.ratio)
  // all workers that are on the left of captain in sorted array will accept the offer, 
  // all workers in the right of captain will not accept

  // precomputation
  let maxPQ = [], sum_quality = 0
  for (let i = 0; i < k; i++) {
    maxPQ.push(workers[i].quality)
    sum_quality += workers[i].quality
  }
  let captainRatio = workers[k - 1].ratio
  result = captainRatio * sum_quality

  for (let captain = k; captain < n; captain++) {
    captainRatio = workers[captain].ratio

    maxPQ.push(workers[captain].quality)
    maxPQ.sort((a, b) => b - a)
    sum_quality += workers[captain].quality

    if (maxPQ.length > k) {
      sum_quality -= maxPQ[0]
      maxPQ.shift()
    }
    result = Math.min(result, captainRatio * sum_quality)
  }
  return result
};