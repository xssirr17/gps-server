const net = require("net");
const tcpParser = require("../middlewares/tcp/tcpParserData");
const TCP_PORT = 3031;
const TCP_HOST = "45.89.236.25";
module.exports = () => {
  const tcpServer = net.createServer((socket) => {
    tcpParser(socket);
  });

  tcpServer.listen(
    {
      port: TCP_PORT,
      host: TCP_HOST,
    },
    () => {
      console.log("tcp server is running on ", tcpServer.address());
    }
  );
};