// 2379. Minimum Recolors to Get K Consecutive Black Blocks
/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
let minimumRecolors = function (blocks, k) {
  let w = 0;
  for (let i = 0; i < k; i++) {
    if (blocks[i] == "W") w++;
  }
  let min = w;
  for (let j = 1; j <= blocks.length - k; j++) {
    if (blocks[j - 1] == "W") w--;
    if (blocks[j + k - 1] == "W") w++;

    if (min > w) min = w;
  }
  return min;
};
