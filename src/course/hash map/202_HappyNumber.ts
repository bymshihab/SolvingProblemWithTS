/**
 * Happy Number!
 * Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
Example 2:

Input: n = 2
Output: false

 * 
 * */

function isHappy(n: number): boolean {

    const seen = new Set<number>(); // acts like a hashmap to track visited numbers

    // to calculate square and sum 
    function getSumOfSquares(num: number): number {
        let sum = 0;

        while (num > 0) {            
            const digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num/10);
        }
        return sum;
    }

    // check untill 1 if not then track it on map 
    while(n !==1 && !seen.has(n)){
        seen.add(n); // store visited number to detect cycle
        n = getSumOfSquares(n);
    }

    return n === 1;
};

console.log(isHappy(19));


/*****
 * 
 * Modified Interview Question 🔥

    - We call a number a "Bounded Happy Number" if:

    - It is a happy number (eventually reaches 1).

    - And it reaches 1 within 20 steps.

    If it takes more than 20 steps to reach 1, we say the number is “Too Slow Happy” and return false.
  
 * **/


function isHappyExtend(n: number): boolean {
  const seen = new Set<number>();
  const sequence: number[] = [];

  function getSumOfSquares(num: number): number {
    let sum = 0;
    while (num > 0) {
      const digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
    return sum;
  }

  while (n !== 1 && !seen.has(n)) {
    sequence.push(n);
    seen.add(n);
    n = getSumOfSquares(n);
  }

  sequence.push(n); // final number (1 or cycle start)

  console.log("Sequence:", sequence);
  console.log("Total steps:", sequence.length - 1);
  return n === 1;
}

// Test examples
console.log(isHappyExtend(19));      // true
console.log(isHappyExtend(2));       // false
console.log(isHappyExtend(1999999)); // false


