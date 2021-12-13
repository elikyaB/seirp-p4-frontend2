import AllNotes from "../pages/AllNotes"
import SingleNote from "../pages/SingleNote";
import Form from "../pages/Form";
import {useState, useEffect} from "react"
import { Route, Routes, Link, useNavigate } from "react-router-dom";

const Main = (props) => {
  const targetNote = props.targetNote
  return (
    <div>
      <h1 className="Main">My Note List</h1>
      <Link to="/new"><button className="Main">Create New Note</button></Link>
      <Routes>
        <Route path="/" element={<AllNotes notes={props.notes} />}/>
        <Route path="/note/:id" element={<SingleNote 
          notes={props.notes} 
          edit={props.getTargetNote}
          deleteNote={props.deleteNote}
        />} />
        <Route path="/new" element={<Form 
          initialNote={props.nullNote}
          handleSubmit={props.addNotes}
          buttonLabel="Create Note"
        />} />
        <Route path="/edit" element={<Form
          initialNote={props.targetNote}
          handleSubmit={props.updateNote}
          buttonLabel="Update Note"
        />} />
      </Routes>
    </div>
  );
};

export default Main;