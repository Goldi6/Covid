//accept string with underscores and return string with spaces
 function underscoreToSpace(string) {
  return string.replace(/_/g, " ");
}
function replaceNonAlphaNumericWithUnderscore(inputString) {
  return inputString.replace(/[^0-9a-zA-Z]+/g, "_");
}

module.exports = {underscoreToSpace, replaceNonAlphaNumericWithUnderscore} ;



