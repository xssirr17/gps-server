const Parser = require("teltonika-parser");
const binutils = require("binutils64");
const addData = require("../../controllers/tcp/insertDateToDb");
const generateGpsData = require("../../utils/generateGpsData");
module.exports = (socket) => {
  let imei = null;
  let lastDataTime = Date.now();
  const timeoutDuration = 5 * 60 * 1000;
  const timeout = setTimeout(() => {
    const currentTime = Date.now();
    if (currentTime - lastDataTime >= timeoutDuration) {
      console.log("Closing socket due to inactivity");
      socket.end();
    }
  }, timeoutDuration);
  socket
    .on("data", (data) => {
      lastDataTime = Date.now();
      let buffer = data;
      let parser = new Parser(buffer);
      if (parser.isImei) {
        imei = parser.imei.toString();
        console.log("IMEI is true ", parser.imei);
        socket.write(Buffer.alloc(1, 1));
        console.log(`${1} reply to gps`);
      } else if (imei) {
        let avl = parser.getAvl();
        console.log("avl data received!");
        let writer = new binutils.BinaryWriter();
        writer.WriteInt32(avl.number_of_data);
        let response = writer.ByteBuffer;
        socket.write(response);
        const gpsData = generateGpsData(avl, imei);
        addData(gpsData);
      }
    })
    .on("error", (err) => {
      console.log(err);
      socket.destroy();
    })
    .on("close", () => {
      clearTimeout(timeout);
    });
};
