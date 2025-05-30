/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    const sLen = s.length
    const pLen = p.length
    if (sLen < pLen) return []
    const aCode = 'a'.charCodeAt(0)
    const sCount = new Array(26).fill(0)
    const pCount = new Array(26).fill(0)
    const res = []
    for (let i = 0; i < pLen; i++) {
        sCount[s.charCodeAt(i) - aCode]++
        pCount[p.charCodeAt(i) - aCode]++
    }

    console.log(sCount, pCount)
    if (equal(sCount, pCount)) res.push(0)
    for (let i = pLen; i < sLen; i++) {
        sCount[s.charCodeAt(i) - aCode]++
        sCount[s.charCodeAt(i - pLen) - aCode]--
        if(equal(sCount, pCount)) res.push(i - pLen + 1)
    }
    return res


};
function equal(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false
    }
    return true
}