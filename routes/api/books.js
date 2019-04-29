const router = require("express").Router();
const googleSearch = require("../../controllers/googleSearch");

router.route("/")
.get(googleSearch.find)
.post(googleSearch.create);

router
  .route("/:id")
  .delete(googleSearch.remove);
module.exports = router;