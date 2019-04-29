const router = require("express").Router();
const googleSearch = require("../../controllers/googleSearch");

router.route("/")
.get(googleSearch.find)
.post(googleSearch.create)
.delete(googleSearch.remove);

router
  .route("/:id")
  .delete(booksController.remove);
module.exports = router;