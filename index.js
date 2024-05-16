const cluster = require("cluster");
const os = require("os");
const sequelize = require("./db/dbConfig");
const Session = require("./models/session");
const numCPUs = os.cpus().length;
const { runMainServer, runTcpServer, runPanelServer } = require("./servers");

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  runMainServer();
  runTcpServer();
  runPanelServer();
  sequelize.sync();
  Session.sync();
}
