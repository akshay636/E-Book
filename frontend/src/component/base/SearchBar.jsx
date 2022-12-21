import React,{useState} from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { searchBook } from '../../features/books/bookSlice';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { useDispatch } from 'react-redux';

export default function SearchBar(props) {
  const [searchStr, setSearchStr]=useState('');
  const{SearchBar,bk}=props;
  const dispatch=useDispatch();
  const handleChange=(e)=>{
    const{value}=e.target;
    setSearchStr(value);
  }

 const searchBooks=()=>{
   dispatch(searchBook({bk,searchStr}))
 }

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Books"
        inputProps={{ 'aria-label': 'search google maps' }}
        type="search"
        onChange={(e)=>handleChange(e)}
      />
      <IconButton onClick={()=>searchBooks()} type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon  />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
  );
}