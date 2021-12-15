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
    const response = await fetch(url)
    const data = await response.json()
    setNotes(data)
  }

  // function to add notes
  const addNotes = async (newNote) => {
    await fetch(url, {
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newNote)
    }).then(
      //update the list of notes
      getNotes()
  )};

  // to select a note to edit
  const getTargetNote = (note) => {
    setTargetNote(note);
    navigate("/edit");
  };

  // update note for handlesubmit prop
  const updateNote = async (note) => {
    await fetch(url + note.id, {
      method: "put",
      headers: {"Content-Type": "application/json"},
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

  const deleteAll = () => {
    notes.map((note) => {return deleteNote(note)})
    navigate('/')
  }

  const randomNote = () => {
    const noteIds = notes.map((note) => {return note.id})
    const page = window.location.href
    const pageNum = parseInt(page.slice(page.lastIndexOf('/')+1))
    const allOtherNotes = noteIds.filter((noteId) => {
      return noteId !== pageNum
    })
    if (allOtherNotes.length > 0) {
      const i = Math.floor(Math.random()*allOtherNotes.length)
      return `/note/${allOtherNotes[i]}`
    } else {
      return `/`
    }
  }

  //////////////
  // useEffects
  //////////////

  useEffect(() => {
    getNotes()
  })

  //////////////////////////
  // Returned JSX
  //////////////////////////

  return (
    <div className="App">
      <HeaderNav 
        url={url} 
        notes={notes} 
        deleteAll={deleteAll}
        randomNote={randomNote}
      />
      <div className="container">
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
    </div>
  );
}

export default App;
