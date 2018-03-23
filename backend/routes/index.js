import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./../config/swagger.json";
import express from "express";
import packageJson from "./../package.json";
let router = express.Router();

// add base path
router.get("/", (req, res) => {
  res.json({
    name: packageJson.name,
    version: packageJson.version,
    author: packageJson.author,
    documentation: `${req.protocol}://${req.get("host")}${req.originalUrl}docs`
  });
});

// add swagger router
router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default router;
