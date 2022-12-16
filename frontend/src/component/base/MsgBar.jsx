import React,{useState} from 'react'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
const MsgBar = ({msg,color,mt}) => {
    const [state, setState] = useState({
        open: true,
        vertical: 'top',
        horizontal: 'center',
      });
      const { vertical, horizontal, open } = state;
  return (
    <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          message={msg}
          key={vertical + horizontal}
          ContentProps={{
            sx: {
              background: `${color}`,
              justifyContent: "center",
              mt:mt,
            },
          }}
        />
  )
}

export default MsgBar