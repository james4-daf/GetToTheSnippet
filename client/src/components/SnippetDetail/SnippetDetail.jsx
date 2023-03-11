import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function SnippetDetail(props) {
  const { id } = useParams();
  let navigate = useNavigate();
  const [showSnippet, setShowSnippet] = useState(null);

  useEffect(() => {
    async function fetchSnippets() {
      let response = await axios.get(
        `http://localhost:5005/api/snippets/${id}`
      );
      // console.log(response.data);
      setShowSnippet(response.data);
    }
    fetchSnippets();

    // console.log(countries.getName(countryDetail.alpha2Code, "en"));
  }, [id]);

  async function deleteSnippet(e) {
    const { snippetData, onSetSnippetData } = props;
    await axios.delete(`http://localhost:5005/api/snippets/${id}`);
    let filteredSnippets = snippetData.filter((t) => t._id !== id);
    onSetSnippetData(filteredSnippets);
    navigate(`/`);
  }

  if (showSnippet) {
    return (
      <>
        <Grid item xs={9}>
          <Card sx={{ minWidth: 75, maxWidth: 345 }}>
            <CardContent>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <span>{showSnippet.title}</span>
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <span>{showSnippet.code}</span>
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {showSnippet.tags}
              </Typography>
            </CardContent>

            <Link to={`/snippets/${showSnippet._id}/edit`}>
              <Button
                type="button"
                variant="outlined"
                startIcon={<EditIcon />}
              />
            </Link>
            <Button
              type="button"
              variant="outlined"
              startIcon={<DeleteIcon />}
              onClick={deleteSnippet}
            />
          </Card>
        </Grid>
      </>
    );
  }
}

export default SnippetDetail;
