/**
 * @param {string} s
 * @return {number}
 */
 // beautifull naming convention truly signifies the problem
var minimumChairs = function (s) {
  let personCount = 0, chairInRoom = 0
  for (let ch of s) {
    if (ch == 'E') {
      personCount++
      chairInRoom = Math.max(chairInRoom, personCount)
    }
    else personCount--
  }
  return chairInRoom
};