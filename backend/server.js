"use strict";

import http from "http";
import express from "express";
import bodyParser from "body-parser";
import swaggerize from "swaggerize-express";
import path from "path";
import cors from "cors";

import customRoutes from "./routes";

// sequelize
import models from "./models";

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use("/", customRoutes);
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(
  swaggerize({
    api: path.resolve("./config/swagger.json"),
    handlers: path.resolve("./handlers")
  })
);

server.listen(4000, function() {
  app.swagger.api.host = this.address().address + ":" + this.address().port;
  /* eslint-disable no-console */
  console.log(
    "app running on %s:%d",
    this.address().address,
    this.address().port
  );

  models.sequelize.sync().then(function() {
    /* eslint-disable no-console */
    console.log('database tables synced')
  }).catch(err => {
    /* eslint-disable no-console */
    console.log(err);
  });

});

export default app;
