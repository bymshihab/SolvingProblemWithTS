/**
 * 
 * Given two strings s and t, determine if they are isomorphic.

    - Two strings s and t are isomorphic if the characters in s can be replaced to get t.

    - All occurrences of a character must be replaced with another character while  preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
 * 
 * **/ 

function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

    const sMap = new Map<string, string>();
    const tSet = new Set<string>(); // to ensure no duplicate mapping

    for (let i = 0; i < s.length; i++) {
        const sChar = s[i];
        const tChar = t[i];

        if (sMap.has(sChar)) {
            // check if mapping is consistent
            if (sMap.get(sChar) !== tChar) return false;
        } else {
            // new mapping
            if (tSet.has(tChar)) return false; // already mapped to another sChar
            sMap.set(sChar, tChar);
            tSet.add(tChar);
        }
    }

    return true;
};
console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));