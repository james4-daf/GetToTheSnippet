import AddIcon from '@mui/icons-material/Add';
//import DeleteIcon from "@mui/icons-material/Delete";
//import EditIcon from "@mui/icons-material/Edit";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { React, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import LoadingComponent from '../components/Loading/index';

function EditSnippet(props) {
  const { getSnippetData } = props;
  let navigate = useNavigate();
  const { id } = useParams();
  const [snippetDetail, setSnippetDetail] = useState(null);
  const [updating, setUpdating] = useState(false);

  async function fetchSnippets() {
    let response = await axios.get(
      `https://get-to-the-snippet.vercel.app/api/snippets/${id}`,
    );
    // console.log(response.data);
    setSnippetDetail(response.data);
  }
  useEffect(() => {
    fetchSnippets();

    // console.log(countries.getName(countryDetail.alpha2Code, "en"));
  }, []);

  if (!snippetDetail) {
    return <LoadingComponent />;
  }

  async function editSnippet(e) {
    e.preventDefault();
    setUpdating(true);
    let snippetObj = {
      title: e.target.title.value,
      code: e.target.code.value,
      tags: e.target.tags.value,
    };
    console.log(snippetObj);
    await axios.patch(
      `https://get-to-the-snippet.vercel.app/api/snippets/${id}`,
      snippetObj,
    );
    setUpdating(false);
    getSnippetData();
    navigate(`/snippets/${id}`);
  }

  return (
    <>
      <Grid item xs={9}>
        <Card sx={{ minWidth: 75, maxWidth: 345 }}>
          <CardContent>
            <form onSubmit={editSnippet}>
              {updating && <p>Updating Info . . .</p>}
              <TextField
                // onChange={(event) => {
                //   setTitle(event.target.value);
                // }}
                defaultValue={snippetDetail.title}
                id="title"
                label="Title"
                variant="outlined"
                name="title"
              />
              <TextField
                // onChange={(event) => {
                //   setPrice(event.target.value);
                // }}
                defaultValue={snippetDetail.code}
                id="code"
                label="code"
                variant="outlined"
                type="string"
                name="code"
                multiline
              />
              <TextField
                // onChange={(event) => {
                //   setPrice(event.target.value);
                // }}
                defaultValue={snippetDetail.tags}
                id="tags"
                label="tags"
                variant="outlined"
                type="string"
                name="tags"
              />
              <Button type="submit" variant="outlined" startIcon={<AddIcon />}>
                Edit
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

export default EditSnippet;
