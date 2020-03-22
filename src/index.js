
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = []
  if (matrix == undefined) {
    return arr
  }
  for (let i of matrix) {
      if (matrix.indexOf(i) % 2 == "0" || matrix.indexOf(i) == "0") {
          arr.push(...i)
      } else {
        arr.push(...i.sort((a,b) => b - a))
      }
  } return arr

}
