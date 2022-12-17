import { isUrlValid } from "../regEx";

export function addBookValidation(form,image) {
  console.log(form)
  return form.name === "" ||
    form.author === "" ||
    form.price === "" ||
    form.pages === "" ||
    form.category === "" ||
    form.year === "" ||
    form.link === ""||
    form.language===""||
    image.preview===""
    ? { status: true, msg: "Please fill all details!" }
    : !isUrlValid(form.link)
    ? { status: true, msg: "Please provide valid url!" }
    : { status: false, msg: "Pass!" };
}
