import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DropDown(props) {
  const { name, data, value, handleChange } = props;

  const handleCaptilailize = (str) => {
    let lower = str?.toLowerCase();
    let firstLetter = str?.slice(0, 1).toUpperCase();
    return firstLetter + lower?.slice(1);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          {handleCaptilailize(name)}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name={name}
          value={value}
          label={handleCaptilailize(name)}
          onChange={handleChange}
        >
          {data?.map((val, index) => {
            return (
              <MenuItem key={`${val}+index/'${index}`} value={val}>
                {val}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
