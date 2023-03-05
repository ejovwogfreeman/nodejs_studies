const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  body: {
    type: String,
  },
});

module.exports = mongoose.model("blog", blogSchema);
