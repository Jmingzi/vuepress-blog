/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//   let result = ''
//   let oldIndex = -1
//   let max = 0

//   // 用map存放位置
//   const strMap = new Map()

//   // for (let str of s) {
//     // oldIndex = result.indexOf(str)
//   for (let i = 0; i < s.length; i++) {
//     const str = s[i]  
//     oldIndex = strMap.get(str)

//     if (oldIndex === undefined) {
//       result += str
//       strMap.set(str, i)
//     } else {
//       // if (result.length > max) {
//       //   max = result.length
//       // }
//       max = Math.max.call(null, max, result.length)
//       result = result.slice(oldIndex + 1) + str
//       strMap.set(str, i - oldIndex - 1)
//       // strMap.clear()
//     }
//   }
//   // if (result.length > max) {
//   //   max = result.length
//   // }
//   max = Math.max.call(null, max, result.length)

//   return max
// };

var lengthOfLongestSubstring = function (s) {
  let max = 0
  let left = 0
  const map = new Map()

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      left = Math.max.call(null, left, map.get(s[i]) + 1)
    }
    map.set(s[i], i)
    max = Math.max.call(null, max, i - left + 1)
  }
  return max
}
// @lc code=end

