/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  const res = []
  const pre = intervals[0]
  // 先放一个
  res.push(pre)
  for (let i = 0; i < intervals.length; i++) {
    const last = res[res.length - 1]
    if (last[1] >= intervals[i][0]) {
      last[1] = Math.max(intervals[i][1], last[1])
    } else {
      res.push(intervals[i])
    }
  }

  return res
}
