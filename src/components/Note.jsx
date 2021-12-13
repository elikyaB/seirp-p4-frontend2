import React from "react";
import { Link } from "react-router-dom";

const Note = ({ note }) => {
  return (
    <div className="Note">
      <Link to={`/note/${note.id}`}>
        <h1>{note.title}</h1>
      </Link>
      <h2>{note.body}</h2>
    </div>
  );
};

export default Note;