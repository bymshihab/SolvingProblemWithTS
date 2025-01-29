// function reverseArr(nums: number[]): number[] {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left < right) {
//     swapArr(nums, left, right); // Pass the array to swap elements
//     left++;
//     right--;
//   }

//   return nums;
// }

// function swapArr(nums: number[], left: number, right: number) {
//   // Swap the elements in the array
//   [nums[left], nums[right]] = [nums[right], nums[left]];
// }

// console.log(reverseArr([10, 20, 30, 40])); // Output: [40, 30, 20, 10]

function reverse(nums: number[], start: number, end: number): void {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]]; // Swap elements
    start++;
    end--;
  }
}

function rotate(nums: number[], k: number): void {
  k = k % nums.length; // Handle cases where k is larger than the array length

  // Reverse the entire array
  reverse(nums, 0, nums.length - 1);

  // Reverse the first k elements
  reverse(nums, 0, k - 1);

  // Reverse the remaining elements
  reverse(nums, k, nums.length - 1);
}

// Example usage:
let nums1 = [1, 2, 3, 4, 5, 6, 7];
let k1 = 3;
rotate(nums1, k1);
console.log(nums1); // Output: [5, 6, 7, 1, 2, 3, 4]

let nums2 = [-1, -100, 3, 99];
let k2 = 2;
rotate(nums2, k2);
console.log(nums2); // Output: [3, 99, -1, -100]
