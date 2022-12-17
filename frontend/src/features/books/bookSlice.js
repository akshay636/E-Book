import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteBook, getAllBooks, addBook } from "../../services/books";

const initialState = {
  loading: false,
  books: [],
  error: "",
};

export const fetchBooks = createAsyncThunk("fetch/books", () => {
  return getAllBooks();
});

export const delBook = createAsyncThunk("deleteBook", (id) => {
  return deleteBook(id);
});

export const addBooks = createAsyncThunk("add", ({ book, img }) => {
  return addBook(book, img);
});

const bookSlice = createSlice({
  name: "book",
  initialState,
  extraReducers: {
    [fetchBooks.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.loading = false;
      state.books = action.payload.data.books;
    },
    [fetchBooks.rejected]: (state, action) => {
      state.loading = false;
      state.books = [];
      state.error = action.error.message;
    },
    

    [delBook.pending]: (state, action) => {
      state.loading = true;
    },
    [delBook.fulfilled]: (state, action) => {
      const { arg } = action.meta;
      console.log(arg);
      state.loading = false;
      state.books = state.books.filter((val) => val._id !== arg);
      state.error = "";
    },
    [delBook.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },


    [addBooks.pending]: (state, action) => {
      state.loading = true;
    },
    [addBooks.fulfilled]: (state, action) => {
      console.log(action);
      console.log("first");
      state.loading = false;
      state.books = [...state.books, action.payload.data.data];
      state.error = "";
    },
    [addBooks.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});
// const bookSlice = createSlice({
//   name: "books",
//   initialState,
//   extraReducers: (builder) => {
//     builder.addCase(fetchBooks.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addCase(fetchBooks.fulfilled, (state, action) => {
//       state.loading = false;
//       state.books = action.payload.data.books;
//       state.error = "";
//     });
//     builder.addCase(fetchBooks.rejected, (state, action) => {
//       state.loading = false;
//       state.books = [];
//       state.error = action.error.message;
//     });
//   },
// });
export default bookSlice.reducer;
