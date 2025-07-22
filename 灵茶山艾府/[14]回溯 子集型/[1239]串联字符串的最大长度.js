/**
 * @param {string[]} arr
 * @return {number}
 */
export let maxLength = function (arr) {
  arr = arr.filter((s) => {
    let set = new Set(s)
    return set.size === s.length
  })
  let n = arr.length
  let res = 0
  // record
  let path = []
  function fn(i) {
    if (i === n) {
      const s = path.join('')
      let sSet = new Set(s)
      if (s.length === sSet.size) {
        res = Math.max(res, s.length)
      }
      return
    }
    fn(i + 1)
    path.push(arr[i])
    fn(i + 1)
    path.pop()
  }
  fn(0)
  return res
}
