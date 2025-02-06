/**
 * Input: str = “i.like.this.program.very.much” 
   Output: str = “much.very.program.this.like.i” 
 */

//    1. Split the string by “.” delimiter.
//    2. Reverse the array of words.
//    3. Join the array of words with “.” delimiter.

// function reverseWords(str: string): string {
//   return str.split(".").reverse().join(".");// Output: much.very.program.this.like.i
// }

// inside words need to reverse as well

// function reverseWords(str: string): string {
//   return str.split("").reverse().join("");
// }

// without built-in functions
function reverseWords(str: string): string {
  let result = "";
  let word = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      word += str[i];
      console.log(word, "word");
    } else {
      if (word.length > 0) {
        result = word + " " + result;
        word = "";
        console.log(result, "result");
      }
    }
  }

  if (word.length > 0) {
    result = word + " " + result;
  }

  return result.trim(); // Remove trailing spaces if any
}

// Example usage:
console.log(reverseWords("hello world this is TypeScript"));
