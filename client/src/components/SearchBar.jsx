import DirectionsIcon from '@mui/icons-material/Directions';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import React from 'react';

function SearchBar(props) {
  const { filterSnippets } = props;
  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        maxWidth: 350,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Snippets"
        // inputProps={{ "aria-label": "search google maps" }}
        onChange={(event) => {
          filterSnippets(event.target.value);
        }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
