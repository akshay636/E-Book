const Book = require("../models/Book");
var fs = require("fs");
require("../config/cloudinaryConfig");
const cloudinary = require("cloudinary").v2;

const img = async (path, uniqueFilename, category) => {
  return cloudinary.uploader
    .upload(path, {
      public_id: `books/${category}/${uniqueFilename}`,
      tags: `books`,
    })
    .then((result) => {
      fs.unlinkSync(path);
      return {
        message: "Success",
        url: result.url,
      };
    })
    .catch((er) => {
      return { message: er };
    });
};

const addBook = async (req, res, next) => {
  const path = req.file.path;
  const uniqueFilename = `${req.body.name}-${new Date().toISOString()}`;
  const category = req.body.category;
  var imgRes = await img(path, uniqueFilename, category);
  var url = imgRes.url;
  var obj = {
    name: req.body.name,
    author: req.body.author,
    year: req.body.year,
    price: req.body.price,
    language: req.body.language,
    pages: req.body.pages,
    link: req.body.link,
    category: req.body.category,
    image: {
      name: req.file.filename,
      url: url,
      contentType: req.file.mimetype,
    },
  };
  try {
    const ress = await Book.create(obj, (err, item) => {
      err
        ? res.json({ error: err })
        : res.status(201).json({
            message: "Book added succesfully!",
            data: item,
          });
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server erro!",
    });
  }
};

const deleteBook = async (req, res, next) => {
    let id = req.params.id;
  const result =   await Book.findByIdAndDelete(id);
  (result)?res.status(200).json({message:"Book deleted successfully!"}):res.status(401).json({message:"Book is not found!"})
};

const getAllBooks = async (req, res, next) => {
  const books = await Book.find();
  res.status(200).json({
    message: "Alll bookss",
    books: books,
  });
};

module.exports = {
  addBook,
  getAllBooks,
  deleteBook,
};
