/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) return "1";
  const recur = (str, number) => {
    if (number === n) return str;
    let output = "";
    for (let i = 0; i < str.length; i++) {
      const current = str[i];
      let count = 0;
      while (current === str[i] && i < str.length) {
        count++;
        i++;
      }
      i--;
      output += "" + count + current;
    }
    return recur(output, number + 1);
  };
  return recur("1", 1);
};
