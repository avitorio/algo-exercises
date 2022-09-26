// 11. Container With Most Water
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let p1 = 0,
    p2 = height.length - 1,
    maxValue = 0;

  while (p1 < p2) {
    const minHeight = Math.min(height[p1], height[p2]);
    const distance = p2 - p1;
    const area = minHeight * distance;
    maxValue = Math.max(maxValue, area);
    if (height[p1] <= height[p2]) {
      p1++;
    } else {
      p2--;
    }
  }

  return maxValue;
};
