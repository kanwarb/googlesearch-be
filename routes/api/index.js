const router =require("express").Router();
const googleSearchRoutes = require("./books");

router.use("/api/books", googleSearchRoutes);

module.exports = router;