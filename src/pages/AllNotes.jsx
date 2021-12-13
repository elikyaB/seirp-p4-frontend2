import React from "react"
import Note from "../components/Note"

const AllNotes = (props) => {
    return props.notes.map((note) => {
        return <Note key={note.id} note={note}/>
    })
}

export default AllNotes;