var countAndSay = function(n) {
  if (n === 1) return "1"
  else if (n === 2) return "11" 
  let temp = countAndSay(n - 1), ans = "", count = 0
  for (let i = 0; i < temp.length; i++) {
    count++
    if (temp[i] !== temp[i + 1]) {
      ans += count
      ans += temp[i]
      count = 0
    }
  } 
  return ans   
};