import { isUrlValid } from "../regEx";

export function addBookValidation(form) {
    console.log(form)
  return form.name === "" ||
    form.author === "" ||
    form.price === "" ||
    form.pages === "" ||
    !isUrlValid(form.link)||
    form.category ||
    form.year
    ? true
    : false;
}
