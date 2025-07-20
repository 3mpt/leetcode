/**
 * @param {number[]} materials 数量
 * @param {number[][]} cookbooks
 * @param {number[][]} attribute
 * @param {number} limit
 * @return {number}
 */
export let perfectMenu = function (materials, cookbooks, attribute, limit) {
  // 食谱长度
  let cLength = cookbooks.length
  let res = -1
  let path = []
  function fn(i, rest) {
    if (i === cLength) {
      // 计算美味度
      const sum1 = path.reduce((sum, val) => attribute[val][0] + sum, 0)
      // 计算饱腹感
      const sum2 = path.reduce((sum, val) => attribute[val][1] + sum, 0)
      if (sum2 >= limit) {
        res = Math.max(res, sum1)
      }
      return
    }
    // 遍历cookbooks
    for (let j = i; j < cLength; j++) {
      const current = cookbooks[j]
      // 当前操作 做？不做？
      // 不做
      fn(j + 1, rest)
      // 做完当前的菜剩余的
      // 做
      // 先判断能不能制作，再去制作
      for (let k = 0; k < rest.length; k++) {
        // 剩余的材料小于当前制作需要的材料则 说明 坐不了
        if (rest[k] < current[k]) return
      }
      const nextRest = rest.map((val, i) => val - current[i])

      // 把当前做的菜存入路径中
      path.push(j)
      fn(j + 1, nextRest)
      path.pop()
    }
  }
  fn(0, materials)
  return res
}
