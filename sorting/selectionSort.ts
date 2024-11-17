function selectionSort(arr: number[]): number[] {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    // Find the index of the smallest element in the unsorted portion
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // Only swap if the minimum element is not already in place
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

const testArray = [64, 25, 12, 22, 11];
console.log("Original array:", testArray);
console.log("Sorted array:", selectionSort(testArray));
