
require("./src/config/config");
require('./src/config/cloudinaryConfig')
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const BookRoute = require("./src/routes/book");
const uploadFiles = require("express-fileupload");
require('dotenv').config();
const cloudinary= require('cloudinary').v2;


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const PORT = process.env.PORT ||5000;

app.listen(PORT, () => {
  console.log("Server is running on port!", PORT);
});

app.use("/api", cors(), BookRoute);


// var express = require("express");
// var multer = require("multer");
// var port = 8000;

// var app = express();

// // var storage = multer.diskStorage({
// //   destination: function (req, file, cb) {
// //     cb(null, "./uploads");
// //   },
// //   filename: function (req, file, cb) {
// //     cb(null, file.originalname);
// //   },
// // });
// // var upload = multer({ storage: storage });

// // const cloudinary = require("cloudinary").v2;
// // const bodyParser = require("body-parser");
// // const fs = require("fs");

// // // body parser configuration
// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({ extended: true }));

// // app.use(express.static(__dirname + "/public"));
// // app.use("/uploads", express.static("uploads"));

// // cloudinary.config({
// //   cloud_name: "dtplsm4zm",
// //   api_key: "688715921755613",
// //   api_secret: "tOQMtwvYPnAHFRdP76ogKEodgks",
// // });

// // async function uploadToCloudinary(locaFilePath) {
// //   // locaFilePath :
// //   // path of image which was just uploaded to "uploads" folder

// //   var mainFolderName = "main";
// //   // filePathOnCloudinary :
// //   // path of image we want when it is uploded to cloudinary
// //   var filePathOnCloudinary = mainFolderName + "/" + locaFilePath;

// //   return cloudinary.uploader
// //     .upload(locaFilePath, { public_id: filePathOnCloudinary })
// //     .then((result) => {
// //       // Image has been successfully uploaded on cloudinary
// //       // So we dont need local image file anymore
// //       // Remove file from local uploads folder
// //       fs.unlinkSync(locaFilePath);

// //       return {
// //         message: "Success",
// //         url: result.url,
// //       };
// //     })
// //     .catch((error) => {
// //       // Remove file from local uploads folder
// //       fs.unlinkSync(locaFilePath);
// //       return { message: "Fail" };
// //     });
// // }

// // cloudinary.uploader.upload(
// //   "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
// //   { public_id: "olympic_flag" },
// //   function (error, result) {
// //     console.log(result,'upload!');
// //   }
// // );

// // function buildSuccessMsg(urlList) {
// //   // Building success msg
// //   var response = '<h1><a href="/">Click to go to Home page</a><br></h1><hr>';

// //   for (var i = 0; i < urlList.length; i++) {
// //     response += "File uploaded successfully.<br><br>";
// //     response += `FILE URL: <a href="${urlList[i]}">${urlList[i]}</a>.<br><br>`;
// //     response += `<img src="${urlList[i]}" /><br><hr>`;
// //   }

// //   response += `<br><p>Now you can store this url in database or do anything with it  based on use case.</p>`;
// //   return response;
// // }

// // app.post(
// //   "/profile-upload-single",
// //   upload.single("profile-file"),
// //   async (req, res, next) => {
// //     // req.file is the `profile-file` file
// //     // req.body will hold the text fields, if there were any
// //     var locaFilePath = req.file.path;
// //     var result = await uploadToCloudinary(locaFilePath);
// //     var response = buildSuccessMsg([result.url]);

// //     return res.send(response);
// //   }
// // );

// // app.post(
// //   "/profile-upload-multiple",
// //   upload.array("profile-files", 12),
// //   async (req, res, next) => {
// //     // req.files is array of `profile-files` files
// //     // req.body will contain the text fields, if there were any
// //     var imageUrlList = [];

// //     for (var i = 0; i < req.files.length; i++) {
// //       var locaFilePath = req.files[i].path;
// //       var result = await uploadToCloudinary(locaFilePath);
// //       imageUrlList.push(result.url);
// //     }
// //     var response = buildSuccessMsg(imageUrlList);

// //     return res.send(response);
// //   }
// // );
// const cloudinary = require("cloudinary").v2;
// cloudinary.config({
//   cloud_name: "dtplsm4zm",
//   api_key: "688715921755613",
//   api_secret: "tOQMtwvYPnAHFRdP76ogKEodgks",
// });
// const fs = require("fs");
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./src/uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });
// const upload = multer({ storage }).single("file");
// // upload(req, res, function (err) {
// //   if (err) {
// //     return res.send(err);
// //   }
// //   const path = req.file.path;
// //   const uniqueFilename = new Date().toISOString();
// //   img(path, uniqueFilename);
// // });



// const img = (path, uniqueFilename) => {
//   return cloudinary.uploader.upload(path, { public_id: `blog/${uniqueFilename}`, tags: `blog` })
//     .then((result) => {
//       fs.unlinkSync(path);
//       // res.send(200);
//       return {
//         message: "Success",
//         url: result.url,
//       };
//     })
//     .catch((er) => {
//       return { message: er };
//     });
// };
// app.post("/upload",upload, async(req, res, next) => {
//   const path = req.file.path;
//     const uniqueFilename = new Date().toISOString();
//     var ress=await img(path,uniqueFilename);
//     var url= ress.url;
//     console.log(url)
//     res.send(ress);
// });

// app.listen(port, () =>
//   console.log(`Server running on port ${port}!\nClick http://localhost:8000/`)
// );
