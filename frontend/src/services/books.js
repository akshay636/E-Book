import axios from "axios"
import { ADD_BOOK, ALL_BOOKS, DELETE_BOOK, EDIT_BOOK } from "../constant";


const addBook=(book,image)=>{
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", book.name);
    formData.append("author", book.author);
    formData.append("price", book.price);
    formData.append("category", book.category);
    formData.append("pages", book.pages);
    formData.append("year", book.year);
    formData.append("language", book.language);
    formData.append("link", book.link);
return axios.post(ADD_BOOK,formData);
}

const editBook=(book,image)=>{
  console.log(book,'imagee')
  const formData = new FormData();
    formData.append("image", image);
    formData.append("name", book.name);
    formData.append("author", book.author);
    formData.append("price", book.price);
    formData.append("category", book.category);
    formData.append("pages", book.pages);
    formData.append("year", book.year);
    formData.append("language", book.language);
    formData.append("link", book.link);
    return axios.put(EDIT_BOOK,{book:formData,id:book._id})
}


const deleteBook=(id)=>{
  return axios.delete(`${DELETE_BOOK}/${id}`)
}


const getAllBooks=()=>{
    return axios.get(ALL_BOOKS);
}

export{addBook,getAllBooks,deleteBook,editBook}