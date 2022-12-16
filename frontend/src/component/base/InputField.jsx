import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function InputField(props) {
  const { name, label, className } = props;
  const capitailize = (str) => {
    let lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (

      <TextField
        helperText="Please enter your name"
        id="demo-helper-text-misaligned"
        label={capitailize(name)}

      />

  );
}
