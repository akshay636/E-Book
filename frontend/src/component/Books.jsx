import { Container } from "@mui/material";
import React, { createContext, useState } from "react";
import AddBook from "./AddBook";
import Tables from "./base/Tables";


const Books = () => {
const [books, setBooks]=useState();

  return (
    <div>
      <Container sx={{ mt: 4 }}>
        <AddBook setBooks={setBooks} />
        <Tables />
      </Container>
    </div>
  );
};

export default Books;
