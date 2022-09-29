// 42. Trapping Rain Water
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0,
    right = height.length - 1,
    volume = 0,
    maxLeft = 0,
    maxRight = 0;

  while (left < right) {
    if (height[left] <= height[right]) {
      if (height[left] >= maxLeft) {
        maxLeft = height[left];
      } else {
        volume += maxLeft - height[left];
      }
      left++;
    } else {
      if (height[right] >= maxRight) {
        maxRight = height[right];
      } else {
        volume += maxRight - height[right];
      }
      right--;
    }
  }
  return volume;
};
