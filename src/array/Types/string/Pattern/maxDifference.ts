function getFrequency(str: string): number {
  let freq: { [key: string]: number } = {};

  // Count character frequencies
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  let maxOdd = 0;
  let maxEven = 0;

  // Get frequency values using Object.keys()
  for (let key of Object.keys(freq)) {
    let count = freq[key]; // Access value manually
    if (count % 2 === 0) {
      maxEven = Math.max(maxEven, count);
    } else {
      maxOdd = Math.max(maxOdd, count);
    }
  }

  return maxOdd - maxEven;
}

console.log(getFrequency("mmsmsym"));
