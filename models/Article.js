var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },
  date: {
    type: Date
  },
  url: {
    type: String
  }
});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;