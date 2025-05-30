/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const pMap = new Map();
  const sMap = new Map();
  // p 转为map
  for (c of p) {
    // 初始值1
    pMap.set(c, (pMap.get(c) || 0) + 1);
  }
  //  滑动窗口大小
  const pLen = p.length;
  //  当前字符串与pMap的最大重叠数。
  let count = 0;
  // 答案
  let res =[]
  for (let i = 0; i < s.length; i++) {
    // 当前控制的则是right
    const right = s[i];
    // 往sMap里塞值
    sMap.set(right, (sMap.get(right) || 0) + 1);
    // 如果当前的右侧跟 pMap中一样 说明重叠了。比如a出现了2次
    if (pMap.has(right) && pMap.get(right) === sMap.get(right)) {
        count++
    }
    // 判断是否超出滑动窗口了
    if(i>=pLen){
        // 比如窗口长度为5 现在i为5 则说明现在走到第6个字符了，然后 5-5 =0 左侧索引是0
        const left = s[i-pLen];
        // 如果左侧跟pMap中一样 说明重叠了，但是窗口超了 ，没办法要把左侧的count移掉了
        if (pMap.has(left) && pMap.get(left) === sMap.get(left)) {
            count--
        }
        // 更新sMap 移除左侧部分
        sMap.set(left,sMap.get(left)-1)
    }
    // 这个地方是还没超滑动窗口。
    // 窗口长度为5，i=4就还没超
    if(count===pMap.size){
        // 当前索引作为答案啊
        res.push(i-pLen+1)
    }
    
  }
  return res
};
