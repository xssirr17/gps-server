const net = require("net");

class GPSConnectionHandler {
  constructor() {
    this.connections = new Map(); // Store active connections
    this.timeoutInterval = 60000; // 1 minute in milliseconds
  }

  startServer(port) {
    const server = net.createServer((socket) => {
      console.log("New GPS connection established");

      this.connections.set(socket, {
        lastDataTimestamp: Date.now(),
        timer: setInterval(
          () => this.checkConnectionTimeout(socket),
          this.timeoutInterval
        ),
      });

      socket.on("data", (data) => {
        this.handleData(socket, data);
      });

      socket.on("end", () => {
        this.closeConnection(socket);
      });

      socket.on("error", (err) => {
        console.error("Socket error:", err);
        this.closeConnection(socket);
      });
    });

    server.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  }

  handleData(socket, data) {
    // Process GPS data here
    // Update last data timestamp for the socket
    const connection = this.connections.get(socket);
    connection.lastDataTimestamp = Date.now();
  }

  checkConnectionTimeout(socket) {
    const connection = this.connections.get(socket);
    const currentTime = Date.now();

    if (currentTime - connection.lastDataTimestamp >= this.timeoutInterval) {
      console.log("Closing idle GPS connection");
      this.closeConnection(socket);
    }
  }

  closeConnection(socket) {
    const connection = this.connections.get(socket);
    clearInterval(connection.timer);
    socket.end();
    this.connections.delete(socket);
    console.log("GPS connection closed");
  }
}

const gpsHandler = new GPSConnectionHandler();
gpsHandler.startServer(8080); // Replace with your desired port
