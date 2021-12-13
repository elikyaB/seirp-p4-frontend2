import React from "react"
import {Link, useParams} from "react-router-dom"

const SinglePost = (props) => {
    // get the params from the url
    const params = useParams()
    const id = parseInt(params.id)

    // find the particular post the user wants to see based on the param
    const note = props.notes.find((p) => p.id === id)
    console.log(note)

    return <div className="SingleNote">
        <h1>{note?.title}</h1>
        <h2>{note?.body}</h2>
        <div className="buttons">
            <button onClick={() => props.deleteNote(note)}>Delete</button>
            <button onClick={() => props.edit(note)}>Edit</button>
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
    </div>
}

export default SinglePost;