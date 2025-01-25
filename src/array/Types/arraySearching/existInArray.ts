// nput: arr = [1, 2, 3, 4], value = 3
// Output: true
{
  let arr = [1, 2, 3, 4];
  let value = 4;

  function exsitInArray(arr: number[], val: number): number {
    if (arr.includes(val)) {
      return arr.indexOf(val);
    }
    return -1;
  }
  console.log(exsitInArray(arr, value));
}

// return value and index for finding number
{
  function existInArray(
    arr: number[],
    val: number
  ): { value: number | null; index: number | null } {
    const index = arr.indexOf(val);
    if (index !== -1) {
      return { value: val, index: index }; // If the value is found, return the value and index
    }
    return { value: null, index: null }; // If not found, return null for both
  }

  const arr = [1, 2, 3, 4, 5];
  const value = 3;

  console.log(existInArray(arr, value)); // Output: { value: 3, index: 2 }
  console.log(existInArray(arr, 6)); // Output: { value: null, index: null }
}
