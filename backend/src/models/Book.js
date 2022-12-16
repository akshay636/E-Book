const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    name: { type: String },
    author: { type: String },
    year: { type: Number },
    pages: { type: Number },
    price: { type: Number },
    language: { type: String },
    image: {
      name:String,
      url: String,
      contentType: String,
    },
    link: { type: String },
    category: { type: String },
  },
  { timestamps: true }
);

const book = mongoose.model("Book", bookSchema);
module.exports = book;
