const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const rfs = require("rotating-file-stream");
const database = require("./src/config/database");
const router = require("./src/config/router");

const {PORT = 8080, HOST = 'localhost'} = process.env

// create express app
const app = express();
const init = async () => {
  // log file
  const logFile = process.env.LOGFILE || "./log/innovation-hub.log";
  // middleware for CORS and JSON body parser
  app.use(express.json());
  app.use(cors());
  // Logger setup
  const logStream = rfs.createStream(logFile, {
    interval: "1d",
  });

  app.use(
    morgan("combined", {
      stream: logStream,
    })
  );

  // get the database connection
  try {
    await database.connect();
    console.log("Database Connection : 👍🏻");
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`${new Date()} : Database connection : Fail 👎🏻`, error);
    process.exit(1);
  }
};

const startServer = async () => {
  await init();
  app.use("/", router);

  app.listen(PORT, HOST, () => {
    // eslint-disable-next-line no-console
    console.log(`${new Date()} : Server is running at http://${HOST}:${PORT}`);
  });
};

(async () => {
  await startServer();
})();
