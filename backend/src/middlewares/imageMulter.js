var multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './src/uploads/')
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage }).single('image')
module.exports=upload;