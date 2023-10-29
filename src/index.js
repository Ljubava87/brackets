module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const bracketsMap = new Map(bracketsConfig);
  for (const char of str) {
      const lastBracket = stack[stack.length - 1];

      if (bracketsMap.has(char) && bracketsMap.get(lastBracket) !== char) {

          stack.push(char);
      } else if (bracketsMap.get(lastBracket) === char) {

          stack.pop();
      } else {
          return false;
      }
  }

  return stack.length === 0;
};
