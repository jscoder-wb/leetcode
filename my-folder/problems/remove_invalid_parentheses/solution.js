var removeInvalidParentheses = function (s) { 
  if (s.length == 0 || s == null) return [""]
  let isValid = (string) => {
    let open = 0
    for (const c of string) {
      if (c === "(") open++
      else if (c === ")") {
        if (open === 0) return false
        open--
      }
    }
    return open === 0
  }
  let queue = [s], result = [], done = false
  while (queue.length != 0) {
    let node = queue.shift()
    if (isValid(node)) {
      result.push(node)
      done = true
    } 
    if (!done) {
      for (let i = 0; i < node.length; i++) {
        if (node[i] == "(" || node[i] == ")") { 
          let temp = node.substring(0, i) + node.substring(i + 1)
          if (!queue.includes(temp)) queue.push(temp)
        }
      }
    }
  }
  return result
}