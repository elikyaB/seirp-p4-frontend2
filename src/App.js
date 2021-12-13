import './App.css';
import {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom";
import HeaderNav from "./components/HeaderNav"
import Main from "./components/Main"


function App() {

  ///////////////////////////
  // State and Other Variables
  ///////////////////////////

  const navigate = useNavigate()
  const url = "https://seirp-project4-alt.herokuapp.com/notes/";
  const [notes, setNotes] = useState([]);

  // an empty note for initializing the create form
  const nullNote = {
    title: "",
    body: ""
  }

  const [targetNote, setTargetNote] = useState(nullNote)

  //////////////
  // Functions
  //////////////
  const getNotes = async () => {
    const response = fetch(url)
    const data = await (await response).json()
    setNotes(data)
  }

  // function to add notes
  const addNotes = async (newNote) => {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newNote)
    })

    console.log(response)
    //update the list of notes
    getNotes()
  };

  // to select a note to edit
  const getTargetNote = (note) => {
    setTargetNote(note);
    navigate("/edit");
  };

  // update note for handlesubmit prop
  const updateNote = async (note) => {
    await fetch(url + note.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });

    //update notes
    getNotes();
  };

  const deleteNote = async (note) => {
    await fetch(url + note.id, {
      method: "delete"
    })

    getNotes()
    navigate('/')
  }

  //////////////
  // useEffects
  //////////////

  useEffect(() => {
    getNotes()
  }, [])

  //////////////////////////
  // Returned JSX
  //////////////////////////

  return (
    <div className="App">
      <HeaderNav url={url} />
      <Main 
        url={url}
        notes={notes}
        getTargetNote={getTargetNote}
        deleteNote={deleteNote}
        nullNote={nullNote}
        addNotes={addNotes}
        targetNote={targetNote}
        updateNote={updateNote}
      />
    </div>
  );
}

export default App;
