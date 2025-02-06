function majorityElement(nums: number[]): number {
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    if (nums[i] === nums[i + 1]) {
      count++;
    }
    if (count > maxCount) {
      maxCount = count;
    }
  }
  console.log(maxCount);

  return maxCount;
}

console.log(majorityElement([3, 2, 3])); // 3
