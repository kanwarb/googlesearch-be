const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.options('*', cors());
// Set Headers to satisfy CORS

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
const routes = require("./routes/api");
app.use(routes);

// Add mongo db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlesearch");
// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
