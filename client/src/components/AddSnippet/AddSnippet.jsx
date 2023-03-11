import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React from "react";

function AddSnippet(props) {
  const { onHandleAdd, showForm, onSetShowForm } = props;
  return showForm ? (
    <form onSubmit={onHandleAdd}>
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
      showForm
    </Button>
  );
}

export default AddSnippet;
