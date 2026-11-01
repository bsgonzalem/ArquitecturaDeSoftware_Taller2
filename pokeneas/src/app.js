const express = require("express");
const app = express();

const webRoutes = require("../routes/web");

webRoutes(app);

module.exports = app;