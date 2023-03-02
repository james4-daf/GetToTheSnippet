import React from "react";
import LoadingComponent from "../Loading";

function SnippetList(props) {
  const { snippetData } = props;

  if (!snippetData) {
    return <LoadingComponent />;
  }
  return (
    <div>
      {snippetData.map((snippet) => {
        return <p key={snippet._id}>{snippet.title}</p>;
      })}
    </div>
  );
}

export default SnippetList;
