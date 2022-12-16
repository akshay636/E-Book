import { Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { isUrlValid } from "./regEx";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import { addBook } from "../services/books";
import DropDown from "./base/DropDown";
import UploadBtn from "./base/UploadBtn";
import MsgBar from "./base/MsgBar";
import { addBookValidation } from "./validations";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const initialVal = {
  name: "",
  author: "",
  price: "",
  pages: "",
  year: "",
  language: "",
  image: "",
  category: "",
  link: "",
};

const img = {
  display: "block",
  maxWidth: "150px",
  maxHeight: "150px",
  width: "auto",
  height: "auto",
  mb: "5px",
  marginLeft: "20px",
};

const msgIntial = {
  msg: "",
  color: "",
  isLoading:false,
};

const data = ["Educational", "Comics", "Fictional", "Non-Fictional"];
const AddBook = () => {
  const [book, setBook] = useState(initialVal);
  const [image, setImage] = useState({ preview: "", file: "" });
  const [isAlert, setIsAlert] = useState(false);
  const [alertData, setAlertData] = useState(msgIntial);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBook({ ...book, [name]: value });
  };

  useEffect(() => {
    let timeout;
    if (isAlert) {
      timeout = setTimeout(() =>{ setIsAlert(false); setAlertData(msgIntial)}, 3000);
    }
    return () => clearTimeout(timeout);
  }, [isAlert]);

  const handleAddBook = async () => {
    if(!addBookValidation(book)){
      setIsAlert(true);
      setAlertData({ msg: "Fill all fields", color: "red",isLoading:false });
    }else{
      try {
        setAlertData({...msgIntial, isLoading:true });
        const res = await addBook(book, image?.file);
        if (res) {
          setAlertData({...msgIntial, msg: res?.data?.message, color: "green" });
          setIsAlert(true);
          setBook(initialVal);
          setImage({ preview: "", file: "" });
        }
      } catch (error) {
        console.log(error)
        setAlertData({ msg: error.message, color: "red",isLoading:false });
      }
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
          value={book.link}
          onChange={handleChange}
        />
        <DropDown
          data={data}
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
