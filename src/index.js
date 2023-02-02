module.exports = function check(str, bracketsConfig) {
  let bracketsString = bracketsConfig.join("").replace(/,/g, "");
  let bracketsArray = [];
  for (let bracket of str) {
    let bracketsIndex = bracketsString.indexOf(bracket);
    if (bracketsIndex % 2 === 0) {
      if (bracket === bracketsString[bracketsIndex + 1] && bracketsArray[bracketsArray.length - 1] === bracketsIndex) {
        bracketsArray.pop();
      } else if (bracket === bracketsString[bracketsIndex + 1] && bracketsArray[bracketsArray.length - 1] !== bracketsIndex) {
        bracketsArray.push(bracketsIndex);
      } else {
        bracketsArray.push(bracketsIndex);
      }
    } else {
      if (bracketsArray.pop() !== bracketsIndex - 1) {
        return false;
      }
    }
  }
  return bracketsArray.length === 0;
}
