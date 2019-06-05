module.exports = {
  init(app) {
    const staticRoutes = require("../routes/static");
    const recordRoutes = require("../routes/records");
    const userRoutes = require("../routes/users");

    app.use(staticRoutes);
    app.use(recordRoutes);
    app.use(userRoutes);
  }
}
