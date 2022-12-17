import { BASE_URL } from "../services";
export const ADD_BOOK = `${BASE_URL}/addBook`;
export const ALL_BOOKS = `${BASE_URL}/getAllBooks`;
export const DELETE_BOOK = `${BASE_URL}/deleteBook`;

export const Categories = [
  "Educational",
  "Comics",
  "Fictional",
  "Non-Fictional",
];
export const dashboardCard = [
  "Books",
  "Category",
  "Users",
  "Audio Book",
  "Update User",
  "Delete User",
  "Add User",
  "Return Book",
];

export const pages = ["Dashboard", "Books", "About", "Contact"];
export const settings = ["Profile", "Account", "Dashboard", "Logout"];
export const bookInitialVal = {
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

export const msgInitial = {
  msg: "",
  color: "",
  isLoading: false,
};

export const imgInitial = { preview: "", file: "" };
