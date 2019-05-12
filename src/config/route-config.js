module.exports = {
  init(app) {
    const staticRoutes = require("../routes/static");
    const recordRoutes = require("../routes/records");

    app.use(staticRoutes);
    app.use(recordRoutes);
  }
}
