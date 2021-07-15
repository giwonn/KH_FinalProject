export const CheckLength = (content) => {
  var cleanCode = content
    .replace(/<(?:.|\n)*?>/gm, "")
    .replace(/(\r\n|\n|\r)/gm, "")
    .replace("&nbsp;", "");
  var numChars = cleanCode.trim().length;
  return numChars;
};
