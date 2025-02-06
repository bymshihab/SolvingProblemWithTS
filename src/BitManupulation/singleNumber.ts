function singleNumber(nums: number[]): number {
  let mapCount: { [key: number]: number } = {};
  // Count occurrences of each number
  for (let num of nums) {
    mapCount[num] = (mapCount[num] || 0) + 1;
  }
  for (let key in mapCount) {
    if (mapCount[key] === 1) {
      return Number(key);
    }
  }

  return -1;
}

console.log(singleNumber([4, 1, 2, 1, 2, 4, 5]));
