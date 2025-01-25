{
  // using diffrent array
  let arr: number[] = [1, 2, 3, 4];

  let duplicate: number[] = [];
  for (let i: number = arr.length - 1; i >= 0; i--) {
    duplicate.push(arr[i]);
  }

  console.log(duplicate);

  // using same array
  for (let j = 0; j < arr.length - 1; j++) {
    let temp = arr[j];
    arr[j] = arr[arr.length - 1 - j];
    arr[arr.length - 1 - j] = temp;
  }
  console.log(arr);

  // without temp variable and extra array
  let arr2 = [1, 2, 3, 4, 5];
  for (let i = 0; i < Math.floor(arr2.length / 2); i++) {
    arr2[i] = arr2[i] + arr2[arr2.length - 1 - i];
    arr2[arr2.length - 1 - i] = arr2[i] - arr2[arr2.length - 1 - i];
    arr2[i] = arr2[i] - arr2[arr2.length - 1 - i];
  }
  console.log(arr2, "without variable");
}
