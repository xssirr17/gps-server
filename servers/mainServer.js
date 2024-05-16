const cors = require("cors");
const http = require("http");
const objectRoutes = require("../routes/objectRoutes");
const userRoutes = require("../routes/userRoutes");
const adminRoutes = require("../routes/adminRoutes");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const history = require("connect-history-api-fallback");

const APP_PORT = 80;
const dirnamePath = require("../path");
const gpsPath = dirnamePath + "/gps/";
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://gps.outofearth.site",
    "https://gps.outofearth.site",
    "https://gps.outofearth.site:3030",
    "http://gps.outofearth.site:3030",
    "*",
    "https://45.89.236.25",
    "http://45.89.236.25",
    "https://45.89.236.25:3030",
    "http://45.89.236.25:3030",
  ],
  credentials: true,
  exposedHeaders: ["set-cookie"],
};

module.exports = () => {
  const app = express();
  app.use(history());
  app.use(express.static(gpsPath));
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(__dirname));
  app.use(cookieParser());
  app.get("/", (req, res, next) => {
    res.sendFile(path.resolve(gpsPath, "index.html"));
  });
  app.use("/user", objectRoutes);
  app.use(userRoutes);
  app.use("/admin", adminRoutes);
  const appServer = http.createServer(app);
  appServer.listen(APP_PORT, () =>
    console.log(`Server Running at port ${APP_PORT}`)
  );
};