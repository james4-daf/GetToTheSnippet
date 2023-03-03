import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SnippetDetail() {
  const { id } = useParams();
  const [showSnippet, setShowSnippet] = useState(null);

  useEffect(() => {
    async function fetchSnippets() {
      let response = await axios.get(
        `http://localhost:5005/api/snippets/${id}`
      );
      console.log(response.data);
      setShowSnippet(response.data);
    }
    fetchSnippets();

    // console.log(countries.getName(countryDetail.alpha2Code, "en"));
  }, [id]);

  if (showSnippet) {
    return (
      <>
        <Grid item xs={9}>
          <Card sx={{ minWidth: 75, maxWidth: 345 }}>
            <CardContent>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <p>{showSnippet.title}</p>
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <p>{showSnippet.code}</p>
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {showSnippet.tags}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </>
    );
  }
}

export default SnippetDetail;
