# 无重复长度的最长子串

::: tip
核心思想：滑动窗口  
:::


## 暴力解法

不了解滑动窗口最开始的思路想必就是

1. 遍历主串，累加子串
2. 子串不存在则可以累加
3. 子串中存在，说明这是符合题解的子串之一，比较子串长度是否为最大
4. 同时需要找到存在的位置，并从这个位置切割子串，得到不重复的子串

```js
var lengthOfLongestSubstring = function (s) {
  let sub = ''
  let max = 0
  for (let i = 0; i < s.length; i++) {
    let str = s[i]
    const oldIndex = sub.indexOf(str) 

    if (oldIndex === -1) {
      sub += str
      max = Math.max.call(null, sub.length, max)
    } else {
      max = Math.max.call(null, sub.length, max)
      sub = sub.slice(oldIndex + 1) + str
    }
  }
  return max
}
```  

::: danger
暴力解法其实忽略一个问题：查找时用了 API - string.indexOf，这本身就是有复杂度的。
:::

## 滑动窗口解法

并不用关心子串是什么，只需要用一个左指针，记录不重复子串的第一个字符位置，利用 Map 结构存放已遍历字符，省去查找。

```js
var lengthOfLongestSubstring = function (s) {
  let left = 0
  let max = 0
  const subMap = new Map()

  for (let i = 0; i < s.length; i++) {
    const str = s[i]
    if (subMap.has(str)) {
      left = Math.max.call(null, left, subMap.get(str) + 1)
    }
    subMap.set(str, i)
    max = Math.max.call(null, max, i - left + 1)
  }
  return max
}
```



