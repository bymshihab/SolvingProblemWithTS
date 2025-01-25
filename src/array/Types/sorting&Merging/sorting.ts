{
  let arr: number[] = [1, 3, 56, 9];
  console.log(arr.sort());

  function sortAcending(arr: number[]): number[] {
    return arr.sort((a, b) => a - b);
  }
  function sortDcending(arr: number[]): number[] {
    return arr.sort((a, b) => b - a);
  }
  console.log(sortAcending(arr));
}
