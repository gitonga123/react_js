module.exports = function (numbersToSum) {
  let sum = 0; let i = 0; let l = numbersToSum.length
  while (i < l) {
    sum += numbersToSum[i++]
  }
  return sum
}
