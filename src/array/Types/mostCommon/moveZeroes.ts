function moveZeroes(nums: number[]): void {
  let n = nums.length;
  let nonZeroIndex = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[nonZeroIndex]] = [nums[nonZeroIndex], nums[i]];
      nonZeroIndex++;
    }
  }
  console.log(nums);
}
console.log(moveZeroes([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]
