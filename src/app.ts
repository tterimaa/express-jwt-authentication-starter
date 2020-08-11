import express from "express";
import config from "./config/index";

async function startServer() {
  const app = express();

  await require("./loaders").default({ expressApp: app });

  app.listen(config.port, (err) => {
    if (err) {
      process.exit(1);
    }
    console.log(`Server listening on port ${config.port}`);
  });
}

startServer();