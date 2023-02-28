const mongoose = require("mongoose");

let SnippetSchema = new mongoose.Schema({
  title: String,
  code: String,
});

let SnippetModel = mongoose.model("snippet", SnippetSchema);

module.exports = SnippetModel;
