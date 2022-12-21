const express = require("express");
const router = express.Router();
const BookControler = require("../controllers/BooksController");
const uploadImage=require('../middlewares/imageMulter')

router.post("/addBook",uploadImage ,BookControler.addBook);

router.get("/getAllBooks", BookControler.getAllBooks);

router.delete('/deleteBook/:id', BookControler.deleteBook)

router.put('/editBook',BookControler.editBook);


module.exports = router;
