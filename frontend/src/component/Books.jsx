import { Container } from "@mui/material";
import React, { createContext, useState } from "react";
import AddBook from "./AddBook";
import Tables from "./base/Tables";
import { bookInitialVal } from "../constant";

const Books = () => {
const [book, setBook] = useState(bookInitialVal);
const [isEditing, setIsEditing]=useState(false);
  return (
    <div>
      <Container sx={{ mt: 4 }}>
        <AddBook setBook={setBook} book={book} isEditing={isEditing} setIsEditing={setIsEditing} />
        <Tables setBook={setBook} setIsEditing={setIsEditing}/>
      </Container>
    </div>
  );
};

export default Books;
