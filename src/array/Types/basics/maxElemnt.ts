let arr: number[] = [3, 5, 7, 2, 8];
let max: number = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > arr[i + 1]) {
    arr[i + 1] = arr[i];
  }
  max = arr[i];
}

console.log(max); // 8
