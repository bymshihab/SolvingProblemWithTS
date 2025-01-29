function runningSum(nums: number[]): number[] {
  let sum: number[] = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < i; j++) {
      sum[j] = sum[j] + nums[j];
    }
  }
  return sum;
}

console.log(runningSum([1, 2, 3, 4]));
