import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "../features/books/bookSlice";

export const store = configureStore({
  reducer: {
    book: bookSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
