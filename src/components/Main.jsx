import AllNotes from "../pages/AllNotes"
import SingleNote from "../pages/SingleNote";
import Form from "../pages/Form";
import { Route, Routes } from "react-router-dom";

const Main = (props) => {
  return (
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
  );
};

export default Main;