const router = require("express").Router();
const googleSearch = require("../../controllers/googleSearch");

router.route("/")
.get(googleSearch.find)
.post(googleSearch.create);

module.exports = router;