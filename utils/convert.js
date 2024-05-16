module.exports = (num, name) => {
  let a = num;
  let str = "";
  let shifts = [8, 16, 24];
  str += a & 0x000000ff;
  for (let shift of shifts) {
    str += "," + ((a >> shift) & 0x000000ff);
  }
  let data;
  name == "upgrade_ip"
    ? (data = str.split(",").reverse().join("."))
    : (data = +str.split(",").reverse().join(""));
  return data;
};
