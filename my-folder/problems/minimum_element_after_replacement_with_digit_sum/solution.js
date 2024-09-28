var minElement = function (nums) {
  let newArr = []
  for (let num of nums) {
    let sum = Number(num).toString().split('').reduce((accu, curr) => Number(accu) + Number(curr), 0)
    newArr.push(sum)
  } return Math.min(...newArr)
};