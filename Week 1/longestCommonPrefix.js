// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

//const strs = ["floower", "floow", "flight"]
const strs = ["Application", "app", "Apology"];

function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return "";
  }

  let prefix = strs[0].toLowerCase();

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].toLowerCase().indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") {
        return "";
      }

      console.log(prefix);
      console.log(strs[i]);

      console.log(strs[i].indexOf(prefix));
    }
  }

  return prefix;
}

console.log(longestCommonPrefix(strs));
