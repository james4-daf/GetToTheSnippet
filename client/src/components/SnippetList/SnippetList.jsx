import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import LoadingComponent from "../Loading";
import SnippetDetail from "../SnippetDetail/SnippetDetail";

function SnippetList(props) {
  const { snippetData } = props;

  if (!snippetData) {
    return <LoadingComponent />;
  }

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          {snippetData.map((snippet) => {
            return (
              <div key={snippet._id} className="content">
                <Card sx={{ minWidth: 75, maxWidth: 345 }}>
                  <CardContent>
                    <Typography sx={{ fontSize: 25 }} gutterBottom>
                      <Link to={`/snippets/${snippet._id}`}>
                        {snippet.title}
                      </Link>
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {snippet.tags}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </Grid>

        <Routes>
          <Route
            path="/snippets/:_id"
            element={
              <Grid item xs={4}>
                <SnippetDetail />
              </Grid>
            }
          />
        </Routes>
      </Grid>
    </div>
  );
}

export default SnippetList;
