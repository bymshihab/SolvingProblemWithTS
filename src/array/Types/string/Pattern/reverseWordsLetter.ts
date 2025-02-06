function reverseWordsLetter(str: string): string {
  var result = "";
  var word = "";
  var reverseLetter = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      word += str[i];
      // console.log(word);
    } else {
      reverseLetter = reverseALetter(word);
      if (reverseLetter.length > 0) {
        result = reverseLetter + " " + result;
        reverseLetter = "";
      }
    }
  }
  if (word.length > 0) {
    result = word + " " + result;
  }
  return result.trim(); // Remove trailing spaces if any
}

function reverseALetter(word: string) {
  let reversed = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
}

// Example usage:

console.log(reverseWordsLetter("hello typeScript this is me!")); // Output: TypeScript is this world hello
