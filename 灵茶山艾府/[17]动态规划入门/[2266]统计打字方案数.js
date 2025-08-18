/**
 * @param {string} pressedKeys
 * @return {number}
 */
export let countTexts = function (pressedKeys) {
  const mod = 1e9 + 7
  const n = pressedKeys.length
  const memo = new Map()

  function dfs(i) {
    if (i === n) return 1 // 到末尾算1种
    if (memo.has(i)) return memo.get(i)

    let total = 0
    const limit = pressedKeys[i] === '7' || pressedKeys[i] === '9' ? 4 : 3

    for (let k = 1; k <= limit && i + k <= n; k++) {
      // 确保这k个字符都相同
      if (pressedKeys[i] !== pressedKeys[i + k - 1]) break
      total = (total + dfs(i + k)) % mod
    }

    memo.set(i, total)
    return total
  }

  return dfs(0)
}
