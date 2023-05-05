import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from 'react';
import '../../App.css';
function AddSnippet(props) {
  const { onHandleAdd, showForm, onSetShowForm } = props;
  return showForm ? (
    <form onSubmit={onHandleAdd} className="AddForm">
      <TextField
        // onChange={(event) => {
        //   setTitle(event.target.value);
        // }}
        id="title"
        label="Title"
        variant="outlined"
      />
      <TextField
        // onChange={(event) => {
        //   setPrice(event.target.value);
        // }}
        id="code"
        label="code"
        variant="outlined"
        type="string"
        multiline
      />
      <TextField
        // onChange={(event) => {
        //   setPrice(event.target.value);
        // }}
        id="tags"
        label="tags"
        variant="outlined"
        type="string"
      />
      <Button type="submit" variant="outlined" startIcon={<AddIcon />}>
        Add
      </Button>
      <Button
        type="submit"
        variant="outlined"
        startIcon={<CloseIcon />}
        onClick={() => {
          onSetShowForm(false);
        }}
      />
    </form>
  ) : (
    <Button
      type="button"
      variant="outlined"
      startIcon={<AddIcon />}
      onClick={() => {
        onSetShowForm(true);
      }}
    >
      Add Snippet
    </Button>
  );
}

export default AddSnippet;
