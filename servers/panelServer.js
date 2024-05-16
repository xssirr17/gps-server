const cors = require("cors");
const http = require("http");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const history = require("connect-history-api-fallback");
const PANEL_PORT = 3030;
const dirnamePath = require("../path");
const panelPath = dirnamePath + "/panel/";
const corsOptionsPanel = {
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
  const adminApp = express();
  adminApp.use(history());
  adminApp.use(express.static(panelPath));

  adminApp.get("/", (req, res, next) => {
    res.sendFile(path.resolve(panelPath, "index.html"));
  });
  adminApp.use(cors(corsOptionsPanel));
  adminApp.use(express.json());
  adminApp.use(express.urlencoded({ extended: true }));
  adminApp.use(express.static(__dirname));
  adminApp.use(cookieParser());
  const adminServer = http.createServer(adminApp);
  adminServer.listen(PANEL_PORT, () =>
    console.log(`Server Running at port ${PANEL_PORT}`)
  );
};