/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const queue = []; // 队列存索引
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    // 剔除队列中索引 =>nums值 比当前值小的
    while(queue.length&& nums[queue[queue.length-1]]<=nums[i]){
        queue.pop()
    }
    
    queue.push(i)
    // 判断队首 是否在滑动窗口内
    if(queue[0]<= i-k){
        queue.shift()
    }

    // 判断是否形成了滑动窗口
    if(i>=k-1){
        res.push(nums[queue[0]])
    }
  }
  return res
};
