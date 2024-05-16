module.exports = (num) => {
  let a = num;
  let str = "";
  let shifts = [8, 16, 24];
  str += charToCode(a);
  for (let shift of shifts) {
    str += charToCode(a >> shift);
  }
  return str;
};

function charToCode(num) {
  if (num != 0) {
    return String.fromCharCode(num & 0x000000ff);
  } else {
    return "";
  }
}
