var averageWaitingTime = function (customers) {
  let idle = 0, answer = 0, n = customers.length

  for (let i = 0; i < n; i++) {
    if (customers[i][0] < idle) {
      answer += idle - customers[i][0] + customers[i][1]
      idle += customers[i][1]
    } else {
      answer += customers[i][1]
      idle = customers[i][0] + customers[i][1]
    }
  }
  return answer / customers.length
};