const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String},
  authors: { type: Array, required: true },
  subtitle: { type: String},
  image: String,
  link: String,
  saved: Boolean,
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
