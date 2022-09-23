const maxContainer = (heights) => {
  let maxContainer = 0;

  for (let p1 = 0; p1 < heights.length; p1++) {
    for (let p2 = p1 + 1; p2 < heights.length; p2++) {
      const currentArea = Math.min(heights[p1], heights[p2]) * (p2 - p1);
      maxContainer = Math.max(maxContainer, currentArea);
    }
  }

  return maxContainer;
};

console.log(maxContainer([7, 1, 2, 3, 9]));
