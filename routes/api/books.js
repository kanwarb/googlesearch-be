const router = require("express").Router();
const googleSearch = require("../../controllers/googleSearch");

router.route("/")
.get(googleSearch.find)
.post(googleSearch.create)
.delete(googleSearch.delete);

module.exports = router;