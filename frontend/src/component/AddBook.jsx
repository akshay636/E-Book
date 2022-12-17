import { Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React, {useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { addBook } from "../services/books";
import DropDown from "./base/DropDown";
import UploadBtn from "./base/UploadBtn";
import MsgBar from "./base/MsgBar";
import { addBookValidation } from "./validations";
import { Categories,bookInitialVal,msgInitial } from "../constant";
import { useDispatch } from "react-redux";
import { addBooks } from "../features/books/bookSlice";


const img = {
  display: "block",
  maxWidth: "150px",
  maxHeight: "150px",
  width: "auto",
  height: "auto",
  mb: "5px",
  marginLeft: "20px",
};

const imgInitial={ preview: "", file: "" }

const AddBook = ({setBooks}) => {
  const [book, setBook] = useState(bookInitialVal);
  const [image, setImage] = useState(imgInitial);
  const [isAlert, setIsAlert] = useState(false);
  const [alertData, setAlertData] = useState(msgInitial);
  const dispatch= useDispatch();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setBook({ ...book, [name]: value });
  };

  const handleAddBook = async () => {
    const {status,msg}=addBookValidation(book,image);
    if(status){
      setIsAlert(true);
      setAlertData({ msg: msg, color: "red",isLoading:false });
    }else{
      dispatch(addBooks({book:book,img:image?.file}))
      // try {
      //   setAlertData({...msgInitial, isLoading:true });
      //   const res = await addBook(book, image?.file);
      //   if (res) {
      //     setAlertData({...msgInitial, msg: res?.data?.message, color: "green" });
      //     setBooks(prev=>[...prev,res?.data?.data])
      //     setIsAlert(true);
      //     setBook(bookInitialVal);
      //     setImage(imgInitial);
      //   }
      // } catch (error) {
      //   console.log(error)
      //   setAlertData({ msg: error.message, color: "red",isLoading:false });
      // }
    }
  };

  const handleImage = (event) => {
    const { files } = event.target;
    if (files && files[0]) {
      setImage({
        preview: URL.createObjectURL(event.target.files[0]),
        file: files[0],
      });
    }
  };

  useEffect(() => {
    let timeout;
    if (isAlert) {
      timeout = setTimeout(() =>{ setIsAlert(false); setAlertData(msgInitial)}, 3000);
    }
    return () => clearTimeout(timeout);
  }, [isAlert]);

  return (
    <div>
      {isAlert ? <MsgBar mt={6} color={alertData?.color} msg={alertData?.msg} /> : ""}
      <Box
        component="form"
        noValidate
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr 1fr", lg: "repeat(3, 1fr)" },
          gap: 2,
          border: "2px solid #1976d2",
          padding: 2,
        }}
      >
        <TextField
          helperText="Please enter Book name"
          id="demo-helper-text-misaligned"
          label="Name"
          name="name"
          value={book.name}
          onChange={handleChange}
        />
        <TextField
          helperText="Please enter Author name"
          id="demo-helper-text-misaligned"
          label="Author"
          name="author"
          value={book.author}
          onChange={handleChange}
        />
        <TextField
          helperText="Please enter Publish Year  "
          id="demo-helper-text-misaligned"
          label="Year"
          type="number"
          name="year"
          value={book.year}
          onChange={handleChange}
        />
        <TextField
          helperText="Please enter  Year "
          id="demo-helper-text-misaligned"
          label="Price"
          type="number"
          name="price"
          value={book.price}
          onChange={handleChange}
        />
        <TextField
          helperText="Please enter Language  "
          id="demo-helper-text-misaligned"
          label="Language"
          name="language"
          value={book.language}
          onChange={handleChange}
        />
        <TextField
          helperText="Please enter  Pages"
          id="demo-helper-text-misaligned"
          label="Pages"
          type="number"
          name="pages"
          value={book.pages}
          onChange={handleChange}
        />
        <TextField
          helperText="Please enter  Pages"
          id="demo-helper-text-misaligned"
          label="Link"
          type="text"
          name="link"
          placeholder="https://"
          value={book.link}
          onChange={handleChange}
        />
        <DropDown
          data={Categories}
          name="category"
          value={book.category}
          handleChange={handleChange}
        />
        <Stack direction="row" alignItems="center" spacing={0}>
          <UploadBtn name="image" value={book.image} onChange={handleImage} />
          <img src={image?.preview} style={img}></img>
        </Stack>
        <Button
          variant="contained"
          onClick={handleAddBook}
          sx={{ height: "40px" }}
          disabled={alertData?.isLoading}
        >
          {alertData?.isLoading?"Adding...":"Add Book"}
        </Button>
      </Box>
    </div>
  );
};

export default AddBook;
