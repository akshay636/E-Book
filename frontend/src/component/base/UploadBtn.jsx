import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

export default function UploadBtn(props) {
    const{name,onChange}=props
  return (
    <Stack direction="row" alignItems="center" spacing={0}>
      <Button variant="contained" component="label">
       Upload  {name}
        <input hidden accept="image/*" multiple type="file" onChange={onChange} />
      </Button>
    </Stack>
  );
}