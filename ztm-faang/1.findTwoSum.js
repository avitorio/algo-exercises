const findTwoSum = (nums, target) => {
  const numsMap = {};
  for (let i = 0; i < nums.length; i++) {
    const currentMapVal = numsMap[nums[i]];

    if (currentMapVal >= 0) {
      return [i, numsMap[nums[i]]];
    }

    const numToFind = target - nums[i];
    numsMap[numToFind] = i;
  }
};
