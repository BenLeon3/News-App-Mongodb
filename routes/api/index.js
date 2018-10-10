var router = require("express").Router();
var fetchRoutes = require("./fetch");
var commentRoutes = require("./comments");
var headlineRoutes = require("./headlines");

router.use("/fetch", fetchRoutes);
router.use("/comments", commentRoutes);
router.use("/headlines", headlineRoutes);

module.exports = router;