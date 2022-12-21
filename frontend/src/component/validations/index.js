import { isUrlValid } from "../regEx";

export function addBookValidation(form,image) {
  const{name,author, price,pages,category,year,link,language}=form;
  const{preview}=image;
  return name === "" ||
    author === "" ||
    price === "" ||
    pages === "" ||
    category === "" ||
    year === "" ||
    link === ""||
    language===""
    ? { status: true, msg: "Please fill all details!" }
    : !isUrlValid(link)
    ? { status: true, msg: "Please provide valid url!" }
    : { status: false, msg: "Pass!" };
}
