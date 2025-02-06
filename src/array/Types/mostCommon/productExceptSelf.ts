function productExceptSelf(nums: number[]): number[] {
  let n = nums.length;
  let output = new Array(n).fill(1);
  let left = 1;
  let right = 1;

  for (let i = 0; i < n; i++) {
    output[i] *= left;
    output[n - 1 - i] *= right;
    left *= nums[i];
    right *= nums[n - 1 - i];
  }

  return output;
}

console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
