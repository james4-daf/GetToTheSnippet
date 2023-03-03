import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import AddSnippet from "../AddSnippet/AddSnippet";

import LoadingComponent from "../Loading";
import SnippetDetail from "../SnippetDetail/SnippetDetail";

function SnippetList(props) {
  const { snippetData, showForm, onSetShowForm, onSetSnippetData } = props;

  if (!snippetData) {
    return <LoadingComponent />;
  }

  return (
    <>
      <Grid item xs={3}>
        <AddSnippet
          onHandleAdd={props.onHandleAdd}
          onSetShowForm={onSetShowForm}
          showForm={showForm}
        />

        {snippetData.map((snippet) => {
          return (
            <div key={snippet._id} className="content">
              <Card sx={{ minWidth: 75, maxWidth: 345 }}>
                <CardContent>
                  <Typography sx={{ fontSize: 25 }} gutterBottom>
                    <Link to={`/snippets/${snippet._id}`}>{snippet.title}</Link>
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
            <SnippetDetail
              snippetData={snippetData}
              onSetSnippetData={onSetSnippetData}
            />
          }
        />
      </Routes>
    </>
  );
}

export default SnippetList;
