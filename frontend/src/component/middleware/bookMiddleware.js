import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllBooks } from "../../services/books";

export const GetBooks= createAsyncThunk("/getAllBooks",async()=>await getAllBooks());
export const AddBook= createAsyncThunk('/addBook',)